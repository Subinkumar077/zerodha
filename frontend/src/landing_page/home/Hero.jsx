const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero image"
            className="img-fluid mb-5"
          />

          <h1 className="mt-4">Invest in everything</h1>

          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary btn-lg px-4"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;