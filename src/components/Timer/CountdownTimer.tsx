import { useTimer } from './useTimer';

interface CountdownTimerProps {
  initialSeconds: number;
  className?: string;
  labelClassName?: string;
  timerClassName?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialSeconds,
  className = '',
  labelClassName = '',
  timerClassName = '',
}) => {
  const { hours, minutes, seconds } = useTimer(initialSeconds);

  return (
    <div className={className}>
      <div className={labelClassName}>
        До підвищення цін:
      </div>
      <div className={timerClassName}>
        {hours} год. {minutes} хв. {seconds} сек.
      </div>
    </div>
  );
};
