# [WIP] Tweenkle ✨

Lightweight tweening library built for modern Javascript environments that favor
small modular components over heavy monolithic bundled libraries.

In addition to the `Tween` class, this library contains
all of the [Robert Penner easing equations](http://robertpenner.com/easing/) as
direct exports for each variation, allowing you to use them in your site or app,
without all the overhead of having to load the entire library. More information
on the available [eases](#eases) is available below.

## Why?

Might as well get this out of the way early, since I’m sure a lot of people will
say, "Why the f@€k did you bother to write another tweening library, THERE ARE
SO MANY!!!!1!!1!". Well, you’re right, I didn't have to write this, and there are
plenty of options out there, but this is part a personal exercise, while also
being the library that I need 90% of the time and is setup to work nicely in ES6
environments.

## Install

Via [npm](https://npmjs.com/package/tweenkle)

```sh
npm install --save tweenkle
```

Via [Yarn](https://yarn.fyi/tweenkle)

```sh
yarn add tweenkle
```

## How to use

### `Tween`

#### Parameters

* `start` - Initial value you would like to tween from.

* `end` - Target value of the tween. Once reached, tween completes.

* `duration:Number` - How long the tween will run for. (Default: `1000`)

* `ease:Function` - Easing function/equation used to manipulate the value while tweening. (Default: `Linear`)

* `delay:Number` - [Currently not implemented, but exploring how this could be used.] (Default: `0`)

#### Methods

* `start()` - Initiates the start of the tween.

* `stop()` - Stops the tween.

#### Events

* `tick` - Fired while the Tween is tweening.

* `complete` - Fired when the tween completes/reaches the `end` value.

#### Example

```js
import Tween from 'tweenkle';
import { InOut as QuadInOut } from 'tweenkle/easing/Quad';

const tween = new Tween({
    start: 0,
    end: 100,
    duration: 1000,
    ease: QuadInOut,
  });

tween.on('tick', ({start, end, duration, progress, ease, value}) => {
  // Manipulate element or variable based on tween value
});

tween.on('complete', ({start, end, duration, progress, ease, value}) => {
  // Tween is done, do whatever you want here, or not. Events are optional.
});

tween.start();
```

### Easing

For the visual people out there, I wrote a quick [easing visualizer](https://codepen.io/ryanhefner/details/YxmKQG/)
so you can preview what the easing equation looks like before you use it.

* Back

* Bounce

* Circ

* Cubic

* Elastic

* Linear

* Quad

* Quart

* Quint

* Sine

## License

[MIT](LICENSE)
