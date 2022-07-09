import css from "./App.module.css";
import ContentHooksAPI from "./components/ContentAPI";

import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className={css.App}>
			<NavBarForm />
			<Sidebar />
			<ContentHooksAPI />
		</div>
	);
}

export default App;
