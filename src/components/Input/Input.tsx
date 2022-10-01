import React from "react";

import cn from "classnames";

import styles from "./styles.module.scss";

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  value = "",
  onChange,
  className,
  disabled = false,
  ...attributes
}) => {
  const [currentValue, setValue] = React.useState<string>(value);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="text"
      className={cn(
        styles.input,
        disabled && styles.input__disabled,
        className
      )}
      value={currentValue}
      onInput={handleInput}
      disabled={disabled}
      {...attributes}
    />
  );
};

export default Input;
