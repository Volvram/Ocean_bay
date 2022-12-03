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
  phone?: boolean;
};

const Input: React.FC<InputProps> = ({
  value = "",
  onChange,
  className,
  disabled = false,
  phone = false,
  ...attributes
}) => {
  const [currentValue, setValue] = React.useState<string>(value);

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (phone && currentValue.length === 0) {
        setValue("+");
      }
    },
    [phone, currentValue]
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const currentLength = target.value.length;

    if (phone) {
      const symbol = target.value.split("")[currentLength - 1];

      if (!symbol.match(/\d/) && currentLength > currentValue.length) {
        return false;
      }
      if (currentLength > 12)
        target.value = target.value.substring(0, currentLength - 1);
    }

    setValue(target.value);
    onChange(target.value);
  };

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (phone && currentValue === "+") {
        setValue("");
        onChange("");
      }
    },
    [phone, currentValue]
  );

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
      onClick={handleClick}
      onBlur={handleBlur}
      disabled={disabled}
      {...attributes}
    />
  );
};

export default Input;
