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
    xs ? `beingamit4197-col-xs-${xs}` : "",
    sm ? `beingamit4197-col-sm-${sm}` : "",
    md ? `beingamit4197-col-md-${md}` : "",
    lg ? `beingamit4197-col-lg-${lg}` : "",
    xl ? `beingamit4197-col-xl-${xl}` : "",
  ].join(" ");

  return (
    <div className={`beingamit4197-col ${colClasses} ${className || ""}`}>
      {children}
    </div>
  );
};
