import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/index';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleMapApiKey}`;
  useEffect(async () => {
    try {
      const response = await axios.get(API);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    //setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
