import classNames from 'classnames';
import { MouseEvent, PropsWithChildren, ReactNode } from 'react';
import useGetButtonColorClass from '@/hooks/useGetButtonColorClass';
import classes from '@/styles/shared/Button.module.scss';

export type ButtonType = 'Primary' | 'Outlined';
export type ButtonColor =
  | 'Black'
  | 'Red'
  | 'Green'
  | 'Blue'
  | 'Yellow'
  | 'Gray'
  | 'Paypal';

export type ButtonProps = {
  className?: string;
  type?: ButtonType;
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
} & PropsWithChildren;

const Button = ({
  type = 'Primary',
  color = 'Black',
  disabled = false,
  fullWidth = false,
  onClick,
  className,
  leadingIcon,
  trailingIcon,
  children,
}: ButtonProps) => {
  const colorClass = useGetButtonColorClass(type, color);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        classes.button,
        {
          [classes.buttonPrimary]: type === 'Primary',
          [classes.buttonOutlined]: type === 'Outlined',
          [classes.fullWidth]: fullWidth,
        },
        colorClass,
        className
      )}
    >
      <span className={classes.wrapper}>
        {leadingIcon}
        {children}
        {trailingIcon}
      </span>
    </button>
  );
};

export default Button;
