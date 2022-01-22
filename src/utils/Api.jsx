const API_KEY = "24010319-58897770fe5a9dc6269d44f2f";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

function getImages(query, pageNumber) {
  const url = `${BASE_URL}?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("No matches found. Check your request"));
    })
    .then((response) => {
      return response.hits;
    });
}
const API = { getImages };
export default API;
