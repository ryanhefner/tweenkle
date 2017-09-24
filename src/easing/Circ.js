export const In = (time, beginningValue, changeValue, duration) => {
  return -changeValue * (Math.sqrt(1 - (time /= duration) * time) - 1) + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  return changeValue * Math.sqrt(1 - (time = time / duration - 1) * time) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return -changeValue / 2 * (Math.sqrt(1 - time * time) - 1) + beginningValue;
  }

  return changeValue / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
