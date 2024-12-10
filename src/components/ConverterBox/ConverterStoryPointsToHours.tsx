import { ChangeEvent, FC } from "react";
import { PiArrowsDownUpBold } from "react-icons/pi";

interface ConverterStoryPointsToHoursProps {
  hours: number;
  storyPoints: number;
  onChangeStoryPoints: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleConvertTo: () => void;
}

export const ConverterStoryPointsToHours: FC<
  ConverterStoryPointsToHoursProps
> = ({ hours, storyPoints, onChangeStoryPoints, onToggleConvertTo }) => {
  const daysTotal = Math.floor(hours / 24);
  const hoursTotal = Math.floor(hours % 24);
  const minutesTotal = Math.round((hours % 1) * 60);

  return (
    <>
      <div className="converter-area1">
        <h1>Conversor de Story Points</h1>

        <div className="converter-value">
          <input
            type="number"
            value={storyPoints.toString().replace("/^0+/", "")}
            onChange={onChangeStoryPoints}
          />
          <label>Story Points</label>
        </div>
      </div>

      <PiArrowsDownUpBold size={20} onClick={onToggleConvertTo} />

      <div className="converter-area2">
        <div className="converter-value">
          <input type="number" value={hours} readOnly />
          <label>Horas</label>
        </div>

        <small>
          {daysTotal}d {hoursTotal}h {minutesTotal}min
        </small>
      </div>
    </>
  );
};
