import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [location]);

  const handleLogout = async () => {
    await fetch("http://localhost:5000/logout", {
      method: "GET",
      credentials: "include",
    });
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const linkStyle = (path) =>
    `hover:underline ${
      location.pathname === path ? "font-bold text-white" : "text-white/80"
    }`;

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-wide">
          TaskZen
        </Link>

        <div className="space-x-4">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/about" className={linkStyle("/about")}>
            About
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className={linkStyle("/dashboard")}>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-white/90 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className={linkStyle("/register")}>
                Register
              </Link>
              <Link to="/login" className={linkStyle("/login")}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
