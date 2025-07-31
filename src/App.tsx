
import React from 'react';
import { SCHOOL_DATA } from './constants';
import OverallMetrics from './components/OverallMetrics';
import GroupCard from './components/GroupCard';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="space-y-16">
                    <OverallMetrics
                        metrics={SCHOOL_DATA.overall.metrics}
                        survey={SCHOOL_DATA.overall.survey}
                        feedback={SCHOOL_DATA.overall.feedback}
                    />
                    
                    <section>
                        <h2 className="text-4xl text-center text-white mb-10">Summary by Group Level</h2>
                        <div className="space-y-16">
                            {Object.entries(SCHOOL_DATA.groups).map(([groupName, groupData]) => (
                                <GroupCard
                                    key={groupName}
                                    groupName={groupName}
                                    data={groupData}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default App;
