import "./App.scss";
import Categoris from "./components/Categoris/Categoris";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Categoris/> 
    </div>
  );
}

export default App;
