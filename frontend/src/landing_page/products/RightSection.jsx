const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-md-6">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <a
            href={learnMore}
            className="text-decoration-none"
          >
            Learn More →
          </a>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </section>
  );
};

export default RightSection;