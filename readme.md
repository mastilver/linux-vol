# linux-vol [![Build Status](https://travis-ci.org/mastilver/linux-vol.svg?branch=master)](https://travis-ci.org/mastilver/linux-vol)

> Get and set volume in Linux systems.


## Install

```
$ npm install --save linux-vol
```


## Usage

```js
var linuxVol = require('linux-vol');

linuxVol.get(function (err, level) {
	console.log(level);
	//=> 0.45
});

linuxVol.set(0.65, function (err) {
	console.log('Changed volume to 65%');
});
```


## API

### .get(callback)

Get volume level.

#### callback(err, level)

Type: `function`

##### level

Type: `number`

Current volume level.

### .set(level, callback)

Set volume level.

#### level

*Required*
Type: `number`

A number between `0` and `1.

#### callback(err)

Type: `function`

Returns nothing but a possible exception.


## CLI

See the [vol](https://github.com/gillstrom/vol) CLI.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
