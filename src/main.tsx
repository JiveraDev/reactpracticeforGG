import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar  from './components/navbar';
import { Hero } from './components/appointment';
import { Services } from './components/Services';
import { Gototop } from './components/button';
import { About } from './components/about';
import { Team } from './components/team';
import { ContactInfo } from './components/contact';
import { Footer } from './components/footer';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { LoginForm } from './components/Login';



// import App from './App.tsx'
// import Message, { SeccondMessage } from './message';
// import ListGroup from './components/ListGroup.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <LoginForm />
    <Hero />
    <Services />

    <About />
    <Team />
    <ContactInfo />
    <Footer />
    <Gototop />
    
    
    
    
    
    
        {/* <App />
    {/* <Message />  
    <SeccondMessage /> */}
    {/* <ListGroup items={['Item 1', 'Item 2', 'Item 3']} /> */} 
  </StrictMode>,
)
