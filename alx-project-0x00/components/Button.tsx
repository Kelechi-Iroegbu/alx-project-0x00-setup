
export interface ButtonProps {
  title: string;
  styles?: string; // <-- Add this line
}





import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
return (
  <button className={`px-4 py-2 bg-blue-600 text-white ${styles}`}>
      {title}
  </button>
  );
};

export default Button;
