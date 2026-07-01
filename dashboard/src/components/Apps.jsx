const Apps = () => {
  return (
    <div
      className="container-fluid"
      style={{
        width: "820px",
        backgroundColor: "#fff",
        padding: "30px",
      }}
    >
      {/* Top Row */}
      <div className="row text-center mb-5">
        <div className="col-3">
          <a href="https://kite.zerodha.com" target="_blank" rel="noreferrer">
            <img
              src="/images/kite.svg"
              alt="Kite"
              style={{ width: "55px", height: "55px", objectFit: "contain" }}
            />
          </a>

          <h5 style={{ marginTop: "15px" }}>Kite</h5>

          <p style={{ color: "#777", fontSize: "15px" }}>
            Trading platform
          </p>
        </div>

        <div className="col-3">
          <a
            href="https://console.zerodha.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/console.svg"
              alt="Console"
              style={{ width: "55px", height: "55px", objectFit: "contain" }}
            />
          </a>

          <h5 style={{ marginTop: "15px" }}>Console</h5>

          <p style={{ color: "#777", fontSize: "15px" }}>Backoffice</p>
        </div>

        <div className="col-3">
          <a href="https://kite.trade" target="_blank" rel="noreferrer">
            <img
              src="/images/kite-connect.svg"
              alt="Kite Connect"
              style={{ width: "55px", height: "55px", objectFit: "contain" }}
            />
          </a>

          <h5 style={{ marginTop: "15px" }}>Kite Connect</h5>

          <p style={{ color: "#777", fontSize: "15px" }}>Trading APIs</p>
        </div>

        <div className="col-3">
          <a href="https://coin.zerodha.com" target="_blank" rel="noreferrer">
            <img
              src="/images/coin.svg"
              alt="Coin"
              style={{ width: "55px", height: "55px", objectFit: "contain" }}
            />
          </a>

          <h5 style={{ marginTop: "15px" }}>Coin</h5>

          <p style={{ color: "#777", fontSize: "15px" }}>Mutual funds</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="row">
        {/* Utilities */}
        <div className="col-4">
          <h4 style={{ marginBottom: "20px" }}>Utilities</h4>

          <p>
            <a
              href="https://zerodha.com/brokerage-calculator/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              Calculators
            </a>
          </p>

          <p>
            <a
              href="https://zerodha.com/brokerage-calculator/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              Brokerage calculator
            </a>
          </p>

          <p>
            <a
              href="https://zerodha.com/margin-calculator/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              Margin calculator
            </a>
          </p>

          <p>
            <a
              href="https://coin.zerodha.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              SIP calculator
            </a>
          </p>
        </div>

        {/* Updates */}
        <div className="col-4">
          <h4 style={{ marginBottom: "20px" }}>Updates</h4>

          <p>
            <a
              href="https://zerodha.com/z-connect/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              Z-Connect blog
            </a>
          </p>

          <p>
            <a
              href="https://zerodha.com/marketintel/bulletin/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              Circulars / Bulletin
            </a>
          </p>

          <p>
            <a
              href="https://zerodha.com/ipo/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              IPOs
            </a>
          </p>

          <p>
            <a
              href="https://zerodha.com/marketintel/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", textDecoration: "none" }}
            >
              Markets
            </a>
          </p>
        </div>

        {/* Education */}
        <div className="col-4">
          <h4 style={{ marginBottom: "20px" }}>Education</h4>

          <div className="d-flex justify-content-start">
            <div className="text-center me-5">
              <a
                href="https://zerodha.com/varsity/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/logo.png"
                  alt="Varsity"
                  style={{
                    width: "45px",
                    height: "45px",
                    objectFit: "contain",
                  }}
                />
              </a>

              <p
                style={{
                  marginTop: "10px",
                  color: "#555",
                }}
              >
                Varsity
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://tradingqna.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/tqna.png"
                  alt="Trading Q&A"
                  style={{
                    width: "45px",
                    height: "45px",
                    objectFit: "contain",
                  }}
                />
              </a>

              <p
                style={{
                  marginTop: "10px",
                  color: "#555",
                }}
              >
                Trading Q&amp;A
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;