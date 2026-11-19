const features = [
  {
    icon: "bi-wallet2",
    title: "Track Every Payment",
    description:
      "Record every instalment you make and maintain a complete history of your payments.",
  },
  {
    icon: "bi-calculator",
    title: "Automatic Balance Calculation",
    description:
      "Know exactly how much you have paid and how much remains on each purchase.",
  },
  {
    icon: "bi-calendar-check",
    title: "Instalment Schedules",
    description:
      "Organise daily, weekly and monthly payment commitments with clear due dates.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Payment Progress",
    description:
      "Visualise your repayment progress and see how close you are to completing a purchase.",
  },
  {
    icon: "bi-clock-history",
    title: "Transaction History",
    description:
      "Access previous payments, dates, transaction references and payment methods.",
  },
  {
    icon: "bi-collection",
    title: "Multiple Purchases",
    description:
      "Manage land, vehicles, electronics and other instalment-based purchases in one place.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-5 bg-gray-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">FEATURES</span>

          <h2 className="fw-bold display-6 mt-2">
            Everything You Need to Stay on Track
          </h2>

          <p className="text-secondary mx-auto mt-3 feature-intro">
            Take control of your payment commitments with simple tools designed
            to make instalment tracking easier.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-md-6 col-lg-4" key={feature.title}>
              <div className="feature-card h-100 p-4 rounded-4">
                <div className="feature-icon mb-4">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <h5 className="fw-bold mb-3">{feature.title}</h5>

                <p className="text-secondary mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
