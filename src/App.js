import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/products/Products';
import About from './pages/about/About';
import arData from './asset/ar.json';
import enData from './asset/en.json';
import Header from './components/Header';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer';
import Home from './pages/home/Home';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [header, setHeader] = useState(enData);
  const [contact, setContact] = useState(enData);
  const [about, setAbout] = useState(enData);
  const [products, setProducts] = useState(enData);
  const [home, setHome] = useState(enData);
  const [footer, setFooter] = useState(enData);

  useEffect(() => {
    const isRTL = language === 'ar';
    if (isRTL) {
      setHeader(arData);
      setProducts(arData);
      setAbout(arData);
      setContact(arData);
      setHome(arData);
      setFooter(arData);
    } else {
      setHeader(enData);
      setProducts(enData);
      setAbout(enData);
      setContact(enData);
      setHome(enData);
      setFooter(enData);
    }
  }, [language]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  const isRTL = language === 'ar';

  return (
    <Router>
      <div>
        <div className='flex justify-between bg-zinc-800 w-full z-50 h-16 fixed' style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <div className='w-full'>
            <Header language={language} content={header} onSelectLanguage={handleLanguageChange} />
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home language={language} content={home} />} />
          <Route path='/products' element={<Products language={language} content={products} />} />
          <Route path='/about' element={<About language={language} content={about} />} />
          <Route path='/contact' element={<Contact language={language} content={contact} />} />
        </Routes>
      </div>
      <Footer language={language} content={footer} />
    </Router>
  );
};

export default App;
