import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers/new';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_Brewed] = useState('');
  const [brewers_tips, setBrewers_Tips] = useState('');
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState('');

  const handleSubmit = async event => {
    try {
      event.preventDefault();

      const requestBody = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };
      await axios.post(API_URL, requestBody);
      setName('');
      setTagline('');
      setDescription('');
      setFirst_Brewed('');
      setBrewers_Tips('');
      setAttenuation_Level('');
      setContributed_By('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-beer-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          value={tagline}
          id="tagline"
          onChange={event => setTagline(event.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={description}
          id="description"
          onChange={event => setDescription(event.target.value)}
        />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          value={first_brewed}
          id="first_brewed"
          onChange={event => setFirst_Brewed(event.target.value)}
        />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          type="text"
          value={brewers_tips}
          id="brewers_tips"
          onChange={event => setBrewers_Tips(event.target.value)}
        />
        <label htmlFor="name">Attenuation Level</label>
        <input
          type="number"
          value={attenuation_level}
          id="attenuation_level"
          onChange={event => setAttenuation_Level(event.target.value)}
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          value={contributed_by}
          id="contributed_by"
          onChange={event => setContributed_By(event.target.value)}
        />
        <button type="submit">ADD BEER</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
