import { useState } from "react"; // React hook to manage local component state
import { useNavigate } from "react-router-dom";

function Login() {
  // State to store the user's email input
  const [email, setEmail] = useState("");

  // State to store the user's password input
  const [password, setPassword] = useState("");

  // Tracks if request is in progress
  const [loading, setLoading] = useState(false);
  // Stores any error messages
  const [error, setError] = useState(null);

  // Allows us to redirect programmatically
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    setLoading(true); // Start loading state (optional visual feedback)
    setError(null); // Clear any previous error

    try {
      // Send login request to your FastAPI backend
      const response = await fetch("http://localhost:5001/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Sending JSON data
        },
        body: JSON.stringify({ email, password }), // Convert state to JSON string
      });

      // If response is not okay (like 401), throw an error
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      // Success: parse the JSON response
      const data = await response.json();
      console.log("Login successful:", data);

      // Save the token to localStorage
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data);

      // Redirect the user to the next page
      navigate("/guilds");

      // TODO: Store the token or navigate to another page
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message); // Set error to display in the UI
    } finally {
      setLoading(false); // Always stop loading, success or error
    }
  }

  return (
    // Bootstrap container with some top margin and max width
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Login</h2>

      {/* Show error message if login fails */}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {/* Login form (Linked the form to the handleSubmit function) */}
      <form onSubmit={handleSubmit}>
        {/* Email Input Field */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email" // Specifies the input is for email
            className="form-control" // Bootstrap styling
            value={email} // Binds the input to `email` state
            onChange={(e) => setEmail(e.target.value)} // Updates state on type
            required // Makes the field required
          />
        </div>

        {/* Password Input Field */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password" // Hides input characters
            className="form-control" // Bootstrap styling
            value={password} // Binds the input to `password` state
            onChange={(e) => setPassword(e.target.value)} // Updates state
            required // Makes the field required
          />
        </div>

        {/* Submit Button (not yet functional) */}
        <button
          type="submit"
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
          disabled={loading}
        >
          {loading && (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}

export default Login; // Makes this component available to the router
