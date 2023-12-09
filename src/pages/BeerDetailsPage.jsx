import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);

  const { beerId } = useParams();

  const getBeer = async () => {
    try {
      const response = await axios.get(`${API_URL}/${beerId}`);
      console.log(response.data);
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className="beer-page">
      {!beer && <h2>Loading...</h2>}
      {beer && (
        <div className="beer-page-details">
          <img src={beer.image_url} alt="beer" />
          <div className="beer-details-flex">
            <div className="beer-name-section">
              <h2>{beer.name}</h2>
              <h3 className="grey">{beer.tagline}</h3>
            </div>
            <div className="beer-record-section">
              <h2 className="grey">
                <b>Attenuation level: {beer.attenuation_level}</b>
              </h2>
              <h3>
                <b>First Brewed: {beer.first_brewed}</b>
              </h3>
            </div>
          </div>
          <div className="beer-description">
            <p>{beer.description}</p>
            <p className="grey">{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
