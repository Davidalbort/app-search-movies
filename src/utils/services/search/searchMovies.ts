import { Movie, SearchFromApi } from "../../../types/types.td"

export async function searchMovies(text: string): Promise<Movie[]> {
	if (text === "") throw new Error("Put parameter in a function")
	const url = `https://www.omdbapi.com/?apikey=4287ad07&s=${text}`
	try {
		const response = await fetch(url)
		const result = await response.json()
		if (response.status !== 200) throw Error("There is an Error")
		const data = await result.Search
		if (!data) return []
		const newData = mapMovies(data)
		return newData
	} catch (error) {
		const newError = error
		throw newError
	}
}
const mapMovies = (results: SearchFromApi[]): Movie[] => {
	return results.map((result) => {
		return {
			title: result.Title,
			year: result.Year,
			image: result.Poster,
			id: result.imdbID,
		}
	})
}
