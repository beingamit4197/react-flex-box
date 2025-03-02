import React, { ReactNode } from "react";
import "./styles.css";
interface GridProps {
    children: ReactNode;
    fluid?: boolean;
    className?: string;
}
export declare const Grid: React.FC<GridProps>;
export {};
