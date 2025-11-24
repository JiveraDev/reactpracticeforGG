import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar  from './components/navbar';
import { Hero } from './components/appointment';
// import App from './App.tsx'
// import Message, { SeccondMessage } from './message';
// import ListGroup from './components/ListGroup.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    {/* <App />
    {/* <Message />  
    <SeccondMessage /> */}
    {/* <ListGroup items={['Item 1', 'Item 2', 'Item 3']} /> */} 
  </StrictMode>,
)
