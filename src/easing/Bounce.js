export const Out = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration) < (1 / 2.75)) {
    return changeValue * (7.5625 * time * time) + beginningValue;
  }

  if (time < (2 / 2.75)) {
    return changeValue * (7.5625 * (time -= (1.5 / 2.75)) * time + .75) + beginningValue;
  }

  if (time < (2.5/2.75)) {
    return changeValue * (7.5625 * (time -= (2.25 / 2.75)) * time + .9375) + beginningValue;
  }

  return changeValue * (7.5625 * (time -= (2.625 / 2.75)) * time + .984375) + beginningValue;
};

export const In = (time, beginningValue, changeValue, duration) => {
  return changeValue - bounceEaseOut(duration - time, 0, changeValue, duration) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  if (time < duration / 2) {
    return In(time * 2, 0, changeValue, duration) * .5 + beginningValue;
  }

  return Out(time * 2 - duration, 0, changeValue, duration) * .5 + changeValue * .5 + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
