import cn from 'classnames';
import { ru } from 'date-fns/locale';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { type FC, useState } from 'react';
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useOutSide } from '@/src/hooks/useOutSide.ts';

import type { DatePickerProps } from './DatePicker.props';
import { formatCaption } from './DatePickerCaption.tsx';

dayjs.extend(LocalizedFormat);
dayjs.locale('ru');

const DatePicker: FC<DatePickerProps> = ({ onChange, value, position }) => {
  const [selected, setSelected] = useState<Date>();
  const { ref, isShown, setIsShown } = useOutSide<HTMLDivElement>();

  /** Displaying date value. */
  const dayValue = value || selected;

  const handleDaySelect: SelectSingleEventHandler = date => {
    const ISOdate = date?.toISOString();
    setSelected(date);

    if (ISOdate) {
      onChange?.(ISOdate);
      setIsShown(false);
    } else {
      onChange?.('');
    }
  };

  return (
    <div
      className={cn('relative')}
      ref={ref}
    >
      <button onClick={() => setIsShown(prev => true)}>
        {dayValue ? dayjs(dayValue).format('LL') : 'Нажмите, чтобы выбрать'}

        {isShown && (
          <div
            className={cn(
              'absolute p-[.625em] slide bg-secondary-bg-accent shadow rounded-lg',
              position === 'left' ? '-left-[1em]' : '-right-[1em]',
            )}
            style={{
              top: 'calc(100% + .7em)',
            }}
          >
            <DayPicker
              fromYear={2023}
              toYear={2054}
              locale={ru}
              initialFocus={isShown}
              mode={'single'}
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
              weekStartsOn={1}
              formatters={{
                formatCaption,
              }}
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default DatePicker;
