import React from "react";

interface HeadTextProps {
    children: string;
}

const HeadText: React.FC<HeadTextProps> = ({ children }) => {
    return (
        <div className="flex items-center gap-5 mb-10">
            <div className="h-10 w-5 bg-primaryColor rounded"></div>
            <h3>{children}</h3>
        </div>
    );

}

export default HeadText;
