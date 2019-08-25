import Sister from 'sister';
import Linear from './easing/Linear';

const CSS_UNIT_REGEX = /([0-9]*)([a-zA-Z%]*)/;

const calculateValue = (startValue, endValue, ease, duration, progress) => {
  /**
   * TODO: Setup CSS support for basic unit support. - @ryan
   */

  if (duration === 0) {
    return endValue;
  }

  if (typeof startValue === 'string' || typeof endValue === 'string') {
    const [start, unit] = CSS_UNIT_REGEX.match(startValue);
    const [end] = CSS_UNIT_REGEX.match(endValue);
  }

  const diff = startValue > endValue
    ? -(startValue - endValue)
    : endValue - startValue;

  const value = ease(
    duration * progress,
    startValue,
    diff,
    duration
  );

  return startValue > endValue
    ? Math.max(endValue, Math.min(startValue, value))
    : Math.max(startValue, Math.min(endValue, value));
}

const updateValue = (ref) => {
  if (ref.startValue instanceof Object) {
    const nextValue = {};
    Object.keys(ref.startValue).forEach((key) => {
      nextValue[key] = calculateValue(
        ref.startValue[key],
        ref.endValue[key],
        ref.ease,
        ref.duration,
        ref.progress
      );
    });

    ref.value = nextValue;
    return;
  }

  ref.value = calculateValue(
    ref.startValue,
    ref.endValue,
    ref.ease,
    ref.duration,
    ref.progress
  );
};

class Tween {
  constructor({start, end, duration = 1000, ease = Linear, delay = 0}) {
    const emitter = new Sister();
    this.on = emitter.on;
    this.off = emitter.off;
    this.trigger = emitter.trigger;

    this.value = this.startValue = start;
    this.endValue = end;
    this.duration = duration;
    this.ease = ease;
    this.delay = delay;
    this.active = false;
    this.complete = false;

    this.progress = 0;
    this.endTime = null;
  }

  start() {
    this.endTime = Date.now() + (this.duration * (1 - this.progress));

    this.trigger('start', {
      start: this.start,
      end: this.end,
      duration: this.duration,
      progress: this.progress,
      ease: this.ease,
      value: this.value,
    });

    this.animationFrame = requestAnimationFrame(this.tick.bind(this));
    this.active = true;
    this.complete = false;

    return this;
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.progress = this.progress + ((this.endTime - Date.now()) / this.duration);
    this.endTime = null;
    this.active = false;

    updateValue(this);

    this.trigger('stop', {
      start: this.start,
      end: this.end,
      duration: this.duration,
      progress: this.progress,
      ease: this.ease,
      value: this.value,
    });

    return this;
  }

  tick() {
    this.progress = Math.max(0, Math.min(1, 1 - ((this.endTime - Date.now()) / this.duration)));

    updateValue(this);

    const tickResponse = {
      start: this.startValue,
      end: this.endValue,
      duration: this.duration,
      progress: this.progress,
      ease: this.ease,
      value: this.value,
    };

    this.trigger('tick', tickResponse);

    if (this.progress === 1 || this.duration === 0) {
      this.active = false;
      this.complete = true;
      return this.trigger('complete', tickResponse);
    }

    this.animationFrame = requestAnimationFrame(this.tick.bind(this));
  }
}

export default Tween;
