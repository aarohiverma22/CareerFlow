import { useState } from "react";
import { Formik, Form } from "formik";
import ProfileHeader from "./components/ProfileHeader";
import ProfileOverview from "./components/ProfileOverview";
import PersonalInformation from "./components/PersonalInformation";
import ProfessionalInformation from "./components/ProfessionalInformation";
import SocialLinks from "./components/SocialLinks";
import { profileValidationSchema } from "../../utils/validations/profileValidation";
import type { ProfileFormValues } from "../../utils/types/profileTypes";

const initialValues: ProfileFormValues = {
  fullName: "Aarohi Verma",
  email: "aarohiverma2020@gmail.com",
  phone: "",
  location: "India",
  jobTitle: "Software Developer",
  experience: "1+ year",
  workMode: "Hybrid",
  preferredLocation: "Gurgaon / Noida",
  skills:
    "React, TypeScript, JavaScript, HTML, CSS, Bootstrap, Node.js, Express, Mongo DB",
  linkedIn: "https://www.linkedin.com/in/aarohi-verma-839a56259/",
  github: "https://github.com/aarohiverma22",
  portfolio: "",
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialValues);

  return (
    <Formik<ProfileFormValues>
      initialValues={profile}
      validationSchema={profileValidationSchema}
      enableReinitialize
      onSubmit={(values) => {
        const updatedProfile = {
          ...values,
          fullName: values.fullName.trim(),
          email: values.email.trim(),
        };

        setProfile(updatedProfile);
        setIsEditing(false);
      }}
    >
      {({ resetForm, isSubmitting }) => (
        <Form className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:p-8">
          <ProfileHeader
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
            onCancel={() => {
              resetForm();
              setIsEditing(false);
            }}
            isSubmitting={isSubmitting}
          />

          <ProfileOverview />
          <PersonalInformation isEditing={isEditing} />
          <ProfessionalInformation isEditing={isEditing} />
          <SocialLinks isEditing={isEditing} />
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
