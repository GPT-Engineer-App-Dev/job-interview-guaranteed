import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const CourseDetail = () => {
  return (
    <div>
      <Header />
      <section className="hero bg-cover bg-center text-white" style={{ backgroundImage: "url('https://placehold.co/1200x600')" }}>
        <div className="container mx-auto text-center py-20">
          <h1 className="text-5xl font-bold">Web Development</h1>
          <p className="text-2xl mt-4">Become a professional web developer</p>
        </div>
      </section>
      <section className="course-info py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">Course Details</h2>
          <p className="mb-6">This course covers the following topics:</p>
          <ul className="list-disc list-inside mb-6">
            <li>HTML, CSS, and JavaScript</li>
            <li>React and Redux</li>
            <li>Node.js and Express</li>
            <li>Database Management</li>
          </ul>
          <p className="mb-6">Duration: 12 weeks</p>
          <p className="mb-6">Schedule: Monday to Friday, 9 AM to 5 PM</p>
          <p className="mb-6">Eligibility: Basic knowledge of programming</p>
        </div>
      </section>
      <section className="instructor py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">Meet Your Instructor</h2>
          <div className="flex items-center">
            <img src="https://placehold.co/150x150" alt="Instructor" className="rounded-full mr-6" />
            <div>
              <h3 className="text-2xl font-bold">John Doe</h3>
              <p className="mt-2">John is a seasoned web developer with over 10 years of experience in the industry.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">What You Will Gain</h2>
          <ul className="list-disc list-inside">
            <li>Industry Certification</li>
            <li>Hands-on Projects</li>
            <li>Career Support</li>
          </ul>
        </div>
      </section>
      <section className="testimonials py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Student" className="mx-auto rounded-full" />
              <p className="mt-4">This course changed my life!</p>
              <h3 className="text-xl font-bold mt-2">John Doe</h3>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/100x100" alt="Student" className="mx-auto rounded-full" />
              <p className="mt-4">I got a job immediately after completing the course.</p>
              <h3 className="text-xl font-bold mt-2">Jane Smith</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="cta py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Enroll Now</h2>
          <p className="text-2xl mt-4">Secure your spot in this course and start your journey today</p>
          <Button className="mt-8">Apply Now</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseDetail;