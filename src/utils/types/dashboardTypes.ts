export type ApplicationStatus =
  | "Applied"
  | "Screening"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Withdrawn";

export interface ApplicationRecord {
  id: number;
  company: string;
  jobTitle: string;
  status: ApplicationStatus;
  dateApplied: string;
}

export interface InterviewRecord {
  id: number;
  company: string;
  jobTitle: string;
  interviewType: string;
  date: string;
  time: string;
}
