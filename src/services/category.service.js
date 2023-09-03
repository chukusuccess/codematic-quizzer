import { api } from "./api";

/**
 * Category Service is a class responsible for communicating with the server for fetching categories array and category object.
 * 
 * {
 "trivia_categories": [
     { "id": 9, "name": "General Knowledge" },
    ]
* }
 */

export class CategoryService {
  /** Get categories function awaits our api to hit api_category.php endpoint
   *
   * Takes no params
   * example usage is:- await CategoryService.getCategories();
   * @returns array of all categories
   */
  static async getCategories() {
    const { data } = await api.get("api_category.php");
    return data;
  }

  // get category by params
  static async getCategory({ amount, category, difficulty }) {
    const { data } = await api.get(
      `api.php?amount=${
        amount || 1
      }&category=${category}&difficulty=${difficulty}`
    );
    return data;
  }
}
