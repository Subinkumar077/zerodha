const Footer = () => {
  return (
    <footer className="bg-light border-top pt-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "60%" }}
            />
            <p className="mt-2">&copy; 2010 - 2026, Zerodha Broking Ltd.

              All rights reserved.  </p>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-4">
            <h5>Account</h5>
            <ul className="list-unstyled text-muted">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>HUF demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled text-muted">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled text-muted">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
              <li>Referral program</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled text-muted">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
              <li>Gift Nifty</li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Footer Text */}
        <div className="row">
          <div className="col text-muted fs-6">
            <p
              className="small text-muted"
              style={{ textAlign: "justify" }}
            >
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633. CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019. Registered Address: Zerodha Broking Ltd.,
              #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
              J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.

              <br />
              <br />

              For complaints pertaining to securities broking, write to
              complaints@zerodha.com and for DP-related complaints write to
              dp@zerodha.com. Please ensure you carefully read the Risk
              Disclosure Document as prescribed by SEBI.

              <br />
              <br />

              Procedure to file a complaint on SEBI SCORES: Register on the
              SCORES portal. Mandatory details include Name, PAN, Address,
              Mobile Number, and Email ID.

              <br />
              <br />

              Investments in securities market are subject to market risks.
              Read all the related documents carefully before investing.

              <br />
              <br />

              Attention Investors:
              <br />
              1. Stock brokers can accept securities as margins only through
              the pledge mechanism in the depository system.
              <br />
              2. Update your email ID and mobile number with your broker and
              depository participant.
              <br />
              3. Check your securities, mutual funds, and bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;