import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import DraggableIcon from "../../assets/drag-icon.png";

import * as C from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  autoFocus?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  draggable,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    if (draggable) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <C.Button
      onClick={handleLoading}
      className={`button ${variant} ${isLoading && "loading"}`}
      draggable={draggable}
      {...rest}
    >
      {isLoading && !draggable && (
        <CircularProgress
          size="1.2rem"
          sx={{
            color: "black",
          }}
        />
      )}
      {draggable && (
        <img
          className="draggable-icon"
          src={DraggableIcon}
          alt="draggable icon"
        />
      )}
      {children}
    </C.Button>
  );
};

export default Button;
