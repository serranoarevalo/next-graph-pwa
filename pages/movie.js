import axios from "axios";
import { withRouter } from "next/router";

const About = ({ movie }) => (
  <div>
    <h1>
      {movie.title} | {movie.year}
    </h1>
    <p>{movie.description_intro}</p>
  </div>
);

About.getInitialProps = async context => {
  const {
    query: { id }
  } = context;
  const { data } = await axios(
    `https://yts.am/api/v2/movie_details.json?movie_id=${id}`
  );
  return {
    movie: data.data.movie
  };
};

export default withRouter(About);
