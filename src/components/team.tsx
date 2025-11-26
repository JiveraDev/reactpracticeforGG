import './gototop.css';
let teams = [
    {
        name: "Dr. Amelio Sprata",
        role: "chief veterinarian",
        specialization:"Surgery and Internal Medicine",
        image: "/src/assets/vet1.png"
    },
    
    {
        name: "Dr. Scanchex Furlong",
        role: "Senior veterinarian",
        specialization:"Internal Medicine and Dermatology",
        image: "/src/assets/vet2.png"
    },
    {
        name: "Dr. Advidal Asenschon ",
        role: "chief veterinarian",
        specialization:"Surgery and Internal Medicine",
        image: "/src/assets/vet3.png"
    },

]

export function Team() {
    return(
        <section id="team" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-dark">Meet Our Veterinary Team</h2>
          <p className="text-secondary fs-5">
            Our experienced and compassionate veterinary team is dedicated to providing the best care for your pets.
          </p>
        </div>
        <div>
            <div className="row g-4">
                {teams.map((member, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card border-0 shadow-sm">
                            <img src={member.image} alt={member.image} className="card-img-top object-fit-cover VetImageOnTeam"/>
                            <div className="card-body text-center">
                                <h5 className="card-title mb-1 vetTeamName">{member.name.toUpperCase()}</h5>

                                  {/* const formattedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1); */}
                                <p className="text-muted mb-1 text-capitalize">{member.role}</p>
                                <p className="text-secondary">{member.specialization}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
    );
}
