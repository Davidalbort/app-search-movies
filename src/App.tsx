import { useRef } from "react"
import { Form } from "./components/form/Form"
import { Movies } from "./components/movies/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

export function App() {
	const isRenderFirst = useRef(true)
	const lastSearch = useRef("")
	const { search, message, updateSearch, updateMessage } = useSearch({
		isRenderFirst,
	})
	const { movies, getMovies, error, loading } = useMovies()
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!search) {
			updateMessage("Can't search movies with empty fields")
		}
		if (lastSearch.current === search) return
		getMovies(search)
		lastSearch.current = search
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearch = event.target.value
		if (newSearch.startsWith(" ")) return
		updateSearch(newSearch)
		getMovies(newSearch)
		if (isRenderFirst.current) {
			isRenderFirst.current = newSearch === ""
		}
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
