const Linear = (time, beginningValue, changeValue, duration) => {
  return beginningValue + (changeValue * (time / duration));
};

export default Linear;
