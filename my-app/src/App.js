import css from "./App.module.css";
import Content from "./components/Content";
import NavBarForm from "./components/NavBarForm";

import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className={css.App}>
			<NavBarForm />
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;
