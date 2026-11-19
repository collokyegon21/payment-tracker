const steps = [
  {
    number: "01",
    icon: "bi-plus-circle",
    title: "Add the purchase",
    description:
      "Enter what you bought, the agreed total and how you plan to pay for it.",
  },
  {
    number: "02",
    icon: "bi-cash-stack",
    title: "Record each payment",
    description:
      "Each time you pay, log the amount, the date and the transaction reference.",
  },
  {
    number: "03",
    icon: "bi-graph-up",
    title: "Watch the balance drop",
    description:
      "See your payment history, what you still owe and how far along you are.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-light-subtle">
      <div className="container py-lg-4">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 560 }}>
          <span className="text-primary fw-semibold text-uppercase small">
            How it works
          </span>
          <h2 className="display-6 fw-bold mt-2 mb-0">
            Track a purchase in three steps
          </h2>
        </div>

        <div className="row g-4">
          {steps.map((step) => (
            <div className="col-12 col-md-4" key={step.number}>
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div
                    className="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: 64, height: 64 }}
                  >
                    <i className={`bi ${step.icon} fs-3`}></i>
                  </div>

                  <div className="text-primary fw-semibold small text-uppercase mb-1">
                    Step {step.number}
                  </div>

                  <h3 className="h5 fw-bold mb-2">{step.title}</h3>
                  <p className="text-secondary mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
