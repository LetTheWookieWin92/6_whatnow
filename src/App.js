//Components
import Home from './components/home';

//Style
import './App.css';

//Images
import background from './images/background.png'

function App() {
  return (
    <div className="App">
        <Home />
        <img src={background} className="backgroundImg" style={{marginBottom: 0}} alt="Content Missing"/>
    </div>
  );
}

export default App;
