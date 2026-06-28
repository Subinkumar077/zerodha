const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="d-flex gap-4 mb-4">
            <a
              href={tryDemo}
              className="text-decoration-none"
            >
              Try Demo →
            </a>

            <a
              href={learnMore}
              className="text-decoration-none"
            >
              Learn More →
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LeftSection;