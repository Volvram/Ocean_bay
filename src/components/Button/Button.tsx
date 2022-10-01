import React from "react";

import cn from "classnames";

import styles from "./styles.module.scss";

type ButtonProps = React.PropsWithChildren<{
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  disabled = false,
  children,
  ...attributes
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.button, className)}
      disabled={disabled}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
