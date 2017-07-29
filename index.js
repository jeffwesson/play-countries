const data = require('./data/countries-unescaped');

console.log(data.reduce((m, c) => {
	if (c.borders.length && c.borders.length >= m.len) {
		m.len = c.borders.length;
		m.c.push(c);
	}
	return m;
}, {len: 0, c: []}).c.reduce((a, c) => {
	if (c.area <= a.area) {
		a.area = c.area;
		a.c = c;
	}
	return a;
}, {area: Infinity, c: undefined}))
