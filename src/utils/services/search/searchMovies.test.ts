import { searchMovies } from "./searchMovies"
import { Response } from "../../../mock/withResult"

describe("searchMovies", () => {
	beforeEach(() => {
		jest.resetAllMocks()
	})
	test("Should call correct function", () => {
		const mockedResponse = Response
		const mockedData = Response.Search
		global.fetch = jest.fn(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve(mockedResponse),
				data: () => Promise.resolve(mockedData),
			})
		) as jest.Mock
		const response = searchMovies("avenger")
		expect(response).resolves.toEqual(mockedData)
	})
})
