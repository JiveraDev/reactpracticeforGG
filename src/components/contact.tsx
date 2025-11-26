import './services.css';

const contact = [
  {
    icon: "🏘️",
    title: "Visit Us",
    details: "123 Pet Care Lane, Suite 100\nSpringfield, ST 12345",
  },
  {
    icon: "📞",
    title: "Call Us",
    details: "(555) 123-4567\nEmergency: (555) 987-6543",
  },
  {
    icon: "✉️",
    title: "Email Us",
    details: "info@pawcarevet.com\nsupport@pawcarevet.com",
  },
  {
    icon: "⏰",
    title: "Hours",
    details: "Mon-Fri: 8:00 AM - 8:00 PM\nSat-Sun: 9:00 AM - 6:00 PM",
  },
];

export function ContactInfo(){
  return(
    <section id="contact" className="py-20 bg-dark pb-5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="fw-bold display-5 text-dark">Contact Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {contact.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4 contactItemCard">
                  <div className="mb-3 fs-1">{item.icon}</div>  
                  <h5 className="card-title mb-3 fw-bold">{item.title}</h5>
                  <p className="card-text text-secondary white-space-pre-line">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}