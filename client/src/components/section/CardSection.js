import React from "react";
import Card from "../common/Card";

const CardSection = ({ courses, children }) => {
  return (
    <div>
      {children}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {courses.map((item) => (
          <Card key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
