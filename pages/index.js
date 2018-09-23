import axios from "axios";
import Link from "next/link";

const Index = props => (
  <div>
    <h1>Movies</h1>
    <ul>
      {props.movies.map(movie => (
        <li key={movie.id}>
          <Link href={`/movie?id=${movie.id}`} as={`/movie/${movie.id}`}>
            <a>{movie.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async () => {
  const {
    data: { data }
  } = await axios("https://yts.am/api/v2/list_movies.json");
  return {
    movies: data.movies
  };
};

export default Index;
