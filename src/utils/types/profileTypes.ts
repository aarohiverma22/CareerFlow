export interface ProfileFormValues {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  jobTitle: string;
  experience: string;
  workMode: string;
  preferredLocation: string;
  skills: string;
  linkedIn: string;
  github: string;
  portfolio: string;
}

export interface ProfileHeaderProps {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export interface Props {
  isEditing: boolean;
}
