import React, { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "top" | "middle" | "bottom";
  className?: string;
}

export const Row: React.FC<RowProps> = ({
  children,
  justify,
  align,
  className,
}) => {
  const justifyClass = justify ? `justify-${justify}` : "";
  const alignClass = align ? `align-${align}` : "";

  return (
    <div className={`row ${justifyClass} ${alignClass} ${className || ""}`}>
      {children}
    </div>
  );
};
