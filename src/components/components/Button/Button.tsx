import classNames from 'classnames';
import { MouseEvent, PropsWithChildren } from 'react';
import useGetButtonColorClass from '@/hooks/useGetButtonColorClass';
import classes from '@/styles/shared/Button.module.scss';

export type ButtonType = 'Primary' | 'Outlined';
export type ButtonColor =
  | 'Black'
  | 'Red'
  | 'Green'
  | 'Blue'
  | 'Yellow'
  | 'Gray';

export type ButtonProps = {
  type?: ButtonType;
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
} & PropsWithChildren;

const Button = ({
  type = 'Primary',
  color = 'Black',
  disabled = false,
  fullWidth = false,
  onClick,
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
        colorClass
      )}
    >
      {children}
    </button>
  );
};

export default Button;
