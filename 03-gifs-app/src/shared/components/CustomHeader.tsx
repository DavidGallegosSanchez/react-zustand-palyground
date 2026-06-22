import React from "react";

interface Prop {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Prop) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
