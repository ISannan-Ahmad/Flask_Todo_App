from . import db        
from flask_login import UserMixin
from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

class User(db.Model, UserMixin):
    id : Mapped[int] = mapped_column(Integer, primary_key=True)
    email : Mapped[str] = mapped_column(String(100), unique=True)
    password : Mapped[str] = mapped_column(String(100))
    name : Mapped[str] = mapped_column(String(100))
    tasks = db.relationship('Task', backref='owner', lazy=True)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    done = db.Column(db.Boolean, default=False)