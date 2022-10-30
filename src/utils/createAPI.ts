import axios from 'axios';
import CONFIG from 'react-native-config';

export const createAPI = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${CONFIG.API_KEY}&units=metric`,
  );

  return await response.data;
};
