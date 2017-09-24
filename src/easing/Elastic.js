export const In = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  let p = 0;
  let a = changeValue;

  if (time === 0) {
    return beginningValue;
  }

  if ((time /= duration) === 1) {
    return beginningValue + changeValue;
  }

  if (!p) {
    p = duration * .3;
  }

  if (a < Math.abs(changeValue)) {
    a = changeValue;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(changeValue / a);
  }

  return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) *(2 * Math.PI) / p)) + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  let p = 0;
  let a = changeValue;

  if (time === 0) {
    return beginningValue;
  }

  if ((time /= duration) === 1) {
    return beginningValue + changeValue;
  }

  if (!p) {
    p = duration * .3;
  }

  if (a < Math.abs(changeValue)) {
    a = changeValue;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(changeValue / a);
  }

  return a * Math.pow(2,-10 * time) * Math.sin((time * duration - s) * (2 * Math.PI) / p) + changeValue + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  let p = 0;
  let a = changeValue;

  if (time === 0) {
    return beginningValue;
  }

  if ((time /= duration / 2) === 2) {
    return beginningValue + changeValue;
  }

  if (!p) {
    p = duration * (.3 * 1.5);
  }

  if (a < Math.abs(changeValue)) {
    a = changeValue;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(changeValue / a);
  }

  if (time < 1) {
    return -.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * (2 * Math.PI) / p)) + beginningValue;
  }

  return a * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * (2 * Math.PI) / p) * .5 + changeValue + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
