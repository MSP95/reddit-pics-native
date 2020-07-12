const HOST = "https://www.reddit.com";
const isImage = new RegExp("\\.(gif|jpg|jpeg|tiff|png)$");

// Test Data
/*return Promise.resolve([
  "https://i.redd.it/pow04ebygq931.png",
  "https://i.redd.it/8fiwwee1qaa51.jpg",
  "https://i.redd.it/r6f0hxo6k9a51.jpg",
  "https://i.redd.it/jfyhjiljr8a51.jpg",
  "https://i.redd.it/mpoz5i6pe9a51.jpg",
  "https://i.redd.it/pxq54r9xk9a51.jpg",
  "https://i.redd.it/hv35mpa8z8a51.jpg",
  "https://i.redd.it/l4olwlw4c7a51.jpg",
  "https://i.redd.it/um74kwns67a51.jpg",
]);*/

const get = (urlPath: string, queryParams?: string) => {
  const query = queryParams ? `?${queryParams}` : "";
  console.log(
    "`${HOST}${urlPath}.json${query}` -->",
    `${HOST}${urlPath}.json${query}`
  );
  return fetch(`${HOST}${urlPath}.json${query}`).then((response) =>
    response.json()
  );
};

const fetchPics = (subReddit: string) => {
  return get(`/r/${subReddit}`).then((resp) => {
    const data = resp.data?.children || [];
    return data
      .map((post: any) => {
        return {
          url: post.data.url,
          name: post.data.name,
          raw_data: post.data,
        };
      })
      .filter((p: any) => isImage.test(p.url.toString()));
  });
};

const fetchMorePics = (subReddit: string, after: string) => {
  return get(`/r/${subReddit}`, `after=${after}`);
};

const subRedditAutoComplete = (query: string) => {
  return get(
    `/api/${"subreddit_autocomplete_v2"}`,
    `query=${query}&include_over_18=true`
  );
};

export { fetchPics, fetchMorePics, subRedditAutoComplete };
