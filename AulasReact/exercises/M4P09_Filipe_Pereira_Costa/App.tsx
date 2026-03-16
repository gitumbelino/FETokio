import { useState, useEffect } from "react";
import MovieCard from "./components/movieCard";
import moviesData from './data/movies.json';
import Box from "@mui/material/Box";
import Header from "./components/header";
import MovieForm from "./components/movieForm";
import { Movie } from "./types/Movie.ts";


function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  type EditingState = number | null;

  const [isEditing, setIsEditing] = useState<EditingState>(null);

  const [editTitle, setEditTitle] = useState("")
  const [editYear, setEditYear] = useState<number>(0)

  const addMovie = (title: string, releaseYear: number) => {
    const newMovie = {
      id: Math.max(...movies.map(movie => movie.id)) + 1,
      title: title,
      releaseYear: releaseYear
    };
    setMovies([...movies, newMovie]);
  };


  const removeMovie = (id: number) => {
    const newMovie = movies.filter(movie => movie.id !== id)
    setMovies(newMovie)
    console.log("removido")
  }



  const startEditing = (id: number, title: string, releaseYear: number) => {

    setIsEditing(id);
    setEditTitle(title)
    setEditYear(releaseYear)

    console.log("start editing")

  }


  const editMovie = (id: number) => {

    const editedMovies = movies.map(movie => {
      console.log("inicio do edit")

      if (movie.id === id) {
        return {
          ...movie,
          title: editTitle,
          releaseYear: editYear
        }
      } else {
        return movie
      }


    })

    setMovies(editedMovies)
    console.log(editedMovies.find(i => i.id === id))
  }

  return (

    <Box sx={{ p: 2 }}>
      <Header />
      <MovieForm addMovie={addMovie} />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onEdit={() => startEditing(movie.id, movie.title, movie.releaseYear)}
            onRemove={() => removeMovie(movie.id)}
            isEditing={isEditing === movie.id}
            editMovie={() => editMovie(movie.id)}
            onCancel={() => setIsEditing(null)}
            editTitle={editTitle}
            editYear={editYear}
            setEditTitle={setEditTitle}
            setEditYear={setEditYear}
          />

        ))}
      </Box>
    </Box>
  );
}


export default App
