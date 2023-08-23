import React, { ReactNode } from 'react';
import Link from 'next/link';
import { orbitron } from '@/fonts/fonts';
interface CustomButton {
  children?: ReactNode;
  style?: object;
  as?: string;
  href?: string;
  handleClick?: () => void;
  className?: string;
}

const Button: React.FC<CustomButton> = ({
  children,
  style,
  as = 'button',
  href = '/',
  handleClick,
  className,
}) => {
  return (
    <button
      className={`${className} rounded-md ${orbitron.className}`}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        ...style,
      }}
    >
      {as === 'link' ? <Link href={href}>{children}</Link> : <>{children}</>}
    </button>
  );
};

export default Button;
