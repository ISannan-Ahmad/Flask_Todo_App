from flask import render_template, redirect, url_for, flash, request, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import current_user, login_user, login_required, logout_user
from . import db
from .models import User, Task
from .forms import RegisterForm, LoginForm
from datetime import datetime
routes = Blueprint('routes', __name__)

@routes.route('/')
def home():
    return render_template('index.html')


@routes.route('/register', methods=["POST" , "GET"])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('routes.dashboard'))
    
    form = RegisterForm()

    if form.validate_on_submit():
        existing_user = User.query.filter_by(email=form.email.data).first()
        if existing_user:
            flash("Email already Exist")
            return redirect(url_for('routes.register'))
        
        hashed_password = generate_password_hash(
            form.password.data,
            method='pbkdf2:sha256',
            salt_length=8
        )
        email = form.email.data
        name = form.name.data

        new_user = User(name = name, email = email, password = hashed_password)
        db.session.add(new_user)
        db.session.commit()

        flash("Registeration Successfull! Please Log in.", "success")
        return redirect(url_for('routes.login'))

    return render_template('register.html', form=form)


@routes.route('/login', methods=["GET", "POST"])
def login():
    
    form = LoginForm()
    if form.validate_on_submit():
        password = form.password.data
        result = db.session.execute(db.Select(User).where(User.email == form.email.data))
        user = result.scalar()

        if not user:
            flash("The email does not exist, Please try again")
            return redirect(url_for('routes.login'))
        
        elif not check_password_hash(user.password, password):
            flash("Incorrect Password, Please try again")
            return redirect(url_for('routes.login'))
        else:
            login_user(user)
            return redirect(url_for('routes.dashboard'))

    return render_template("login.html", form=form)


@routes.route('/dashboard', methods=["GET", "POST"])
@login_required
def dashboard():
    tasks = current_user.tasks
    if request.method == "POST":
        task = request.form.get("task")
        priority = request.form.get("priority")
        due_date = request.form.get("date")    
        due_date = datetime.strptime(due_date, "%Y-%m-%d").date()
        current_date = datetime.today().date()
        if due_date >= current_date:
            new_task = Task(content=task, user_id=current_user.id, priority=priority, due_date=due_date)
            db.session.add(new_task)
            db.session.commit()
            flash("Task Added Successfully", "success")
            return redirect(url_for('routes.dashboard'))
        else:
            flash("Due date cannot be in the past")

    return render_template("dashboard.html", tasks = tasks)


@routes.route('/delete-task/<int:task_id>')
@login_required
def delete_task(task_id):
    task_to_del = db.get_or_404(Task, task_id)
    if task_to_del.user_id == current_user.id:
        db.session.delete(task_to_del)
        db.session.commit()
        flash("Task Deleted Successfully", "success")
        return redirect(url_for('routes.dashboard'))


@routes.route('/edit/<int:task_id>', methods=["GET", "POST"])
@login_required
def edit_task(task_id):
    task = db.get_or_404(Task, task_id)

    if task.user_id != current_user.id:
        flash("Unauthorized access.", "danger")
        return redirect(url_for('routes.dashboard'))

    if request.method == "POST":
        updated_content = request.form.get("task")
        updated_priority = request.form.get("priority")
        updated_due_date = request.form.get("date")
        updated_due_date = datetime.strptime(updated_due_date, "%Y-%m-%d").date()
        current_date = datetime.today().date()
        if updated_due_date >= current_date:
            task.content = updated_content
            task.priority = updated_priority
            task.due_date = updated_due_date
            db.session.commit()
            flash("Task updated successfully!", "success")
            return redirect(url_for("routes.dashboard"))
        else:
            flash("Date cannot be in the past")
            return redirect(url_for("routes.dashboard"))

    return render_template("edit.html", task=task)


@routes.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('routes.login'))


@routes.route('/toggle-status/<int:task_id>', methods=["GET", "POST"])
@login_required
def toggle_status(task_id):
    task = db.get_or_404(Task, task_id)
    if task.user_id != current_user.id:
        return redirect(url_for('routes.dashboard'))
    
    task.done = not task.done
    db.session.commit()
    return redirect(url_for('routes.dashboard'))

@routes.route('/about')
def about():
    return render_template("about.html")
