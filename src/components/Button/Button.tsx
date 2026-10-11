import type { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  href: string;
  variant?: 'light' | 'primary' | 'outline';
  children: ReactNode;
}

function Button({ href, variant = 'light', children }: ButtonProps) {
  // Externe Links in neuem Tab öffnen
  const isExternal = href.startsWith('http');

  return (
    <a
      className={`button button--${variant}`}
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  );
}

export default Button;
