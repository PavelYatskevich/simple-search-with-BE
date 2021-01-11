import './App.css';
import { ImagesList} from "./components/ImagesList";
import { Search } from "./components/Search";
import ImagesProvider from "./context/ImagesContext";

function App() {
  return (
      <ImagesProvider>
        <div className="App">
            <Search />
            <ImagesList />
        </div>
      </ImagesProvider>
  );
}

export default App;
