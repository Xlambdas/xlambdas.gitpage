// src/components/ui/equip-card/equip-card.tsx
import { cn } from "../../../lib/utils";
import React from "react";

interface EquipCardProps {
    image: string;
    name: string;
    description: string;
    direction?: "left" | "right";
    className?: string;
}

export const EquipCard: React.FC<EquipCardProps> = ({
    image, name, description, direction = "left", className
}) => {
    return (
        <div className={cn(
            "flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-primary-light shadow-md hover:shadow-lg transition-all duration-300 max-w-2xl",
            direction === "right" && "flex-col-reverse md:flex-row-reverse",
            className
        )}>
            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg object-cover shrink-0"
            />

            {/* Content */}
            <div className="flex flex-col flex-1 min-h-0">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-primary-dark">
                    {name}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-primary-dark/80">
                    {description}
                </p>
            </div>
        </div>
    );
};
