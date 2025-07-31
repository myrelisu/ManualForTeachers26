
export interface Metrics {
  [key: string]: number;
}

export interface SurveyData {
  [key: string]: number | 'N/A';
}

export interface FeedbackCategory {
    category: string;
    percentage: number;
    points: string[];
}

export interface Feedback {
    teachers: FeedbackCategory[];
    families: FeedbackCategory[];
}

export interface GroupData {
  metrics: Metrics;
  survey: SurveyData;
  feedback: Feedback;
}

export interface SchoolData {
  overall: {
    metrics: Metrics;
    survey: SurveyData;
    feedback: Feedback;
  };
  groups: {
    [groupName: string]: GroupData;
  };
}

export interface ChartDataItem {
    name: string;
    value: number;
}