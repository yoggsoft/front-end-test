import React from 'react';
import { IconBaseProps } from 'react-icons';

interface IconProps extends IconBaseProps {
  Component: React.ComponentType<IconBaseProps>;
  color?: string;
  size?: 'sm' | 'base';
  className?: string;
}

const mapSizeToPx = {
  'sm': 12,
  'base': 24
};

export default function Icon ({
  Component,
  color = 'inherit',
  size = 'base',
  className = '',
  ...props
}: IconProps) {
  return (
    <Component
      color={color}
      size={mapSizeToPx[size]}
      className={`custom-icon ${className}`}
      {...props}
    />
  );
};

