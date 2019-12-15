# gusoma

[![Build Status](https://travis-ci.org/knowbee/gusoma.svg?branch=master)](https://travis-ci.org/knowbee/gusoma)
[![npm](https://img.shields.io/npm/dt/gusoma.svg)](https://www.npmjs.com/package/gusoma)
[![Dependency Status](https://david-dm.org/knowbee/gusoma.svg)](https://david-dm.org/knowbee/gusoma)
[![npm](https://img.shields.io/npm/v/gusoma.svg)](https://www.npmjs.com/package/gusoma)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

This is a simple package that converts numbers in Rwandan native language (Ikinyarwanda)

## Install

```cli
npm install gusoma
```

or

```cli
yarn add gusoma
```

## Example

```js
const { soma } = require("gusoma");

console.log(soma(11)); // 'cumi na rimwe'
console.log(soma(1110)); // 'igihumbi n'ijana n'icumi'
```

### A very complicated number 😂

```js
const { soma } = require("gusoma");

console.log(soma(999999999999)); // "miliyari magana icyenda na mirongo icyenda n'icyenda na miliyoni magana icyenda na mirongo icyenda n'icyenda n'ibihumbi magana icyenda na mirongo icyenda n'icyenda na magana icyenda na mirongo icyenda n'icyenda"
```

### Ones (Ibinyabumwe)

```js
const { soma } = require("gusoma");

console.log(soma(5)); // 'gatanu'
```

### Tens (Ibinyacumi)

```js
const { soma } = require("gusoma");

console.log(soma(18)); // "cumi n'umunani"
```

### Hundreds (Ibinyejana)

```js
const { soma } = require("gusoma");

console.log(soma(116)); // 'ijana na cumi na gatandatu'
```

### Thousands (Ibinyagihumbi)

```js
const { soma } = require("gusoma");

console.log(soma(1195)); // "igihumbi n'ijana na mirongo icyenda na gatanu"
```

### Millions (Amamiliyoni)

```js
const { soma } = require("gusoma");

console.log(soma(43000000)); // "miliyoni mirongo ine n'eshatu"
```

### Billions (Amamiliyari)

```js
const { soma } = require("gusoma");

console.log(soma(6500000000)); // 'miliyari esheshatu na miliyoni magana atanu'
```

# Contribution

Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
