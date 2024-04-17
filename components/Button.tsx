interface IButton {
  title: string;
  onClick?: () => void;
  variant: string;
  type: "submit" | "button";
}

const Button = ({ title, variant, onClick, type }: IButton) => {
  return (
    <button type={type} className={`px-8 py-3 rounded-full text-lg ${variant}`}>
      {title}
    </button>
  );
};

export default Button;
