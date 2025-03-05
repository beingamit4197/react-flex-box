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
  const justifyClass = justify ? `beingamit4197-justify-${justify}` : "";
  const alignClass = align ? `beingamit4197-align-${align}` : "";

  return (
    <div
      className={`beingamit4197-row ${justifyClass} ${alignClass} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};
