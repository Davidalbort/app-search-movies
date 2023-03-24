import { Movie } from "../../types/types.td"

interface ListMoviesProps {
	movies: Movie[]
}
export function ListMovies({ movies }: ListMoviesProps) {
	return (
		<ul>
			{movies.map((movie) => (
				<li key={movie.id}>
					<h2>{movie.title}</h2>
					<img src={movie.image} alt={movie.title} />
					<span role={"year"}>{movie.year}</span>
				</li>
			))}
		</ul>
	)
}
