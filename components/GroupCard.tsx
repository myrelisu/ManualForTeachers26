import React from 'react';
import ProgressBar from './ProgressBar.tsx';
import FeedbackSummary from './FeedbackSummary.tsx';
import { GroupData } from '../types.ts';

interface GroupCardProps {
    groupName: string;
    data: GroupData;
}

const GroupCard: React.FC<GroupCardProps> = ({ groupName, data }) => {
    const { metrics, survey, feedback } = data;
    
    const hasMetrics = Object.keys(metrics).length > 0;
    const surveyEntries = Object.entries(survey).filter(([, value]) => value !== 'N/A');
    const hasSurveyData = surveyEntries.length > 0;
    const hasFamilyFeedback = feedback.families.length > 0;
    const hasTeacherFeedback = feedback.teachers.length > 0;

    return (
        <section className="border-t-2 border-gray-700 pt-10">
            <div className="mb-6">
                 <h3 className="text-3xl text-white">{groupName}</h3>
            </div>

            {(hasMetrics || hasSurveyData) && (
                 <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    {hasMetrics && (
                        <div>
                            <h4 className="text-xl mb-4 inline-block"><span className="bg-yellow-300 text-black px-3 py-1">What Families Think</span></h4>
                            {Object.entries(metrics).map(([label, value]) => (
                                <ProgressBar key={label} label={label} value={value} />
                            ))}
                        </div>
                    )}
                    
                    {hasSurveyData && (
                        <div>
                            <h4 className="text-xl mb-4 inline-block"><span className="bg-yellow-300 text-black px-3 py-1">What Teachers Think</span></h4>
                            {surveyEntries.map(([label, value]) => (
                                <ProgressBar key={label} label={label} value={value as number} />
                            ))}
                        </div>
                    )}
                </div>
            )}
            
            {(hasFamilyFeedback || hasTeacherFeedback) && (
                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col gap-y-6">
                     {hasFamilyFeedback && (
                         <FeedbackSummary 
                            title="Family Comments"
                            data={feedback.families}
                        />
                     )}
                     {hasTeacherFeedback && (
                        <FeedbackSummary 
                            title="Teacher Comments"
                            data={feedback.teachers}
                        />
                     )}
                </div>
            )}
        </section>
    );
};

export default GroupCard;