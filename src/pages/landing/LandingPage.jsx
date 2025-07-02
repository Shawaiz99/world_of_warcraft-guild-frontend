import { Link } from "react-router-dom"; // Link allows navigation without full page reload
import LandingNavbar from "../../components/LandingNavbar"; // Navigation bar
import Footer from "../../components/Footer"; // Footer

// Main Landing Page Component
function LandingPage() {
  return (
    <>
      {/* Navigation bar */}
      <LandingNavbar />

      {/* Page content centered in a container */}
      <div className="container text-center mt-5">
        {/* Big heading */}
        <h1 className="mb-3">Welcome to the WoW Guild Manager!</h1>

        {/* Small description */}
        <p className="lead text-muted">
          Create and manage your World of Warcraft guild — recruit members,
          assign leadership, and more.
        </p>

        {/* Link to login page */}
        <Link to="/login" className="btn btn-primary mt-4">
          Log In
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;
