const Universe = () => {
  const logoStyle = {
    width: "170px",
    height: "60px",
    objectFit: "contain",
  };

  return (
    <div className="container">
      <div className="row">

        <div className="text-center mb-5">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-md-4 text-center mb-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Thematic investment platform</p>
        </div>

        <div className="col-md-4 text-center mb-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Algo & strategy platform</p>
        </div>

        <div className="col-md-4 text-center mb-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Options trading platform</p>
        </div>

        <div className="col-md-4 text-center mb-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Asset management</p>
        </div>

        <div className="col-md-4 text-center mb-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Bonds trading platform</p>
        </div>

        <div className="col-md-4 text-center mb-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Insurance</p>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary btn-lg px-4">
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  );
};

export default Universe;