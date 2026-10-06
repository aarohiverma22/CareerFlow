import { MoreHorizontal } from "lucide-react";
import GenericTable from "../../../componenets/reusable/GenericTable";

interface ApplicationData {
  companyRole: string;
  status: string;
  dateApplied: string;
  location: string;
  salaryRange: string;
  actions: string;
}

const applications: ApplicationData[] = [
  {
    companyRole: "Google • Frontend Developer",
    status: "Interview",
    dateApplied: "Sep 24, 2026",
    location: "Bangalore, India",
    salaryRange: "₹8L - ₹12L",
    actions: "actions",
  },
  {
    companyRole: "Microsoft • React Developer",
    status: "Applied",
    dateApplied: "Sep 21, 2026",
    location: "Noida, India",
    salaryRange: "₹7L - ₹10L",
    actions: "actions",
  },
  {
    companyRole: "Adobe • Software Developer",
    status: "Rejected",
    dateApplied: "Sep 18, 2026",
    location: "Noida, India",
    salaryRange: "₹6L - ₹9L",
    actions: "actions",
  },
];

const ApplicationTable = () => {
  const columns = [
    {
      key: "companyRole" as keyof ApplicationData,
      header: "Company & Role",
    },
    {
      key: "status" as keyof ApplicationData,
      header: "Status",
    },
    {
      key: "dateApplied" as keyof ApplicationData,
      header: "Date Applied",
    },
    {
      key: "location" as keyof ApplicationData,
      header: "Location",
    },
    {
      key: "salaryRange" as keyof ApplicationData,
      header: "Salary Range",
    },
    {
      key: "actions" as keyof ApplicationData,
      header: "Actions",
      render: () => (
        <button
          type="button"
          className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          aria-label="Application actions"
        >
          <MoreHorizontal size={18} />
        </button>
      ),
    },
  ];

  return (
    <section className="min-w-0 w-full">
      <GenericTable columns={columns} data={applications} />
    </section>
  );
};

export default ApplicationTable;
