import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children: ReactNode;
    className?: string;
  };

const ExternalLink = ({
  href,
  children,
  className,
  ...props
}: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      className={className}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
};

export default ExternalLink;
