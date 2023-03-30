import { useRef, useState } from "react"
import { Movie } from "../types/types.td"
import { searchMovies } from "../utils/services/search/searchMovies"

export function useMovies() {
	const [movies, setMovies] = useState<Movie[]>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const lastSearch = useRef("")
	const getMovies = async (search: string) => {
		if (lastSearch.current === search) return
		try {
			setLoading(true)
			lastSearch.current = search
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
