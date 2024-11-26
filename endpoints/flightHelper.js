import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();


export const flightSearch = async ({
  origin,
  destination,
  startDate,
  passengers,
  travelClass,
}) => {
  try {
    const data = {
      legs: `[{"destination":"${destination}","origin":"${origin}","date":"${startDate.toISOString().split('T')[0]}"}]`,
      adults: passengers.toString(),
      travelClass: travelClass,
      currency: 'USD',
      locale: 'en-US',
      market: 'en-US',
      countryCode: 'US'
    };

    const options = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getFlightDetails',
      params: data,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};