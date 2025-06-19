import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useCartStore } from './store/cartStore'; // Importa el store


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Obtén el contador de productos del carrito global
  const cartItemCount = useCartStore(state =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

         <Footer />

    </div>
  );
}

export default App;