import React from 'react';
import ProgressBar from './ProgressBar.tsx';
import FeedbackSummary from './FeedbackSummary.tsx';
import { Metrics, SurveyData, Feedback } from '../types.ts';

interface OverallMetricsProps {
    metrics: Metrics;
    survey: SurveyData;
    feedback: Feedback;
}

const OverallMetrics: React.FC<OverallMetricsProps> = ({ metrics, survey, feedback }) => {
    return (
        <section>
            <h2 className="text-4xl text-white mb-8">Overall Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                    <h3 className="text-xl mb-4 inline-block"><span className="bg-yellow-300 text-black px-3 py-1">What Families Think</span></h3>
                    {Object.entries(metrics).map(([label, value]) => (
                        <ProgressBar key={label} label={label} value={value} />
                    ))}
                </div>
                <div>
                    <h3 className="text-xl mb-4 inline-block"><span className="bg-yellow-300 text-black px-3 py-1">What Teachers Think</span></h3>
                    {Object.entries(survey).map(([label, value]) => {
                        if (typeof value === 'number') {
                            return <ProgressBar key={label} label={label} value={value} />;
                        }
                        return null;
                    })}
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-y-12">
                <FeedbackSummary 
                    title="Summary of Family Comments"
                    data={feedback.families}
                />
                <FeedbackSummary 
                    title="Summary of Teacher Comments"
                    data={feedback.teachers}
                />
            </div>
        </section>
    );
};

export default OverallMetrics;