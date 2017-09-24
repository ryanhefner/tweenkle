export const In = (time, beginningValue, changeValue, duration) => {
  return (time === 0)
    ? beginningValue
    : changeValue * Math.pow(2, 10 * (time / duration - 1)) + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  return (time === duration)
    ? beginningValue + changeValue
    : changeValue * (-Math.pow(2, -10 * time / duration) + 1) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  if (time === 0) {
    return beginningValue;
  }

  if (time === duration) {
    return beginningValue + changeValue;
  }

  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * Math.pow(2, 10 * (time - 1)) + beginningValue;
  }

  return changeValue / 2 * (-Math.pow(2, -10 * --time) + 2) + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
