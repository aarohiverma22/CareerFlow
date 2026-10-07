import { useEffect } from "react";
import { Formik, Form } from "formik";
import { X } from "lucide-react";
import { addApplicationValidationSchema } from "../../../utils/validations/addApplicationValidation";

import Button from "../../../componenets/reusable/Button";
import Input from "../../../componenets/reusable/Input";

interface AddApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationFormData {
  company: string;
  jobTitle: string;
  status: string;
  dateApplied: string;
  location: string;
  salaryMin: string;
  salaryMax: string;
  jobUrl: string;
  notes: string;
}

const getInitialValues = (): ApplicationFormData => ({
  company: "",
  jobTitle: "",
  status: "Applied",
  dateApplied: new Date().toISOString().split("T")[0],
  location: "",
  salaryMin: "",
  salaryMax: "",
  jobUrl: "",
  notes: "",
});

const AddApplicationModal = ({ isOpen, onClose }: AddApplicationModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-application-title"
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-xl"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-gray-200 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <h2
              id="add-application-title"
              className="text-lg font-semibold text-gray-900 sm:text-xl"
            >
              Add New Application
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add the details of a new job application.
            </p>
          </div>

          <Button
            type="button"
            icon={<X size={20} />}
            aria-label="Close modal"
            buttonClassName="!rounded-lg !border-0 !bg-transparent !px-2 !py-2 !text-gray-400 hover:!bg-gray-100 hover:!text-gray-700"
            onClick={onClose}
          />
        </div>

        <Formik
          initialValues={getInitialValues()}
          validationSchema={addApplicationValidationSchema}
          enableReinitialize
          onSubmit={(values, { resetForm }) => {
            console.log("Application data:", values);

            // API integration will be added later.

            resetForm();
            onClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form className="overflow-y-auto">
              <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
                {/* Company */}
                <div>
                  <Input
                    label="Company"
                    name="company"
                    placeholder="e.g. Google"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.company ? errors.company : undefined}
                    required
                  />
                </div>

                {/* Job Title */}
                <div>
                  <Input
                    label="Job Title"
                    name="jobTitle"
                    placeholder="e.g. Frontend Developer"
                    value={values.jobTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.jobTitle ? errors.jobTitle : undefined}
                    required
                  />
                </div>

                {/* Status */}
                <div>
                  <label
                    htmlFor="status"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Status <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="status"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 ${
                      touched.status && errors.status
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="Applied">Applied</option>
                    <option value="Screening">Screening</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Withdrawn">Withdrawn</option>
                  </select>

                  {touched.status && errors.status && (
                    <p className="mt-1 text-xs text-red-500">{errors.status}</p>
                  )}
                </div>

                {/* Date Applied */}
                <div>
                  <Input
                    label="Date Applied"
                    name="dateApplied"
                    type="date"
                    value={values.dateApplied}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.dateApplied ? errors.dateApplied : undefined}
                    required
                  />
                </div>

                {/* Location */}
                <div className="sm:col-span-2">
                  <Input
                    label="Location"
                    name="location"
                    placeholder="e.g. Noida, India / Remote"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.location ? errors.location : undefined}
                  />
                </div>

                {/* Minimum Salary */}
                <div>
                  <Input
                    label="Minimum Salary"
                    name="salaryMin"
                    type="number"
                    placeholder="e.g. 600000"
                    value={values.salaryMin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.salaryMin ? errors.salaryMin : undefined}
                    min="0"
                  />
                </div>

                {/* Maximum Salary */}
                <div>
                  <Input
                    label="Maximum Salary"
                    name="salaryMax"
                    type="number"
                    placeholder="e.g. 900000"
                    value={values.salaryMax}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.salaryMax ? errors.salaryMax : undefined}
                    min="0"
                  />
                </div>

                {/* Job URL */}
                <div className="sm:col-span-2">
                  <Input
                    label="Job URL"
                    name="jobUrl"
                    type="url"
                    placeholder="https://company.com/careers/job"
                    value={values.jobUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.jobUrl ? errors.jobUrl : undefined}
                  />
                </div>

                {/* Notes */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="notes"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Notes
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    value={values.notes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Add any notes about this application"
                    rows={4}
                    className={`w-full resize-none rounded-lg border px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 ${
                      touched.notes && errors.notes
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  {touched.notes && errors.notes && (
                    <p className="mt-1 text-xs text-red-500">{errors.notes}</p>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col-reverse gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
                <Button
                  text="Cancel"
                  type="button"
                  buttonClassName="!bg-gray-100 !text-gray-700 hover:!bg-gray-200"
                  onClick={onClose}
                />

                <Button
                  text="Add Application"
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddApplicationModal;
