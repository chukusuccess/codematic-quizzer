import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Category } from "../components/Category";

// TO-DO: fix problematic test.
// import { Categories, SELECT_CATEGORY_TEST_ID } from "../pages/Categories";
// import { CategoryService } from "../services/category.service";
// import { api } from "../services/api";

// mocking useNavigate Hook.
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe.skip("Categories servcie", () => {
  let mockedApi;

  beforeEach(() => {
    mockedApi = jest.mocked(api, true);
  });

  describe.skip("get categories", () => {
    it("calls the get categories endpoint and returns all categories data", async () => {
      // given
      const sampleData = {
        trivia_categories: [
          { "id": 9, "name": "General Knowledge" },
          { "id": 10, "name": "Entertainment: Books" },
        ],
      };

      mockedApi.get.mockResolvedValueOnce(sampleData);

      // when
      const result = await CategoryService.getCategories();

      // then
      expect(result).toBeDefined();
      expect(mockedApi.get).toBeCalledWith("api_category.php");
      expect(result).toEqual(
        expect.arrayContaining({
          [0]: { "id": 9, "name": "General Knowledge" },
          [1]: { "id": 10, "name": "Entertainment: Books" },
        })
      );
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});

// testing the difficulty Button is in the DOM
describe("Category Cards", () => {
  test("renders Button with category difficulty text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Category />
      </BrowserRouter>
    );
    const buttonElement = getByText(/medium/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

// testing the Categories Page is in the DOM
describe.skip("Categoris page", () => {
  it("renders Categories page", async () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );
    const Container = screen.getByTestId(SELECT_CATEGORY_TEST_ID);
    expect(Container).toBeInTheDocument();
  });
});
