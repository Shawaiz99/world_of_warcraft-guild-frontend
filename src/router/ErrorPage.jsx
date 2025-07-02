import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Oh, Something happened!</h1>
      <p>Uh, I guess you dont have anything to show yet on Error Page?</p>
      <div className="text-center btn-group">
        <Link 
          className="btn btn-primary mt-3" 
          to="/login"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
