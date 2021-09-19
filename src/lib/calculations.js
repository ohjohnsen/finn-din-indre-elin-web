import * as C from './constants';

const getAgeFactor = age => {
  const difference = age - 40;
  const factor =
    age >= 40
      ? difference * C.ageHandicapAbove40
      : difference * C.ageHandicapBelow40;
  return factor;
};

const getBodyweightFactor = bodyweight => {
  const difference = bodyweight - C.bodyweightBenchmark;
  const factor = difference * C.bodyweightHandicap;
  return factor;
};

const getBightWeightFactor = bikeWeight => {
  const difference = bikeWeight - C.bikeWeightBenchmark;
  const factor = difference * C.equipmentWeightHandicap;
  return factor;
};

const getTotalFactor = data => {
  const genderFactor = data.gender === 'female' ? C.femaleFactor : C.maleFactor;
  const totalFactor =
    genderFactor +
    getAgeFactor(data.age) +
    getBodyweightFactor(data.bodyweight) +
    getBightWeightFactor(data.bikeWeight);
  return totalFactor;
};

export const getElinTime = data => {
  const [minutesString, secondsString] = C.timeBenchmark.split(':');
  const totalSeconds = parseInt(minutesString) * 60 + parseInt(secondsString);
  const elinTimeTotalSeconds = totalSeconds * getTotalFactor(data);
  const elinTimeMinutes = Math.floor(elinTimeTotalSeconds / 60);
  const elinTimeSeconds = Math.round(elinTimeTotalSeconds % 60);
  const elinTime = {
    minutes: elinTimeMinutes,
    seconds: elinTimeSeconds,
    totalSeconds: elinTimeTotalSeconds,
  };
  return elinTime;
};

export const getElinTimeString = data => {
  const elinTime = getElinTime(data);
  const elinTimeString =
    elinTime.minutes.toString() + ':' + elinTime.seconds.toString();
  return elinTimeString;
};
