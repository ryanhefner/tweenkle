export const In = (time, beginningValue, changeValue, duration) => {
  return changeValue * (time /= duration) * time + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  return -changeValue * (time /= duration) * (time - 2) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * time * time + beginningValue;
  }

  return -changeValue / 2 * ((--time) * (time - 2) - 1) + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
