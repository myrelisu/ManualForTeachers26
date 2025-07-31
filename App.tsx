
import React from 'react';
import { SCHOOL_DATA } from './constants';
import OverallMetrics from './components/OverallMetrics';
import GroupCard from './components/GroupCard';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    const groupEntries = Object.entries(SCHOOL_DATA.groups);

    return (
        <div className="bg-white">
            <Header />
            <div className="container mx-auto max-w-4xl px-4 py-12">
                <main>
                    <section id="overall-summary" className="scroll-mt-24 mb-16">
                       <OverallMetrics 
                            metrics={SCHOOL_DATA.overall.metrics}
                            survey={SCHOOL_DATA.overall.survey}
                            feedback={SCHOOL_DATA.overall.feedback}
                       />
                    </section>
                    
                    <section id="group-summary" className="scroll-mt-24">
                        <h2 className="text-4xl mb-8 text-center text-red-600">Summary by Group Level</h2>
                        <div className="flex flex-col gap-12">
                            {groupEntries.map(([groupName, groupData]) => (
                                <GroupCard 
                                    key={groupName}
                                    groupName={groupName}
                                    data={groupData}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;