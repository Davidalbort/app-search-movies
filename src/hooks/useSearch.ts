import { useEffect, useState } from "react"

interface useSearchParam {
	isRenderFirst: React.MutableRefObject<boolean>
}
export function useSearch({ isRenderFirst }: useSearchParam) {
	const [search, setSearch] = useState("")
	const [message, setMessage] = useState("")
	const updateMessage = (text: string) => {
		setMessage(text)
	}
	const updateSearch = (search: string) => {
		setSearch(search)
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
	return { search, message, updateSearch, updateMessage }
}
