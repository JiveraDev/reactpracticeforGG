import './services.css';
const services = [
    {
        icon: "🩺", 
        name: "General Checkup",
        description:"Comprehensive health examinations to ensure your pet's well-being."
    },     
     {
        icon: "💉", 
        name: "Vacinations",
        description:"Complete vaccination services to protect your pets from common diseases."
    },       
    {
    icon: "🔪",
    name: "Surgery",
    description: "Advanced surgical procedures performed with state-of-the-art equipment."
  },
  {
    icon: "🚑",
    name: "Emergency Care",
    description: "Emergency services for urgent veterinary needs."
  },
  {
    icon: "🐕",
    name: "Pet Boarding",
    description: "Pet boarding services in a safe and comfortable environment."
  },
  {
    icon: "🏠",
    name: "House Visit",
    description: "Convenient in-home veterinary services for your pet's comfort."
  }
];

export function Services() {
    return (
        <section id="services" className="py-5">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Our Services</h2>
                <p className="text-muted">Comprehensive care for your beloved pets</p>
            </div>
            <div className="row g-4">
                {services.map((service, index) => (
                    <div key={index} className="col-md-4 " >
                        <div className="card h-100 text-center p-4 serviceList">
                            <div className="display-4 mb-3">{service.icon}</div>
                            <h5 className="fw-bold mb-2">{service.name}</h5>    
                            <p className="text-muted">{service.description}</p>
                        </div>
                    </div>
                ))}

             
            </div>
         
            
        </div>
        
    </section>

  );
}