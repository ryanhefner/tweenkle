export const In = (time, beginningValue, changeValue, duration) => {
  return changeValue * (time /= duration) * time * time * time + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  return -changeValue * ((time = time / duration - 1) * time * time * time - 1) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * time * time * time * time + beginningValue;
  }

  return -changeValue / 2 * ((time -= 2) * time * time * time - 2) + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
