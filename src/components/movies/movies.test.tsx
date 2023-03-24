import { cleanup, render } from "@testing-library/react"
import { ResponseMap } from "../../mock/withResult"
import { Movies } from "./Movies"

describe("<Movies/>", () => {
	const mockResponseLengthExpect = ResponseMap.Search.length
	afterEach(cleanup)
	test("Render title of movie", () => {
		const component = render(<Movies results={ResponseMap.Search} />)
		const titles = component.queryAllByRole("heading")
		expect(titles.length).toBe(mockResponseLengthExpect)
	})
	test("Render year of movie", () => {
		const component = render(<Movies results={ResponseMap.Search} />)
		const years = component.getAllByRole("year")
		expect(years.length).toBe(mockResponseLengthExpect)
	})
	test("Render image of movie", () => {
		const component = render(<Movies results={ResponseMap.Search} />)
		const images = component.getAllByRole("img")
		expect(images.length).toBe(mockResponseLengthExpect)
	})
})
