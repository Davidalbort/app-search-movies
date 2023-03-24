import { Movie } from "../../types/types.td"
import { ListMovies } from "../listMovies/ListMovies"
import { NotFound } from "../notFound/NotFound"

interface MoviesProps {
	results: Movie[]
}

export function Movies({ results }: MoviesProps) {
	const haveResults = results.length > 0
	return haveResults ? <ListMovies movies={results} /> : <NotFound />
}
