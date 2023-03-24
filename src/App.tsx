import { useState } from "react"
import { Form } from "./components/form/Form"
import { Movies } from "./components/movies/Movies"
// import { NotFound } from "./components/notFound/NotFound"
import { useSearch } from "./hooks/useSearch"
import { Movie } from "./types/types.td"
import { searchMovies } from "./utils/services/search/searchMovies"

function useMovies() {
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

export function App() {
	const { search, message, handleChange, updateMessage } = useSearch()
	const { movies, getMovies, error, loading } = useMovies()
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!search) {
			updateMessage("Can't search movies with empty fields")
		}
		getMovies(search)
	}

	return (
		<div className="page">
			<header>
				<h1>Search Films</h1>
				<Form
					search={search}
					message={message}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</header>
			<main>
				{loading ? <span>Loading</span> : movies && <Movies results={movies} />}
			</main>

			{error && <span>{error}</span>}
		</div>
	)
}
