import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon'>  {
  iconName: FontAwesomeIconProps['icon'];
}

export default function Icon ({
  iconName,
  size = '1x',
  color = 'inherit',
  className = '',
  ...props
}: IconProps) {
  return (
    <FontAwesomeIcon
      icon={iconName}
      color={color}
      size={size}
      className={`custom-icon ${className}`}
      {...props}
    />
  );
}
