import clsx from 'clsx';

import ExclamationMark from '../../../../../../assets/exclamation-mark.svg?react';

import './style.scss';

const DANGER_LIMIT = 50000;

interface ProblemZoneItemProps {
  zones: string;
  sum: number;
}

export const ProblemZoneItem = ({zones, sum}: ProblemZoneItemProps) => (
  <div className="problem-zone-item">
    <ExclamationMark
      className={clsx({
        'problem-zone-item-icon': true,
        danger: sum > DANGER_LIMIT,
      })}
    />
    <div className="problem-zone-item__wrapper">
      <h1 className="problem-zone-item__title">{zones}</h1>
      <div className="problem-zone-item-container">
        <span>₽</span>
        <p>{sum.toLocaleString('ru-RU')}</p>
      </div>
    </div>
  </div>
);
