import axios from "axios";

const API_KEY = "wXnCuk4Sbv1x06KszY_ZYTRFwFaGNf4_2_eHxigHTO8";
const BASE_URL = "https://api.unsplash.com/search/photos";
const PER_PAGE = 16;

export const fetchImage = async (image, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query: image,
        page,
        orientation: "portrait",
        per_page: PER_PAGE,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};