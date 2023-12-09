import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [beerSearch, setBeerSearch] = useState('');
  const [filteredBeers, setFilteredBeers] = useState(allBeers);

  const getAllBeers = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  const getFilteredBeers = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${beerSearch}`
      );
      console.log(response.data);
      setFilteredBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilteredBeers();
  }, []);

  return (
    <div className="beers-page">
      {!allBeers.length && <h2>Loading...</h2>}
      <input
        type="text"
        className="search-input"
        value={beerSearch}
        onChange={event => {
          setBeerSearch(event.target.value);
          setFilteredBeers(
            allBeers.filter(beer =>
              beer.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
          );
        }}
        placeholder="Search Beer"
      />
      {filteredBeers.map(beer => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`} className="beer-card">
              <img src={beer.image_url} alt="beer" />
              <div className="beer-details">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>
                  <b>Created by: </b>
                  {beer.contributed_by}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
