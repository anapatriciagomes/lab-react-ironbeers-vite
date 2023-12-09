import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <div className="Homepage">
      <Link to="/beers">
        <div className="pageLinks">
          <img src={allBeers} alt="all beers" />
          <h2>All Beers</h2>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="pageLinks">
          <img src={randomBeer} alt="random beer" />
          <h2>Random Beer</h2>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="pageLinks">
          <img src={newBeer} alt="new beer" />
          <h2>New Beer</h2>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
