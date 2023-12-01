import { excuteRequest } from "./common";
import { ResultObject } from "../interface/article.interface";

const { VITE_API_KEY } = process.env;

export const getArticleSearch = async (
  query: string,
): Promise<ResultObject | undefined> => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${VITE_API_KEY}
    `;

  const resObject = await excuteRequest(url, {
    method: "GET",
  });

  if (resObject) {
    switch (resObject.status) {
      case 200:
        return resObject.data as ResultObject;
      default:
        throw new Error("Something went wrong");
    }
  }
};
