import Sister from 'sister';

class TweenManager {
  constructor(tweens = []) {
    const emitter = new Sister();

    this.on = emitter.on;
    this.off = emitter.off;
    this.trigger = emitter.trigger;

    this.tweens = tweens;
  }
}

export default TweenManager;
