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
export declare const Col: React.FC<ColProps>;
export {};
