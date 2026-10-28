
// fix 1: we added an out func .to get the name
export const getDirectorLine = movie => `Director:${movie.director.name}`;
//fix 2 : we added the function filter 
export const getShortMovies = movies =>
  movies.filter(movie => movie.duration < 100);
// made the filter to be able to find
export const findByTitle = (movies, title) =>
  movies.find(movie => movie.title === title);
// we changed it if the oscar is 0 print 0
export const getOscarsLine = movie => `Oscars:${movie.awards?.oscars ??0 }`;
// adding [...moive] to check all the movies
export const sortByYear = movies => [...movies].sort((a, b) => a.year - b.year);
// adding find & map 
export const markAsWatched = (movies, id) => {
  const copy = movies.map(movie => ({ ...movie }));
  const movie = copy.find(movie => movie.id === id);
  if (movie) {
    movie.watched = true;
  }
  return copy;
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie };
  copy.cast = movie.cast.map(actor => ({ ...actor }));
  copy.cast[index].name = newName;
  return copy;
};