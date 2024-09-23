import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p>
            PT KMDS, Tbk. has been established for more than twenty years in the F&B industry and is widely recognized for distributing superior beverage products.
          </p>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-bold mb-2">We Support</h2>
          <ul>
            <li>Beverage Innovation</li>
            <li>Coffee & Machine</li>
            <li>Factory Supply</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-2">Our Address</h2>
          <p>Jl. Komplek Pergudangan Multi Guna T8 No 16</p>
          <p>Alam Sutera, Serpong Utara, Tangerang Selatan - Banten 15325</p>
          <p>+62-21 2235 3388</p>
          <p>+62-87 8880 00085</p>
          <p>Email: <a href="mailto:info@kmds.co.id" className="text-yellow-500">info@kmds.co.id</a></p>
          <p>Website: <a href="https://www.kmds.co.id" target="_blank" rel="noopener noreferrer" className="text-yellow-500">www.kmds.co.id</a></p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p>&copy; 2024 PT KMDS, Tbk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
