'use strict';
var test = require('ava');
var linuxVol = require('./');

if (!process.env.CI) {
	test('get level', function (t) {
		t.plan(2);

		linuxVol.get(function (err, level) {
			t.assert(!err, err);
			t.assert(typeof level === 'number');
		});
	});

	test('set level to 50%', function (t) {
		t.plan(3);

		linuxVol.set(0.5, function (err) {
			t.assert(!err, err);

			linuxVol.get(function (err, level) {

				t.assert(!err, err);
				t.assert(0.45 < level && level < 0.55);
			});
		});
	});
}
