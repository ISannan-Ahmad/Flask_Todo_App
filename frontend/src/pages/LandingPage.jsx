import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // Use your own image in /assets

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <header className="text-center pt-16 pb-12 animate-fade-in-up px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          Organize Your Life <span className="text-blue-600">Effortlessly</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Manage your tasks with our smart, simple, and elegant ToDo app.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </header>

      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-16 animate-slide-in md:w-4/5 mx-auto">
        <div className="md:w-1/2 text-center md:text-center space-y-4">
          <h2 className="text-3xl font-semibold mb-4">Why Our App?</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              ✔ Prioritize your tasks with colorful labels
            </li>
            <li>
              ✔ Set deadlines and get notified
            </li>
            <li>
              ✔ Edit, complete, or delete tasks anytime
            </li>
            <li>
              ✔ Fully responsive & modern design
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md mx-auto animate-fade-in rounded-xl"
          />
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white md:w-4/5 mx-auto rounded-2xl">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What People Say</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Khan",
              comment: "TaskZen changed how I plan my week! It's simple and powerful.",
              emoji: "✨"
            },
            {
              name: "Adnan Malik",
              comment: "I love the clean UI and how easy it is to mark tasks as done.",
              emoji: "✅"
            },
            {
              name: "Huda Raza",
              comment: "Finally, a ToDo app that respects my time and looks good!",
              emoji: "🚀"
            }
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 animate-fade-in"
            >
              <p className="text-gray-700 italic mb-4">"{t.comment}"</p>
              <div className="flex items-center gap-2">
                <span className="text-xl">{t.emoji}</span>
                <h4 className="text-md font-semibold">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-gray-100 md:w-4/5 mx-auto animate-slide-in">
        <h2 className="text-3xl font-bold mb-6">Ready to Take Control?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Join thousands of users managing their tasks smartly with TaskZen.
        </p>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          onClick={() => navigate("/register")}
        >
          Create Your Free Account
        </button>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} TaskZen. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;