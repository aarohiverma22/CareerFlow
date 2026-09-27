import type { InputHTMLAttributes, ChangeEvent } from "react";
import { INPUT_REGEX } from "../../utils/constants/InputRegex";

type ValidationType = "alpha" | "numeric" | "alphanumeric";
type TrimType = "trim" | "trim-start" | "trim-end";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  width?: string;
  required?: boolean;
  validation?: ValidationType;
  trim?: TrimType;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input = ({
  label,
  width = "w-full",
  required = false,
  validation,
  trim,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  onChange,
  ...inputProps
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Character validation
    if (validation === "alpha") {
      value = value.replace(INPUT_REGEX.ALPHA_INPUT, "");
    }

    if (validation === "numeric") {
      value = value.replace(INPUT_REGEX.NUMERIC_INPUT, "");
    }

    if (validation === "alphanumeric") {
      value = value.replace(INPUT_REGEX.ALPHANUMERIC_INPUT, "");
    }

    // Trimming
    if (trim === "trim") {
      value = value.trim();
    }

    if (trim === "trim-start") {
      value = value.trimStart();
    }

    if (trim === "trim-end") {
      value = value.trimEnd();
    }

    // Update input value after processing
    e.target.value = value;

    onChange?.(e);
  };

  return (
    <div className={`${width} ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputProps.id}
          className={`mb-2 block text-sm font-medium ${labelClassName}`}
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        {...inputProps}
        required={required}
        onChange={handleChange}
        className={`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 ${inputClassName}`}
      />
    </div>
  );
};

export default Input;
