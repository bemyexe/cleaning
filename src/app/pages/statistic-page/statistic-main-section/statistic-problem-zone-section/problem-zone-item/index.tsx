import clsx from 'clsx';

import ExclamationMark from '../../../../../../assets/exclamation-mark.svg?react';
import {Zone} from '..';

import './style.scss';

const DANGER_LIMIT = 50000;

interface ProblemZoneItemProps {
  zones: Zone;
}

export const ProblemZoneItem = ({zones}: ProblemZoneItemProps) => {
  const {zone, amount} = zones;
  return (
    <div className="problem-zone-item">
      <ExclamationMark
        className={clsx({
          'problem-zone-item-icon': true,
          danger: amount > DANGER_LIMIT,
        })}
      />
      <div className="problem-zone-item__wrapper">
        <h1 className="problem-zone-item__title">{zone}</h1>
        <div className="problem-zone-item-container">
          <span>₽</span>
          <p>{amount.toLocaleString('ru-RU')}</p>
        </div>
      </div>
    </div>
  );
};
