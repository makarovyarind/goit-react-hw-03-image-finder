function fetchData(searchName, currentPage) {
  return fetch(`https://pixabay.com/api/?q=${searchName}&page=${currentPage}&key=33885514-439aafd248d6bcbc591d483b7&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length > 0) {
        return data.hits;
      }

      return Promise.reject(new Error(`немає фото з таким іменем, як ${searchName}`));
    });
}

const api = {
  fetchData
};

export default api;