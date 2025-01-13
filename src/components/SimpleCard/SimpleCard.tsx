import React, { CSSProperties, FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './SimpleCard.module.scss';

interface SimpleCardProps {
  children: ReactNode;
  fullHeight?: boolean;
  justifyContent?: CSSProperties['justifyContent'];
}

const SimpleCard: FC<SimpleCardProps> = ({
  children,
  fullHeight,
  justifyContent = 'center',
}) => {
  return (
    <div
      className={cn(styles.card, {
        [styles.fullHeight]: fullHeight,
      })}
      style={{ justifyContent }}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
