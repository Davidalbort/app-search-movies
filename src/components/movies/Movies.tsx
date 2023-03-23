import { Movie, SearchFromApi } from "../../types/types.td"

interface MoviesProps {
	results: SearchFromApi[]
}

export function Movies({ results }: MoviesProps) {
	const movies: Movie[] =
		results &&
		results.map((result) => {
			return {
				title: result.Title,
				year: result.Year,
				image: result.Poster,
				id: result.imdbID,
			}
		})
	return (
		<ul>
			{movies
				? movies.map((movie) => (
						<li key={movie.id}>
							<h2>{movie.title}</h2>
							<img src={movie.image} alt={movie.title} />
							<span role={"year"}>{movie.year}</span>
						</li>
				  ))
				: null}
		</ul>
	)
}
