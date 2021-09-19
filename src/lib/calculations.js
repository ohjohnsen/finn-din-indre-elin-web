import * as C from './constants';

const getAgeFactor = age => {
  const difference = age < 35 ? -5 : age - 40;
  const factor =
    age >= 40
      ? difference * C.ageHandicapAbove40
      : difference * C.ageHandicapBelow40;
  return factor;
};

const getBodyweightFactor = data => {
  const difference =
    data.gender === 'male' && data.bodyweight < 65
      ? -2
      : data.bodyweight - C.bodyweightBenchmark;
  const factor = difference * C.bodyweightHandicap;
  return factor;
};

const getBikeWeightFactor = bikeWeight => {
  const difference = bikeWeight - C.bikeWeightBenchmark;
  const factor = difference * C.equipmentWeightHandicap;
  return factor;
};

const getTotalFactor = data => {
  const genderFactor = data.gender === 'female' ? C.femaleFactor : C.maleFactor;
  const totalFactor =
    genderFactor +
    getAgeFactor(data.age) +
    getBodyweightFactor(data) +
    getBikeWeightFactor(data.bikeWeight);
  return totalFactor;
};

export const getElinTime = data => {
  const [minutesString, secondsString] = C.timeBenchmark.split(':');
  const totalSeconds = parseInt(minutesString) * 60 + parseInt(secondsString);
  const elinTimeTotalSeconds = Math.floor(totalSeconds * getTotalFactor(data));
  const elinTimeMinutes = Math.floor(elinTimeTotalSeconds / 60);
  const elinTimeSeconds = elinTimeTotalSeconds % 60;
  const elinTime = {
    elinTimeMinutes,
    elinTimeSeconds,
    elinTimeTotalSeconds,
  };
  return elinTime;
};

export const getElinTimeString = data => {
  const elinTime = getElinTime(data);
  const elinTimeString =
    elinTime.elinTimeMinutes.toLocaleString('no', {
      minimumIntegerDigits: 2,
    }) +
    ':' +
    elinTime.elinTimeSeconds.toLocaleString('no', {
      minimumIntegerDigits: 2,
    });
  return elinTimeString;
};
