import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { App } from "./App"
describe("<App/>", () => {
	afterEach(cleanup)
	test("Render correct component", () => {
		const { getByRole } = render(<App />)
		const title = getByRole("heading")
		expect(title.textContent).toBe("Search Films")
	})
})
