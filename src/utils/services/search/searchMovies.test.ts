import { searchMovies } from "./searchMovies"
import { ResponseFromApi, ResponseMap } from "../../../mock/withResult"

describe("searchMovies", () => {
	beforeEach(() => {
		jest.resetAllMocks()
	})
	// Tests that the function throws an error when an empty string is provided as the 'text' parameter. tags: [edge case]
	test("test_empty_string_parameter", async () => {
		await expect(searchMovies("")).rejects.toThrow("Put parameter in a function")
	})
	// Tests
	test("Should call correct function and return array with properties Movies", () => {
		const mockResult = ResponseFromApi
		const mockedData = ResponseMap.Search
		const mockResponse = {
			status: 200,
			json: () => Promise.resolve(mockResult),
			data: () => Promise.resolve(mockResult.Search),
		}
		global.fetch = jest.fn(() => Promise.resolve(mockResponse)) as jest.Mock
		const response = searchMovies("avenger")
		expect(response).resolves.toEqual(mockedData)
	})
	// Tests that the function returns an empty array when the response has no 'search' property. tags: [edge case]
	test("Should return empty array when not found the movie", async () => {
		const mockResponse = { status: 200, json: () => Promise.resolve({}) }
		const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
		global.fetch = mockFetch as jest.Mock
		const result = await searchMovies("Batman")
		expect(result).toBeDefined()
		expect(Array.isArray(result)).toBe(true)
		expect(result.length).toBe(0)
	})
})
