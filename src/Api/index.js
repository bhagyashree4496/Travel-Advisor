import axios from "axios";
// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        // "X-RapidAPI-Key": "bab88505f0msh2493bb9779922f0p171023jsn34492623cc8c",
        // "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "9be866ba69msha36bd7093ba1a0dp1c95abjsn0a129d778db6",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
