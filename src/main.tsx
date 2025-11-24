import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar  from './components/navbar';
import { Hero } from './components/appointment';
import { Services } from './components/Services';
import { Gototop } from './components/button';
import { About } from './components/about';

// import App from './App.tsx'
// import Message, { SeccondMessage } from './message';
// import ListGroup from './components/ListGroup.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      
    <Navbar />
    <Hero />
    <Services />
    {/* <App />
    {/* <Message />  
    <SeccondMessage /> */}
    {/* <ListGroup items={['Item 1', 'Item 2', 'Item 3']} /> */} 
    <About />
    <Gototop />
  </StrictMode>,
)
