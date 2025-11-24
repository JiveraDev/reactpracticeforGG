import "./appointment.css";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Navigation */}
      {/* <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white">🐾</span>
            </div>
            <span className="text-xl text-blue-900">PawCare Veterinary</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700">
            <hone className="w-4 h-4 mr-2" />
            Call Now
          </button>
        </div>
      </nav> */}

      {/* Hero Content */}
     <div className="container py-5">
  <div className="row align-items-center g-5">
    {/* Left Column */}
    <div className="col-lg-6">
      <h1 className="display-4 text-primary mb-4">
        Compassionate Care for Your Beloved Pets
      </h1>
      <p className="lead mb-4 text-secondary">
        Expert veterinary services with a gentle touch. We treat your pets like family because they are family.
      </p>

      <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
        <button className="btn btn-primary">Book Appointment</button>
        <button className="btn btn-outline-primary">Emergency Care</button>
      </div>

      <div className="row text-center">
        <div className="col">
          <div className="h2 text-primary mb-1">8+</div>
          <div className="text-muted">Years Experience</div>
        </div>
        <div className="col">
          <div className="h2 text-primary mb-1">9K+</div>
          <div className="text-muted">Happy Pets</div>
        </div>
        <div className="col">
          <div className="h2 text-primary mb-1">12 Hour</div>
          <div className="text-muted">Emergency Care</div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-lg-6 position-relative">
      <div className="rounded shadow-lg overflow-hidden">
        <img
          src="../src/assets/image.png"
          alt="Veterinary care"
          className="img-fluid"
        />
      </div>

      <div className="position-absolute bottom-0 start-0 translate-middle bg-white p-3 rounded shadow d-flex align-items-center gap-3 cortification" >
        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center checking-green" >
          ✓
        </div>
        <div>
          <div className="small text-muted">Certified</div>
          <div className="text-dark">Licensed Veterinarians</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
