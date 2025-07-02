function Guilds() {
  // Get the token from localStorage
  const token = localStorage.getItem("token");

  // Function to decode JWT and extract user info
  function decodeToken(token) {
    try {
      const payload = token.split(".")[1]; // Grab the middle part of the JWT
      const decoded = atob(payload); // Decode from base64
      return JSON.parse(decoded); // Parse JSON string into an object
    } catch (e) {
      console.error("Failed to decode token:", e);
      return null;
    }
  }

  // Extract the decoded payload
  const userInfo = token ? decodeToken(token) : null;

  return (
    <div className="container mt-5 text-center">
      <h2>Guilds Page</h2>
      {userInfo ? (
        <p className="text-muted">Welcome back, {userInfo.sub}</p>
      ) : (
        <p className="text-danger">No user information found.</p>
      )}
    </div>
  );
}

export default Guilds;
