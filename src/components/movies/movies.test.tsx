import { cleanup, render } from "@testing-library/react"
import { Response } from "../../mock/withResult"
import { Movies } from "./Movies"

describe("<Movies/>", () => {
	afterEach(cleanup)
	test("Render title of movie", () => {
		const component = render(<Movies results={Response.Search} />)
		const titles = component.queryAllByRole("heading")
		expect(titles.length).toBe(10)
	})
	test("Render year of movie", () => {
		const component = render(<Movies results={Response.Search} />)
		const years = component.getAllByRole("year")
		expect(years.length).toBe(10)
	})
	test("Render image of movie", () => {
		const component = render(<Movies results={Response.Search} />)
		const images = component.getAllByRole("img")
		expect(images.length).toBe(10)
	})
})
