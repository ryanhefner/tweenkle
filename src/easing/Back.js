export const In = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  return changeValue * (time /= duration) * time * ((s + 1) * time - s) + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  return changeValue * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158; 
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * (time * time * (((s *= (1.525)) + 1) * time - s)) + beginningValue;
  }

  return changeValue / 2 * ((time -= 2) * time * (((s *= (1.525)) + 1) * time + s) + 2) + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
