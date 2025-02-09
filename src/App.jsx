import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import AppRoutes from './routes/AppRoute'; 

function App() {
  const [isShowMobile, setShowMobile] = useState(false);

  const handleMobile = () => {
    setShowMobile(!isShowMobile);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleMobile={handleMobile} />
        <main>
          <div className={`menu-mobile-popup ${isShowMobile ? 'modal-menu--open' : ''}`}>
            {/* Mobile menu content */}
          </div>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;