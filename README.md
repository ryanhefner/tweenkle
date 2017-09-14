# Tweenkle ✨

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

### Requirements

Being that this library is targeted towards modern environments, it assumes that
the browsers running this code support `requestAnimationFrame`. If you need to
support browsers that don’t support that, be sure to include a polyfill so that
this will work in those browsers.

## How to use

### `Tween`

#### Parameters

* `start` - Initial value you would like to tween from.

* `end` - Target value to tween to. Once reached, the tween completes.

* `duration:Number` - How long the tween will run for in milliseconds. (Default: `1000`)

* `ease:Function` - Easing function/equation used to manipulate the value while tweening. (Default: `Linear`)

* `delay:Number` - _Currently not implemented, but exploring how this could be used._ (Default: `0`)

#### Properties

* `active:Boolean` - Whether or not the instance is tweening.

#### Methods

* `start()` - Start the tween.

* `stop()` - Stop the tween.

#### Events

* `tick` - Fired while the Tween is tweening.

* `complete` - Fired when the tween completes.

#### Example

```js
import Tween, { Easing } from 'tweenkle';

const tween = new Tween({
    start: 0,
    end: 100,
    duration: 1000,
    ease: Easing.Quad.InOut,
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

* `Back`
  * `Back.In`
  * `Back.Out`
  * `Back.InOut`

* `Bounce`
  * `Bounce.In`
  * `Bounce.Out`
  * `Bounce.InOut`

* `Circ`
  * `Circ.In`
  * `Circ.Out`
  * `Circ.InOut`

* `Cubic`
  * `Cubic.In`
  * `Cubic.Out`
  * `Cubic.InOut`

* `Elastic`
  * `Elastic.In`
  * `Elastic.Out`
  * `Elastic.InOut`

* `Linear`

* `Quad`
  * `Quad.In`
  * `Quad.Out`
  * `Quad.InOut`

* `Quart`
  * `Quart.In`
  * `Quart.Out`
  * `Quart.InOut`

* `Quint`
  * `Quint.In`
  * `Quint.Out`
  * `Quint.InOut`

* `Sine`
  * `Sine.In`
  * `Sine.Out`
  * `Sine.InOut`

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
