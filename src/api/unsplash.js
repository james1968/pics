import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
     'Client-ID ada730abc10b92196155cc58883d7bda511fb9e8d261468adc9cd4815b5699fb'
  }

});
