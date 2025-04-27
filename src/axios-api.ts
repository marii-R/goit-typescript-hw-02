import axios from "axios";

const API_KEY = "wXnCuk4Sbv1x06KszY_ZYTRFwFaGNf4_2_eHxigHTO8";
const BASE_URL = "https://api.unsplash.com/search/photos";
const PER_PAGE = 16;

export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchImagesResponse {
  results: Image[];
}

export const fetchImage = async (image: string, page: number = 1): Promise<Image[]> => {
  try {
    const response = await axios.get<FetchImagesResponse>(BASE_URL, {
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