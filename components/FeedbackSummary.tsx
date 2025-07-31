import React from 'react';
import { FeedbackCategory } from '../types.ts';

interface FeedbackSummaryProps {
    title: string;
    data: FeedbackCategory[];
}

const FeedbackSummary: React.FC<FeedbackSummaryProps> = ({ title, data }) => {
    
    if (data.length === 0) {
        return (
            <div>
                 <h4 className="text-xl mb-3 inline-block"><span className="bg-yellow-300 text-black px-3 py-1">{title}</span></h4>
                 <p className="text-base text-gray-400 italic">No specific comments provided for this section.</p>
            </div>
        )
    }

    return (
        <div>
            <h4 className="text-xl mb-4 inline-block"><span className="bg-yellow-300 text-black px-3 py-1">{title}</span></h4>
            <div className="space-y-6">
                {data.map((category) => (
                    <div key={category.category} className="border border-gray-700 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h5 className="text-lg font-bold text-white">{category.category}</h5>
                            <span className="text-lg font-bold text-yellow-300">{category.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                        </div>

                        <ul className="space-y-3 text-gray-300">
                            {category.points.map((point, pIndex) => (
                                <li key={pIndex} className="flex items-start">
                                    <svg className="w-5 h-5 mr-3 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackSummary;