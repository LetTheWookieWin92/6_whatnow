//Components
import Display from "./components/display";

//Style
import "./App.css";

//Images
import background from "./images/background.png";

function App() {
	return (
		<div className="App">
			<Display />
			{/*<img
				src={background}
				className="backgroundImg"
				style={{ marginBottom: 0 }}
				alt="Content Missing"
			/>
            <div style={{ backgroundColor: "#2d112b", height: 200 }}>.</div>*/}
		</div>
	);
}

export default App;
