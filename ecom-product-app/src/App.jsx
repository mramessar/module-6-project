import { useState } from 'react';
import ProductList from './components/ProductList';
import './index.css';

function App() {
  
  const [products] = useState([
    {
      id: 1,
      name: 'Waffle Party Kit',
      completion: 65,
      description: 'Celebrate your corporate milestones the Lumen way. Waffles not included.',
    },
    {
      id: 2,
      name: 'Outdoor Retreat and Team-Building Occurrence (ORTBO)',
      completion: 85,
      description: 'A day of compliance and carefully monitored bonding in nature. Please enjoy each of Ms. Huang\'s songs equally.',
    },
    {
      id: 3,
      name: 'Wellness Session with Ms. Casey',
      completion: 75,
      description: 'A personalized, emotionally detached wellness experience. Your outie enjoys working at Lumon.',
    },
    {
      id: 4,
      name: 'Choreography & Merriment (C&M) Experience',
      completion: 100,
      description: 'An exclusive performance of synchronized joy by MDR employees. Led by the esteemed Mr. Milchick.',
    },
  ]);

  return (
    <div className="app-container">
      
      <div className="store-header">
        <img src="/lumon-logo.png" alt="Lumon Logo" className="header-logo" />
        <h1>LUMON COMPANY STORE</h1>
      </div>

      <ProductList products={products} />

      <footer className="footer-bar">
        MDR DEPARTMENT | FILE COMPLETION MONITOR ACTIVE | © LUMON INDUSTRIES
      </footer>
    </div>
  );
}

export default App;
