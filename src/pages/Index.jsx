import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Free Government Funded Courses</h1>
      <p>Unlock your future with our free courses and guaranteed job interviews.</p>
      <Link to="/overview">
        <Button className="mt-4">Explore Courses</Button>
      </Link>
    </div>
  );
};

export default Index;