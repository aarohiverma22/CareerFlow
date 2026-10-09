import { UserRound, Pencil, Save, X } from "lucide-react";
import Button from "../../../componenets/reusable/Button";
import type { ProfileHeaderProps } from "../../../utils/types/profileTypes";

const ProfileHeader = ({
  isEditing,
  onEdit,
  onCancel,
  isSubmitting,
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
          <UserRound size={23} />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            My Profile
          </h1>
          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Manage your personal and professional information.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {isEditing ? (
          <>
            <Button
              text="Cancel"
              icon={<X size={17} />}
              buttonClassName="!border-gray-200 !bg-white !text-gray-700 hover:!bg-gray-50"
              onClick={onCancel}
            />

            <Button
              text={isSubmitting ? "Saving..." : "Save Changes"}
              icon={<Save size={17} />}
              type="submit"
              disabled={isSubmitting}
            />
          </>
        ) : (
          <Button
            text="Edit Profile"
            icon={<Pencil size={17} />}
            onClick={onEdit}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
