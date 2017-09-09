const data = require('./data/countries-unescaped');

const getMostPopulousSubRegion = data => {
	// I need to iterate over the countries and create a map with keys of each subregion discovered while iterating:
	// - if it's the first instance just create a key with value 0
	// - if not first instance, increment value
	// return the key with the greatest value

	const mc = data.reduce((m, c) => {
		if (Object.keys(m).indexOf(c.subregion) === -1) {
			m[c.subregion] = 0;
		} else {
			m[c.subregion] += 1;
		}
		return m;
	}, {});

	let arr = Object.keys(mc).map(k => ({ subregion: k, value: mc[k] }));

	return arr.sort((a, b) => b.value - a.value);
};

console.log(getMostPopulousSubRegion(data));


// console.log(data.reduce((m, c) => {
// 	if (c.borders.length && c.borders.length >= m.len) {
// 		m.len = c.borders.length;
// 		m.c.push(c);
// 	}
// 	return m;
// }, {len: 0, c: []}).c.reduce((a, c) => {
// 	if (c.area <= a.area) {
// 		a.area = c.area;
// 		a.c = c;
// 	}
// 	return a;
// }, {area: Infinity, c: undefined}))


// const getMostBorders = (data) => {
// 	let limit = data.reduce((acc, currentCountry) => {
// 		if (currentCountry.borders.length && currentCountry.borders.length >= acc.len) {
// 			acc.len = currentCountry.borders.length;
// 			acc.country = currentCountry;
// 		}
// 		return acc;
// 	}, {len: 0, country: null});

// 	return data.filter(country => country.borders.length === limit.len);
// };

// const getSmallest = (data) => {
// 	let limit = data.reduce((acc, currentCountry) => {
// 		if (currentCountry.area <= acc.area && currentCountry.area > -1) {
// 			acc.area = currentCountry.area;
// 			acc.country = currentCountry;
// 		}
// 		return acc;
// 	}, {area: Infinity, country: null});

// 	return data.filter(country => country.area === limit.area);
// };

// const getLargest = (data) => {
// 	return data.reduce((acc, currentCountry) => {
// 		if (currentCountry.area >= acc.area && currentCountry.area > -1) {
// 			acc.area = currentCountry.area;
// 			acc.country = currentCountry;
// 		}
// 		return acc;
// 	}, {area: -Infinity, country: null});

// 	return data.filter(country => country.area === limit.area);
// };

// console.log(data.filter(c => c.cca3 === 'USA')[0].area);
