import React from "react";
import "./Card.scss";

interface CardProps{
  children: React.ReactNode;
  customClassName?: string;
}

export default function CardComponent( { children, customClassName }: CardProps ){
  
  const cardClasses = `card-container ${customClassName || ""}`;
  
  return(
    <div className={cardClasses}>
      <b></b>
      <div className="card-content">
        <div className="card-title">
          {children}
        </div>
      </div>
    </div>
  )
}