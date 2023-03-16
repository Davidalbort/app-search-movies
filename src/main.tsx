import ReactDom from "react-dom/client"
import { App } from "./App"
import "./styles.css"

ReactDom.createRoot(document.getElementById("app") as HTMLElement).render(
	<App />
)
