import css from "./App.module.css";
import ContentAPIHooks from "./components/ContentAPIHooks";

import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className={css.App}>
			<NavBarForm />
			<Sidebar />
			<ContentAPIHooks />
		</div>
	);
}

export default App;
