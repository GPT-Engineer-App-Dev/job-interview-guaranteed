import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
          <a href="/terms-of-service" className="mr-4">Terms of Service</a>
        </div>
        <div className="mb-4">
          <a href="https://facebook.com" className="mr-4">Facebook</a>
          <a href="https://twitter.com" className="mr-4">Twitter</a>
          <a href="https://instagram.com" className="mr-4">Instagram</a>
        </div>
        <div>
          <p>Contact us: info@freecourses.com</p>
          <form className="mt-4">
            <input type="email" placeholder="Subscribe to our newsletter" className="p-2 rounded-l" />
            <button type="submit" className="p-2 bg-blue-600 rounded-r">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};