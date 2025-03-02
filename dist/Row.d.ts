import React, { ReactNode } from "react";
interface RowProps {
    children: ReactNode;
    justify?: "start" | "center" | "end" | "between" | "around";
    align?: "top" | "middle" | "bottom";
    className?: string;
}
export declare const Row: React.FC<RowProps>;
export {};
