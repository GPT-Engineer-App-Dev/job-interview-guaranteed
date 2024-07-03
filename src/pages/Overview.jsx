import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const courses = [
  {
    title: "Web Development",
    description: "Learn to build modern web applications.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Data Science",
    description: "Master data analysis and machine learning.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Digital Marketing",
    description: "Become an expert in online marketing strategies.",
    image: "https://placehold.co/600x400",
  },
];

const testimonials = [
  {
    name: "John Doe",
    text: "This course changed my life!",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Jane Smith",
    text: "I got a job immediately after completing the course.",
    image: "https://placehold.co/100x100",
  },
];

const Overview = () => {
  return (
    <div>
      <Header />
      <section className="hero bg-cover bg-center text-white" style={{ backgroundImage: "url('https://placehold.co/1200x600')" }}>
        <div className="container mx-auto text-center py-20">
          <h1 className="text-5xl font-bold">Unlock Your Future with Free Government Funded Courses</h1>
          <p className="text-2xl mt-4">Guaranteed Job Interviews Upon Completion</p>
          <Button className="mt-8">Get Started</Button>
        </div>
      </section>
      <section className="courses py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index}>
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{course.description}</p>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="benefits py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <img src="https://placehold.co/100x100" alt="Free Tuition" />
              <h3 className="text-2xl font-bold mt-4">Free Tuition</h3>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Expert Instructors" />
              <h3 className="text-2xl font-bold mt-4">Expert Instructors</h3>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Flexible Schedule" />
              <h3 className="text-2xl font-bold mt-4">Flexible Schedule</h3>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Guaranteed Job Interviews" />
              <h3 className="text-2xl font-bold mt-4">Guaranteed Job Interviews</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">What Our Students Say</h2>
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="text-center">
                    <img src={testimonial.image} alt={testimonial.name} className="mx-auto rounded-full" />
                    <p className="mt-4">{testimonial.text}</p>
                    <h3 className="text-xl font-bold mt-2">{testimonial.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="cta py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-2xl mt-4">Apply now and take the first step towards a brighter future</p>
          <Button className="mt-8">Apply Now</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Overview;