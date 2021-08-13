import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './App.css'

function App (){
  // const search = useSelector(state => state.gif.value);
  // const [searchGif, setSearchGif] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataTrend, setDataTrending] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleClickTrending = async () => {
    const link =  await axios.get (
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
    );
    const gifs = link.data.data

    setDataTrending(
      gifs.map((gif, index) => (
        <img src={gif.images.original.url} alt="" key={index} width="100"/>
      ))
    );
  }
  
  const handleClick = async () => {
    const link =  await axios.get (
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${search}&limit=12`
    );
    const gifs = link.data.data

    setData(
      gifs.map((gif, index) => (
        <img src={gif.images.original.url} alt="" key={index} width="100"/>
      ))
    );
  }

  return(
    <Router>
      <Switch>
      <Route path="/trending-page">
          <h1>Ini Trending page</h1>
          <button onClick={handleClickTrending}>Search</button>
          {dataTrend}
        </Route>
        <Route path="/">
          <div className="Navbar">
            <Link to="/trending-page">Trending</Link>
          </div>
          <div >
          <Box m={2}>
            <TextField  size="small" label="Search" id="outlined-size-small" variant="outlined"  onChange={handleSearch}  />
            <Button  onClick={handleClick} variant="outlined" size="small" color="primary" >
            Search
            </Button>
          </Box>
          </div>
          {data}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
