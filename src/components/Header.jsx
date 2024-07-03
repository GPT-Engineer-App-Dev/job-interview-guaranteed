import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">FreeCourses</Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/overview" className="hover:text-blue-600">Courses</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Button>Apply Now</Button>
        </nav>
      </div>
    </header>
  );
};