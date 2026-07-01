const Hero = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "70px",
        marginBottom: "90px",
      }}
    >
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img
            src="media/images/landing.svg"
            alt="Hero image"
            className="img-fluid"
            style={{
              width: "85%",
              maxWidth: "900px",
              marginBottom: "70px",
            }}
          />

          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Invest in everything
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#666",
              maxWidth: "750px",
              margin: "0 auto 40px",
              lineHeight: "1.8",
            }}
          >
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "#387ed1",
              border: "none",
              fontSize: "1.2rem",
              padding: "12px 35px",
              borderRadius: "4px",
              fontWeight: "500",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;