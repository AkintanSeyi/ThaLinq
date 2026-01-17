import React from 'react';

const App = () => {
  const headerImage = "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1767983937/1000002239_umegt0.jpg";

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', textAlign: 'center' }}>
      {/* Header Image */}
      <header style={{ width: '100%', maxHeight: '300px', overflow: 'hidden' }}>
        <img 
          src={headerImage} 
          alt="ThaLinq Party Hub Header" 
          style={{ width: '100%', objectFit: 'cover' }} 
        />
      </header>

      {/* Support Content */}
      <main style={{ padding: '40px 20px' }}>
        <h1>ThaLinq Support</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Your ultimate Party Hub. Having trouble with your groups? We're here to help.
        </p>

        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <h3>Contact Us</h3>
          <p>Email: <strong>akintanseyi5@gmail.com</strong></p>
          <p>Response time: Usually within 24 hours</p>
        </div>
      </main>

      <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#999' }}>
        &copy; {new Date().getFullYear()} ThaLinq App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;