
import { SchoolData } from './types';

export const SCHOOL_DATA: SchoolData = {
    overall: {
        metrics: {
            "Teacher Satisfaction": 89,
            "Student Progress": 83,
            "Class Enjoyment": 88,
            "Would Recommend Program": 92,
            "Satisfaction with Office Staff": 89
        },
        survey: {
            "Overall Satisfaction in Role": 92,
            "Leadership Communication and Support": 90,
            "Resource Availability": 87,
            "Quality of Books and Materials": 77,
            "Workshop Quality": 84,
            "Quality of Trips": 81,
            "Organization of Special Events": 91,
        },
        feedback: {
            teachers: [
                {
                    category: "Planning, Communication & Events",
                    percentage: 32,
                    points: [
                        "Poor organization, communication, and staff coordination were recurring themes.",
                        "Event management needs improvement, citing chaotic food distribution and unprofessional incident handling.",
                        "Teachers requested more dedicated time for lesson planning.",
                        "Need for clearer incident follow-up and a defined chain of command."
                    ]
                },
                {
                    category: "Curriculum, Materials & Activities",
                    percentage: 29,
                    points: [
                        "Materials described as outdated, age-inappropriate, or unengaging.",
                        "Wide variance in student English levels within classes made teaching difficult.",
                        "Suggestions for new activities like project-based learning, cultural fairs, and hands-on workshops.",
                        "Requests for more digital resources and a day trip for exam groups."
                    ]
                },
                {
                    category: "Compensation & Working Conditions",
                    percentage: 25,
                    points: [
                        "Multiple direct requests for salary increases.",
                        "Staff reported insufficient or overly short breaks, requesting longer lunch.",
                        "Afternoon class for young children (2h 20m) considered unreasonably long.",
                        "On-site construction noise was highly disruptive to teaching."
                    ]
                },
                {
                    category: "Workshops & Student Management",
                    percentage: 14,
                    points: [
                        "Workshops reported as low-quality, uninteresting, or not age-appropriate.",
                        "Need for better training and clear guidelines for workshop leaders.",
                        "Requests for smaller class sizes to improve management and student attention."
                    ]
                }
            ],
            families: []
        }
    },
    groups: {
        "Discovery Camp": {
            metrics: {
                "Teacher Satisfaction": 70,
                "Student Progress": 40,
                "Class Enjoyment": 40,
                "Would Recommend Program": 90,
                "Satisfaction with Office Staff": 60,
            },
            survey: {
                "Overall Satisfaction in Role": 80,
                "Leadership Communication and Support": 65,
                "Resource Availability": 65,
                "Materials Availability": 60,
                "Workshop Quality": 90,
                "Quality of Trips": 100,
                "Organization of Special Events": 90,
            },
            feedback: {
                teachers: [],
                families: []
            }
        },
        "Infants": {
            metrics: {
                "Teacher Satisfaction": 97,
                "Student Progress": 86,
                "Class Enjoyment": 91,
                "Would Recommend Program": 89,
                "Satisfaction with Office Staff": 95,
            },
            survey: {
                "Overall Satisfaction in Role": 100,
                "Leadership Communication and Support": 93,
                "Resource Availability": 87,
                "Materials Availability": 90,
                "Workshop Quality": 90,
                "Quality of Trips": 100,
                "Organization of Special Events": 100,
            },
            feedback: {
                teachers: [],
                families: []
            }
        },
        "Primary": {
            metrics: {
                "Teacher Satisfaction": 84,
                "Student Progress": 79,
                "Class Enjoyment": 86,
                "Would Recommend Program": 91,
                "Satisfaction with Office Staff": 85,
            },
            survey: {
                "Overall Satisfaction in Role": 94,
                "Leadership Communication and Support": 94,
                "Resource Availability": 94,
                "Book Quality": 78,
                "Workshop Quality": 86,
                "Quality of Trips and Sleepovers": 83,
                "Organization of Special Events": 92,
            },
            feedback: {
                teachers: [],
                families: []
            }
        },
        "Secondary": {
            metrics: {
                "Teacher Satisfaction": 94,
                "Student Progress": 94,
                "Class Enjoyment": 96,
                "Would Recommend Program": 100,
                "Satisfaction with Office Staff": 98,
            },
            survey: {
                "Overall Satisfaction in Role": 93,
                "Leadership Communication and Support": 100,
                "Resource Availability": 80,
                "Book Quality": 67,
                "Workshop Quality": 70,
                "Quality of Trips": 60,
                "Organization of Special Events": 90,
            },
            feedback: {
                teachers: [],
                families: []
            }
        }
    }
};

export const CHART_COLORS = ['#0d9488', '#0891b2', '#0284c7', '#4338ca', '#6d28d9', '#a21caf', '#be185d'];
