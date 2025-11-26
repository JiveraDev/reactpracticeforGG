import './gototop.css';


import { useEffect, useState } from "react";


export function Gototop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <i
      className={`bi bi-arrow-up-circle-fill gototop ${visible ? "show" : ""}`}
      onClick={() =>
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      }
    ></i>
  );
}



function LoginButtons() {

  
  const handleModalShow = () =>{
     const modalElement = document.getElementById("loginModal");
    if (modalElement) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }else {
      return null;
  }
  }
    return (
        <button className="btn btn-primary text-white px-4" 
        onClick={()=> {
          handleModalShow();
          console.log("Log In button clicked")
        }}>Log In</button>
    );
}



export  {LoginButtons};
