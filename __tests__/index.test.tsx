import { render } from "@testing-library/react-native";
import Page from "../app/index";
describe("CustomComponent", () => {
  it("should render CustomComponent correctly", () => {
    const wrapper = render(<Page />);
    expect(wrapper.getByText("Hello World")).toBeTruthy();
  });
});
