# Webpack Haskell Loader

Yep, you heard right. Use JavaScript and Haskell together as seen in this [video](http://youtu.be/DyFcrJL6kxk).

## Usage

```javascript
var hsModule = require("haskell!./file.hs");
```

Just as you'd expect, `hsModule` is an object holding all the symbols exported
from the haskell module.

As a prerequisite, you need the [Haste](http://haste-lang.org/) compiler
installed. My
[`commonjs`](https://github.com/joelburget/haste-compiler/tree/commonjs)
branch, actually.

## Stability

This is *very* early work and is quite unstable. It's an experiment, really.
Please don't use it on anything you want to ship.

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
