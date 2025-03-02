import React, { ReactNode } from "react";

interface ColProps {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

export const Col: React.FC<ColProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
}) => {
  const colClasses = [
    xs ? `col-xs-${xs}` : "",
    sm ? `col-sm-${sm}` : "",
    md ? `col-md-${md}` : "",
    lg ? `col-lg-${lg}` : "",
    xl ? `col-xl-${xl}` : "",
  ].join(" ");

  return (
    <div className={`col ${colClasses} ${className || ""}`}>{children}</div>
  );
};
