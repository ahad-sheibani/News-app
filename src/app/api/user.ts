// export async function getData() {
//   const response = await fetch(
//     `https://newsapi.org/v2/top-headlines?country=us&apiKey=a071ef358ee948d099af32399dd123db`
//   );
//   const jsonData = await response.json();
//   return jsonData;
// }
// export default async function handler(req, res) {
//   const jsonData = await getData();
//   res.status(200).json(jsonData);

import { NewsResponse } from "../../../models/NewsArticles";

// }
export const getData = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=a071ef358ee948d099af32399dd123db`
  );
  const newsResponse: NewsResponse = await response.json();

  return newsResponse;
};
