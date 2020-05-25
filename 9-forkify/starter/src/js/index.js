import axios from 'axios';

async function getResults(query) {
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	try {
		const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?&q=${query}`);
		const recipes = res.data.recipes;
		console.log(res);
		console.log(recipes);
	} catch (error) {
		alert(error);
	}

}
getResults('pizza');
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
// const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);