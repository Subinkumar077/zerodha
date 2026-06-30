import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <a
            href="/"
            className="fs-2 text-dark"
            style={{ textDecoration: "none", fontWeight: "600" }}
          >
            Support Portal
          </a>

          <button className="btn btn-primary">My Tickets</button>
        </div>

        <div className="position-relative">
          <FaSearch
            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
          />

          <input
            type="text"
            className="form-control ps-5 py-3 text-muted"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;