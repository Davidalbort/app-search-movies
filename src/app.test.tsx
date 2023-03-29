import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { App } from "./App"
import { searchMovies } from "./utils/services/search/searchMovies"

jest.mock("./utils/services/search/searchMovies.ts", () => ({
	searchMovies: jest.fn(),
}))
describe("<App/>", () => {
	afterEach(() => {
		jest.resetAllMocks()
		cleanup()
	})
	test("Render correct component, without display any messages", () => {
		const { getByRole, queryByRole } = render(<App />)
		const title = getByRole("heading", { name: "Search Films" })
		expect(title).toBeInTheDocument()
		expect(queryByRole("alertdialog")).toBe(null)
	})
	test("Show form with input and button for search", () => {
		const { getByRole } = render(<App />)
		const input = getByRole("textbox")
		const button = getByRole("button")
		expect(input).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})
	test("should display information in input, when user typing ", () => {
		const { getByLabelText } = render(<App />)
		const input = getByLabelText("search")
		fireEvent.change(input, { target: { value: "hello" } })
		expect(input).toHaveValue("hello")
	})
	test("Not allow typing if there is an empty space start word", () => {
		const { getByLabelText } = render(<App />)
		const input = getByLabelText("search")
		fireEvent.change(input, { target: { value: " hello" } })
		expect(input).toHaveValue("")
	})
	test("Should display message error if there is number", () => {
		const { getByLabelText } = render(<App />)
		const input = getByLabelText("search")
		fireEvent.change(input, { target: { value: "3" } })
		expect(
			screen.getByText("Can't search movies with number")
		).toBeInTheDocument()
	})
	//second part
	test("Should display message error, when user clicked search and field is empty", () => {
		const { getByRole } = render(<App />)
		const button = getByRole("button")
		fireEvent.click(button)
		expect(
			screen.getByText("Can't search movies with empty fields")
		).toBeInTheDocument()
	})
	test("Should call searchMovies correct, when user write correct input", () => {
		const { getByLabelText, getByRole } = render(<App />)
		const input = getByLabelText("search")
		const button = getByRole("button")
		fireEvent.change(input, { target: { value: "avenger" } })
		fireEvent.click(button)
		expect(searchMovies).toHaveBeenCalled()
	})
	test("Should display message, when not found the movie", () => {
		const { getByLabelText, getByRole, findByText } = render(<App />)
		const input = getByLabelText("search")
		const button = getByRole("button")
		fireEvent.change(input, { target: { value: "albort" } })
		fireEvent.click(button)
		const message = findByText("Cannot found the movie with that word")
		setTimeout(() => {
			expect(message).toBeInTheDocument()
		}, 2000)
	})
	test("Prevent the same search from being performed twice in succession", () => {
		const { getByLabelText, getByRole } = render(<App />)
		const input = getByLabelText("search")
		const button = getByRole("button")
		fireEvent.change(input, { target: { value: "albort" } })
		fireEvent.click(button)
		fireEvent.click(button)
		expect(searchMovies).toHaveBeenCalledTimes(2)
	})
	test("Have to search performed automatically by typing", () => {
		const { getByLabelText } = render(<App />)
		const input = getByLabelText("search")
		fireEvent.change(input, { target: { value: "abc" } })
		expect(searchMovies).toHaveBeenCalled()
	})
})
