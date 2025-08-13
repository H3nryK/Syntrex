// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import your main components and the new routes file
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes'; // <-- Import the routes

// The Layout component remains here to wrap the application
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes /> {/* <-- Use the routes component here */}
      </Layout>
    </Router>
  );
}

export default App;