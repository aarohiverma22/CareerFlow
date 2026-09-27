import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  text?: string;
  icon?: ReactNode;

  wrapperClassName?: string;
  buttonClassName?: string;
  textClassName?: string;
  iconClassName?: string;

  iconPosition?: "left" | "right";
}

const Button = ({
  text,
  icon,
  wrapperClassName = "",
  buttonClassName = "",
  textClassName = "",
  iconClassName = "",
  iconPosition = "left",
  type = "button",
  disabled = false,
  onClick,
  ...buttonProps
}: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    onClick?.(event);
  };

  return (
    <div className={wrapperClassName}>
      <button
        {...buttonProps}
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium transition-all duration-200
          ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          ${buttonClassName}`}
      >
        {icon && iconPosition === "left" && (
          <span className={`shrink-0 ${iconClassName}`}>{icon}</span>
        )}

        {text && <span className={textClassName}>{text}</span>}

        {icon && iconPosition === "right" && (
          <span className={`shrink-0 ${iconClassName}`}>{icon}</span>
        )}
      </button>
    </div>
  );
};

export default Button;
