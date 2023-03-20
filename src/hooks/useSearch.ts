import { useEffect, useRef, useState } from "react"

export function useSearch() {
	const [search, setSearch] = useState("")
	const [message, setMessage] = useState("")
	const isRenderFirst = useRef(true)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearch = event.target.value
		if (newSearch.startsWith(" ")) return
		setSearch(newSearch)
		if (isRenderFirst.current) {
			isRenderFirst.current = newSearch === ""
		}
	}
	const updateMessage = (text: string) => {
		setMessage(text)
	}
	useEffect(() => {
		if (search.match(/^\d+$/)) {
			setMessage("Can't search movies with number")
			return
		}
		if (!search && !isRenderFirst) {
			setMessage("Can't search movies with field empty")
			return
		}
		setMessage("")
	}, [search])
	return { search, message, handleChange, updateMessage }
}
