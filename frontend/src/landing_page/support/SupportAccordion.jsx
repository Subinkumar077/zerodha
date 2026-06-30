const SupportAccordion = () => {
    const supportData = [
        {
            title: "Account Opening",
            links: [
                "Resident Individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
            ],
        },
        {
            title: "Your Zerodha Account",
            links: ["Your Profile", "Nomination", "Bank Details"],
        },
        {
            title: "Kite",
            links: ["Orders", "Holdings", "Positions"],
        },
        {
            title: "Funds",
            links: ["Add Funds", "Withdraw Funds"],
        },
        {
            title: "Console",
            links: ["Reports", "Tax P&L"],
        },
        {
            title: "Coin",
            links: [
                "Mutual Funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on Coin",
                "Payments and Orders",
                "General",
            ],
        },
    ];

    return (
        <div className="container my-5">
            <div className="row gx-5">
                {/* Left Section */}
                <div className="col-lg-8">
                    <div className="accordion" id="supportAccordion">
                        {supportData.map((item, index) => (
                            <div
                                className="accordion-item mb-3"
                                key={index}
                                style={{
                                    border: "1px solid #e9ecef",
                                }}
                            >
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button ${index !== 0 ? "collapsed" : ""
                                            }`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        style={{
                                            backgroundColor: "#fff",
                                            fontSize: "18px",
                                            fontWeight: "500",
                                            padding: "18px 20px",
                                            boxShadow: "none",
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                </h2>

                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                        }`}
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div
                                        className="accordion-body"
                                        style={{
                                            paddingLeft: "35px",
                                        }}
                                    >
                                        <ul>
                                            {item.links.map((link, i) => (
                                                <li key={i} className="mb-3">
                                                    <a
                                                        href="/"
                                                        className="text-decoration-none"
                                                        style={{
                                                            color: "#387ed1",
                                                        }}
                                                    >
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-4">
                    {/* Latest Updates */}
                    <div
                        className="card mb-4"
                        style={{
                            backgroundColor: "#FFF7EA",
                            borderLeft: "6px solid #ff9800",
                            borderRadius: "0",
                        }}
                    >
                        <div className="card-body">
                            <ul className="mb-0">
                                <li className="mb-3">
                                    <a
                                        href="/"
                                        style={{
                                            color: "#387ed1",
                                        }}
                                    >
                                        Latest Intraday leverages and Square-off timings
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        style={{
                                            color: "#387ed1",
                                        }}
                                    >
                                        Rights Entitlements listing in June 2026
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="card">
                        <div
                            className="card-header"
                            style={{
                                backgroundColor: "#f8f9fa",
                                fontWeight: "600",
                                fontSize: "18px",
                            }}
                        >
                            Quick Links
                        </div>

                        <div className="list-group list-group-flush " style={{padding:"5px"}}>
                            <a href="/" className="list-group-item text-decoration-none">
                                1. Track account opening
                            </a>

                            <a href="/" className="list-group-item text-decoration-none">
                                2. Track segment activation
                            </a>

                            <a href="/" className="list-group-item text-decoration-none">
                                3. Intraday margins
                            </a>

                            <a href="/" className="list-group-item text-decoration-none">
                                4. Kite user manual
                            </a>

                            <a href="/" className="list-group-item text-decoration-none">
                                5. Learn how to create a ticket
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportAccordion;