import { loadData } from "./load.js";
import {
  getDirectorLine,
  getShortMovies,
  findByTitle,
  getOscarsLine,
  sortByYear,
  markAsWatched,
  renameActor,
} from "./report-utils.js";

const { movies } = loadData();
//fixed 1
console.log("1:", getDirectorLine(movies[3]));
//fixed 2 
console.log("2:", getShortMovies(movies).map(movie => movie.title));
// fixed 3
console.log("3:", findByTitle(movies, "Parasite").year);
// fixed 5
console.log("5:", getOscarsLine(movies[4]));
//fixed 6
const sorted = sortByYear(movies);
console.log("6:", sorted[0].title, "|", movies[0].title);
// fixed 7
const watched = markAsWatched(movies, 1);
const inception = movies.find(movie => movie.id === 1);
console.log("7:", watched === movies, inception.watched);
// fixed 8
const lionKing = movies.find(movie => movie.id === 2);
const renamed = renameActor(lionKing, 0, "Jonathan Taylor Thomas");
console.log("8:", renamed.cast[0].name, "|", lionKing.cast[0].name);