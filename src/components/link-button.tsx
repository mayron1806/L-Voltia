import React, { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';

type LinkButtonProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ href, children, className, ...rest }, ref) => (
  <Link href={href} ref={ref} className={cn('bg-primary text-background font-bold px-8 py-4 rounded-lg', className)} {...rest}>
    {children}
  </Link>
));

LinkButton.displayName = 'LinkButton';

export default LinkButton;
