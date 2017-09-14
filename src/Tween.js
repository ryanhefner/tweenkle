import Sister from 'sister';
import Linear from './easing/Linear';

const updateValue = (ref) => {
  const diff = ref.startValue > ref.endValue
    ? -(ref.startValue - ref.endValue)
    : ref.endValue - ref.startValue;

  ref.value = ref.ease(
    ref.duration * ref.progress,
    ref.startValue,
    diff,
    ref.duration
  );

  if (ref.startValue > ref.endValue) {
    ref.value = Math.max(ref.endValue, Math.min(ref.startValue, ref.value));
  }
  else {
    ref.value = Math.max(ref.startValue, Math.min(ref.endValue, ref.value));
  }
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
    this.progress = Math.max(
      0,
      Math.min(
        1,
        1 - ((this.endTime - Date.now()) / this.duration)
      )
    );

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

    if (this.progress === 1) {
      this.active = false;
      return this.trigger('complete', tickResponse);
    }

    this.animationFrame = requestAnimationFrame(this.tick.bind(this));
  }
}

export default Tween;
