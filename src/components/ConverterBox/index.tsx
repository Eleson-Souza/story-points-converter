import { ConverterBoxContainer } from "./styled";
import { ChangeEvent, useEffect, useState } from "react";
import { ConverterStoryPointsToHours } from "./ConverterStoryPointsToHours";
import { ConverterHoursToStoryPoints } from "./ConverterHoursToStoryPoints copy";

enum ConvertTo {
  HOURS_TO_STORY_POINTS,
  STORY_POINTS_TO_HOURS,
}

export const ConverterBox = () => {
  const [hours, setHours] = useState(0);
  const [storyPoints, setStoryPoints] = useState(0);
  const [convertTo, setConvertTo] = useState<ConvertTo>(
    ConvertTo.HOURS_TO_STORY_POINTS
  );

  function handleChangeHours(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (!value) {
      setHours(0);
    }

    const newHours = Number(value).toFixed(1);
    setHours(Number(newHours));
  }

  function handleChangeStoryPoints(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (!value) {
      setStoryPoints(0);
    }

    const newStoryPoints = Math.floor(Number(value));
    setStoryPoints(newStoryPoints);
  }

  useEffect(() => {
    const result = calcHoursToStoryPoints(hours);

    setStoryPoints(result);
  }, [hours]);

  useEffect(() => {
    const result = calcStoryPointsToHours(storyPoints);

    setHours(result);
  }, [storyPoints]);

  function calcHoursToStoryPoints(hours: number) {
    return hours / 4;
  }

  function calcStoryPointsToHours(storyPoints: number) {
    return storyPoints * 4;
  }

  function handleToggleConvertTo() {
    if (convertTo === ConvertTo.HOURS_TO_STORY_POINTS) {
      setConvertTo(ConvertTo.STORY_POINTS_TO_HOURS);
    } else {
      setConvertTo(ConvertTo.HOURS_TO_STORY_POINTS);
    }
  }

  return (
    <ConverterBoxContainer>
      {convertTo === ConvertTo.HOURS_TO_STORY_POINTS && (
        <ConverterHoursToStoryPoints
          hours={hours}
          storyPoints={storyPoints}
          onChangeHours={handleChangeHours}
          onToggleConvertTo={handleToggleConvertTo}
        />
      )}

      {convertTo === ConvertTo.STORY_POINTS_TO_HOURS && (
        <ConverterStoryPointsToHours
          hours={hours}
          storyPoints={storyPoints}
          onChangeStoryPoints={handleChangeStoryPoints}
          onToggleConvertTo={handleToggleConvertTo}
        />
      )}
    </ConverterBoxContainer>
  );
};
