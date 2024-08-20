interface IButton {
  title: string;
  onClick?: () => void;
  variant: string;
  type: "submit" | "button";
  disabled?: boolean;
}

const Button = ({ title, variant, onClick, type, disabled }: IButton) => {
  return (
    <button
      type={type}
      className={`px-8 py-3 rounded-full text-lg ${variant}`}
      onClick={() => onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
