
const features = [
  "State-of-the-art medical equipment",
  "Experienced and caring veterinary team",
  "Comfortable and stress-free environment",
  "Affordable pricing and payment plans",
  "Online appointment booking",
  "Pet wellness programs"
];

export function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* TEXT COLUMN */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="fw-bold display-5 text-dark mb-4">
              Why Choose Vetfocus Care Veterinary Clinic?
            </h2>

            <p className="fs-5 text-muted mb-4">
              With over 9 years of experience, we've built a reputation 
              for providing veterinary care with compassion 
              and expertise. Our modern facility and dedicated team ensure 
              your pet receives the best possible treatment.
            </p>

            <div className="d-flex flex-column gap-3">
              {features.map((feature, index) => (
                <div key={index} className="d-flex align-items-start gap-2">
                  <i className="text-success flex-shrink-0 mt-1 bi bi-check-circle-fill" />
                  <span className="text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="rounded overflow-hidden shadow-lg">
              <img
                src="/src/assets/lobbyImage.png"
                alt="Veterinarian with pet"
                className="img-fluid w-100"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}