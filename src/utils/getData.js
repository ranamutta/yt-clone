import axios from 'axios';

// yapıcağımız bütün api isteklerihin başına bu url'i ekler
axios.defaults.baseURL =  'https://yt-api.p.rapidapi.com';

const options = {
  params: { geo: 'TR', lang: 'tr' },
  headers: {
    'X-RapidAPI-Key': 'f9ab8fc4cdmsh9361d4e65fc221fp16e33bjsn9e9e692f32a6',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
};

// parametre olark aldığı url'e api isteği atıp
// elde ettiği sonucu döndüren yardımcı fonk.
export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};