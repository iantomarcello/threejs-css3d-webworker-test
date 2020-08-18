Testing whether CSS3DRenderer works with Web Workers
---
### Answer is ***NO***. 😥😭😞 <br><br>

`CSS3DRenderer` requires `document` to create `domElement`, and since `document` is inaccessible from a `Worker`, hence whole thing is a bust.

#### Failed attempts:
- Using various `Transferable` to pass document into `Worker`.
- [JSDOM](https://github.com/jsdom/jsdom) does not support `ES6` import out of the box. *(semi fail I guess)*.

<small>I guess Web Workers can't solve it all...</small>
