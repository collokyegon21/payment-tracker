const steps = [
  {
    number: "01",
    icon: "bi-person-plus",
    title: "Create an account",
    description:
      "Sign up with your details so your plans and payments are saved under your name.",
  },
  {
    number: "02",
    icon: "bi-plus-circle",
    title: "Create a plan",
    description:
      "Add the purchase, the agreed total, the start and due dates, and how often you pay.",
  },
  {
    number: "03",
    icon: "bi-cash-stack",
    title: "Record each payment",
    description:
      "Every time you pay, log the amount, the date and the transaction reference.",
  },
  {
    number: "04",
    icon: "bi-graph-down-arrow",
    title: "Watch the balance go down",
    description:
      "Each payment lowers what you owe. Follow it on the plan page and the dashboard until it reaches zero.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-light-subtle">
      <div className="container py-lg-4">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <span className="text-primary fw-semibold text-uppercase small">
            How it works
          </span>
          <h2 className="display-6 fw-bold mt-2 mb-3">
            step by step to using paytracker
          </h2>
          <p className="text-secondary mb-0">
            From signing up to seeing a plan fully paid off.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step) => (
            <div className="col-12 col-sm-6 col-lg-3" key={step.number}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="display-6 fw-bold text-body-tertiary">
                      {step.number}
                    </span>
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
