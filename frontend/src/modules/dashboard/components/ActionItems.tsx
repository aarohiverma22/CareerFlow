import type {
  ApplicationRecord,
  InterviewRecord,
} from "../../../utils/types/dashboardTypes";

export const applications: ApplicationRecord[] = [
  {
    id: 1,
    company: "Infosys",
    jobTitle: "Frontend Developer",
    status: "Interview",
    dateApplied: "2026-10-02",
  },
  {
    id: 2,
    company: "Accenture",
    jobTitle: "React Developer",
    status: "Screening",
    dateApplied: "2026-10-01",
  },
  {
    id: 3,
    company: "TCS",
    jobTitle: "Software Developer",
    status: "Applied",
    dateApplied: "2026-09-29",
  },
  {
    id: 4,
    company: "Wipro",
    jobTitle: "Frontend Engineer",
    status: "Offer",
    dateApplied: "2026-09-25",
  },
  {
    id: 5,
    company: "HCLTech",
    jobTitle: "React Developer",
    status: "Rejected",
    dateApplied: "2026-09-20",
  },
  {
    id: 6,
    company: "Cognizant",
    jobTitle: "UI Developer",
    status: "Applied",
    dateApplied: "2026-09-18",
  },
  {
    id: 7,
    company: "Tech Mahindra",
    jobTitle: "Software Engineer",
    status: "Withdrawn",
    dateApplied: "2026-09-15",
  },
  {
    id: 8,
    company: "Capgemini",
    jobTitle: "Frontend Developer",
    status: "Screening",
    dateApplied: "2026-09-12",
  },
];

export const upcomingInterviews: InterviewRecord[] = [
  {
    id: 1,
    company: "Infosys",
    jobTitle: "Frontend Developer",
    interviewType: "Technical Round",
    date: "2026-10-14",
    time: "11:00 AM",
  },
  {
    id: 2,
    company: "Accenture",
    jobTitle: "React Developer",
    interviewType: "HR Round",
    date: "2026-10-17",
    time: "02:30 PM",
  },
  {
    id: 3,
    company: "Capgemini",
    jobTitle: "Frontend Developer",
    interviewType: "Screening Call",
    date: "2026-10-20",
    time: "10:30 AM",
  },
];
