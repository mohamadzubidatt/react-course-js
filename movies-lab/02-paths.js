import { loadData } from "./load.js";

const data = loadData();

const last = data.movies[data.movies.length - 1];
console.log(last.title);

const field = "year";
console.log(data.movies[3][field]);
// toystory does't have an oscar
 const toyStory = data.movies[4];
 //console.log(toyStory.awards.oscars);
//error im console : TypeError: Cannot read properties of undefined (reading 'oscars')

console.log(toyStory.awards?.oscars ?? 0);
console.log(toyStory.reviews[0]?.text ?? "No reviews yet");

console.log(data.updatedAt);
console.log(data.movies[0].title);
console.log(data.movies[0].director.name);
console.log(data.movies[2].cast[2].name);
console.log(data.movies[0].reviews[1].author.username);
