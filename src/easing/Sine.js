export const In = (time, beginningValue, changeValue, duration) => {
  return -changeValue * Math.cos(time / duration * (Math.PI / 2)) + changeValue + beginningValue;
};

export const Out = (time, beginningValue, changeValue, duration) => {
  return changeValue * Math.sin(time / duration * (Math.PI / 2)) + beginningValue;
};

export const InOut = (time, beginningValue, changeValue, duration) => {
  return -changeValue / 2 * (Math.cos(Math.PI * time / duration) - 1) + beginningValue;
};

export default {
  In,
  Out,
  InOut,
};
