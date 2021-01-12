import './App.css';
import { ImagesList} from "./components/ImagesList";
import { Search } from "./components/Search";
import { useEffect, useState} from "react";
import {useDebounce} from "react-recipes";
import axios from "axios";

const App = () => {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const debouncedSearchTerm = useDebounce(search, 500);

    const handleChange = ({ target: { value } }) => {
        setSearch(value);
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/search/${debouncedSearchTerm}`).then((response) => {
            setImages(response?.data?.hits)
        })
    }, [debouncedSearchTerm]);

  return (
    <div className="App">
        <Search value={search} handleChange={handleChange} />
        <ImagesList search={debouncedSearchTerm} images={images}/>
    </div>
  );
}

export default App;
