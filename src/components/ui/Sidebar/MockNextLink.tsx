import React, { ReactNode } from "react";

interface Props {
  to: string;
  className?: string;
  children: ReactNode;
}

// Mock MockNextLink component
const MockNextLink: React.FC<Props> = ({ to, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default MockNextLink;
