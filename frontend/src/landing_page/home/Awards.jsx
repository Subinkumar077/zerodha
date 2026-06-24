const Awards = () => {
  return (
    <div className="container">
      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6 p-5">
          <h1>Largest stock broker in India</h1>

          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Stocks & IPOs</li>
                <li>Commodity derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Direct mutual funds</li>
                <li>Currency derivatives</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-3"
            style={{ width: "90%" }}
          />
        </div>

      </div>
    </div>
  );
};

export default Awards;