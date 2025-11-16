import { ButtonProps } from "@/types/view/atoms/button";

export default function Button({
  className = "",
  style = {},
  label,
  onClick,
  type,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold transition ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{
        width: "226px",
        height: "60px",
        borderRadius: "0px",
        backgroundColor: "#3C436D",
        color: "#FFFFFF",
        ...style,
      }}
    >
      {label}
    </button>
  );
}
