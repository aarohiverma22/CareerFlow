import { useState } from "react";
import { Formik, Form } from "formik";
import { LockKeyhole } from "lucide-react";
import type { PasswordValues } from "../../../utils/types/settingsTypes";
import { securitySettingsValidationSchema } from "../../../utils/validations/settingsValidation";
import Input from "../../../componenets/reusable/Input";
import Button from "../../../componenets/reusable/Button";
import SettingsSection from "./SettingsSection";

const initialValues: PasswordValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const SecuritySettings = () => {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <SettingsSection
      title="Account Security"
      description="Manage your password and account security."
      icon={<LockKeyhole size={20} />}
    >
      <div className="flex flex-col gap-4 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Change Password</p>
          <p className="mt-1 text-sm text-gray-500">
            Use a strong, unique password for your account.
          </p>
        </div>

        <Button
          text={showForm ? "Close Form" : "Change Password"}
          buttonClassName="!w-full sm:!w-auto"
          onClick={() => {
            setShowForm((previous) => !previous);
            setMessage("");
          }}
        />
      </div>

      {showForm && (
        <div className="border-t border-gray-100 pt-5">
          <Formik
            initialValues={initialValues}
            validationSchema={securitySettingsValidationSchema}
            onSubmit={(_values, { resetForm }) => {
              setMessage(
                "Form validated. Connect your password-change API to update your password.",
              );
              resetForm();
              setShowForm(false);
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
              <Form className="flex flex-col gap-4">
                <Input
                  label="Current Password"
                  name="currentPassword"
                  type="password"
                  value={values.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.currentPassword ? errors.currentPassword : undefined
                  }
                  required
                />

                <Input
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.newPassword ? errors.newPassword : undefined}
                  required
                />

                <Input
                  label="Confirm New Password"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                  required
                />

                <div className="flex justify-end">
                  <Button
                    text="Validate Password Change"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {message && (
        <p role="status" className="mt-3 text-sm text-amber-700">
          {message}
        </p>
      )}
    </SettingsSection>
  );
};

export default SecuritySettings;
