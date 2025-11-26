export function Footer() {
  return (
    <footer className="bg-dark text-light pb-4 pt-5">
      <div className="container">

        <div className="row g-6 mb-5">

          {/* Brand */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <span className="text-white">🐾</span>
              </div>
              <span className="fs-5 fw-semibold text-white">Vetfocus Care Veterinary Clinic</span>
            </div>
            <p className="small text-secondary">
              Providing exceptional veterinary care with compassion and expertise since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-md-end">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#services" className="text-secondary text-decoration-none hover-link">Services</a></li>
              <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none hover-link">About Us</a></li>
              <li className="mb-2"><a href="#team" className="text-secondary text-decoration-none hover-link">Our Team</a></li>
              <li><a href="#contact" className="text-secondary text-decoration-none hover-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-4 text-md-end">
            <h5 className="text-white mb-3">Services</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-link">General Checkups</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-link">Vaccinations</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-link">Surgery</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Emergency Care</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-top border-secondary pt-4 text-center small text-secondary">
          <p className="mb-0">&copy; 2024 PawCare Veterinary Clinic. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
