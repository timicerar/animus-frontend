import classNames from 'classnames';
import Link from 'next/link';
import Button, { ButtonProps } from '@/components/components/Button/Button';
import useGetButtonColorClass from '@/hooks/useGetButtonColorClass';
import classes from '@/styles/shared/Button.module.scss';

export type LinkButtonProps = {
  href: string;
} & Omit<ButtonProps, 'onClick'>;

const LinkButton = ({
  href,
  type = 'Primary',
  color = 'Black',
  fullWidth = false,
  disabled = false,
  className,
  children,
}: LinkButtonProps) => {
  const colorClass = useGetButtonColorClass(type, color);

  if (disabled) {
    return (
      <Button
        type={type}
        color={color}
        fullWidth={fullWidth}
        className={className}
        disabled
      >
        {children}
      </Button>
    );
  }

  return (
    <Link
      href={href}
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
      {children}
    </Link>
  );
};

export default LinkButton;
