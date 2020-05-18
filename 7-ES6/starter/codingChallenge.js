////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class BasicData {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Parks extends BasicData {
	constructor(name, buildYear, trees, size) {
		super(name, buildYear);
		this.trees = trees;
		this.size = size; //km2
	}

	treeDensity() {
		let density = this.trees / this.size;
		console.log(`${this.name} has a tree density of ${density} trees per square km.`);
	}
}

class Streets extends BasicData {
	constructor(name, buildYear, size, type = 3) {
		super(name, buildYear);
		this.size = size;
		this.type = type;
	}

	classifyStreet() {
		const classification = new Map();

		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');

		console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.type)} street.`);
	}
}

function calc(data) {
	const sum = data.reduce((prev, cur) => prev + cur, 0);
	return [sum, sum / data.length];
}

const parks = [
	new Parks('Green park', 1972, 865, 0.8),
	new Parks('National park', 1982, 1365, 0.9),
	new Parks('Oak park', 1892, 685, 0.3)
];

const streets = [
	new Streets('Ocean Avenue', 1999, 2, 4),
	new Streets('Evergreen Street', 2008, 0.7, 2),
	new Streets('4th Street', 2015, 1.5),
	new Streets('Sunset Boulevard', 1982, 3, 5),
];

function parkReports (parksData) {
	console.log('-----PARKS REPORT-----');

	//Ages
	const ages = parksData.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAges, avgAge] = calc(ages);
	console.log(`Our ${parksData.length} parks have an average of ${avgAge} years.`);

	//Tree density
	parksData.forEach(el => el.treeDensity());

	//More than 1000 trees
	const i = parksData.map(el => el.trees).findIndex(el => el >= 1000);
	console.log(`${parksData[i].name} has more than 1000 trees.`);
}

function streetReports(streetsData) {
	console.log('-----STREETS REPORT-----');

	//Streets total length
	const length = streetsData.map(el => el.size);
	const [totalLength, avgLength] = calc(length);
	console.log(`Our ${streetsData.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

	//Classification
	streetsData.forEach(el => el.classifyStreet());
}

parkReports(parks);
streetReports(streets);