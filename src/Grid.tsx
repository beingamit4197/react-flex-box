import React, { ReactNode } from "react";
import "./styles.css";

interface GridProps {
  children: ReactNode;
  fluid?: boolean;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, fluid, className }) => {
  return (
    <div className={`grid ${fluid ? "grid-fluid" : ""} ${className || ""}`}>
      {children}
    </div>
  );
};
