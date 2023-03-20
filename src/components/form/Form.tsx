interface FormProps {
	search: string
	message: string
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Form({
	handleSubmit,
	handleChange,
	message,
	search,
}: FormProps) {
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<label htmlFor="search">search</label>
				<input
					className={message ? "error" : ""}
					name="search"
					id="search"
					value={search}
					type="text"
					onChange={handleChange}
				/>
				{message && <p>{message}</p>}
			</fieldset>
			<button type="submit">Search</button>
		</form>
	)
}
