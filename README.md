# next-bind
> Bind all for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-bind
```

## usage
```js
import '@jswork/next-bind';

const obj = {
  id: 'bold',
  type: 'plugin',
  events: {
    name: function () {
      return [this.id, this.type].join('-');
    }
  },
  commands: {
    is: function (inMode) {
      return this.id === inMode;
    },
    get: function () {
      return this.type;
    }
  }
};

nx.bind(obj, obj.commands, obj.events);
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-bind/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-bind
[version-url]: https://npmjs.org/package/@jswork/next-bind

[license-image]: https://img.shields.io/npm/l/@jswork/next-bind
[license-url]: https://github.com/afeiship/next-bind/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-bind
[size-url]: https://github.com/afeiship/next-bind/blob/master/dist/next-bind.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-bind
[download-url]: https://www.npmjs.com/package/@jswork/next-bind
