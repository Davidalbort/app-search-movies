import { SearchFromApi } from "../../../types/types.td"

export async function searchMovies(text: string): Promise<SearchFromApi[]> {
	if (text === "") throw new Error("Put parameter in a function")
	const url = `https://www.omdbapi.com/?apikey=4287ad07&s=${text}`
	try {
		const response = await fetch(url)
		const result = await response.json()
		if (response.status !== 200) throw Error("There is an Error")
		const data = await result.Search
		return data
	} catch (error) {
		const newError = error
		throw newError
	}
}
