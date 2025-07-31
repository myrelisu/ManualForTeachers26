import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
    label: string;
    value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 100);
        return () => clearTimeout(timer);
    }, [value]);

    const color = value >= 90 ? 'bg-teal-500' : value >= 75 ? 'bg-sky-500' : 'bg-rose-500';

    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-200">{label}</span>
                <span className="text-base font-bold text-white">{value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                    className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${color}`} 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;