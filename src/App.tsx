// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import your main components and the new routes file
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes'; // <-- Import the routes
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Optional: remove scroll lock
      document.body.style.overflow = 'unset';
    }, 2500); // 2.5 seconds

    // Optional: lock scroll during loading
    document.body.style.overflow = 'hidden';

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Router>
      <AnimatePresence>
        {isLoading ? (
          <Preloader />
        ) : (
          <Layout>
            <AppRoutes />
          </Layout>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;