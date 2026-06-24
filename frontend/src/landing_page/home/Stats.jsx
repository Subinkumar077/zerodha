const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-md-6">
          <h1 className="mb-4 fs-2">Trust with confidence</h1>

          <h4 className="fs-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
            crores of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4 className="fs-4">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, gamification, or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h4 className="fs-4">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.
          </p>

          <h4 className="fs-4">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with
            your money.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ width: "75%" }}
          />

          <div>
            <a
              href="#"
              className="me-4 text-decoration-none"
            >
              Explore our products →
            </a>

            <a
              href="#"
              className="text-decoration-none"
            >
              Try Kite demo →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;