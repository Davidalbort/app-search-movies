import { useState } from "react"
import { Movie } from "../types/types.td"
import { searchMovies } from "../utils/services/search/searchMovies"

export function useMovies() {
	const [movies, setMovies] = useState<Movie[]>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const getMovies = async (search: string) => {
		try {
			setLoading(true)
			const newMovie = await searchMovies(search)
			setMovies(newMovie)
		} catch (error) {
			setError(`${error}message`)
		} finally {
			setLoading(false)
		}
	}

	return { movies, loading, getMovies, error }
}
