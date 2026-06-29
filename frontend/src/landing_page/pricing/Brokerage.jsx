const brokerageData = [
  {
    img: "media/images/pricing0.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    marginTop: "mt-3",
  },
  {
    img: "media/images/other-trades.svg",
    title: "Intraday and F&O trades",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    marginTop: "mt-3",
  },
  {
    img: "media/images/pricingMF.svg",
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
    marginTop: "mt-3",
  },
];

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        {brokerageData.map((item, index) => (
          <div key={index} className="col-4 text-center">
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p className={`text-center ${item.marginTop}`} style={{ color: "#6c757d" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brokerage;