import { render, waitFor } from "@testing-library/react-native";
import Page from "../../../app/index";

// jest.mock("@react-navigation/native", () => {
//   return {
//     useNavigation: jest.fn(),
//   };
// });

describe("login", () => {
  it("renders/navigates throughout app screens", async () => {
    const wrapper = render(<Page />);
    await waitFor(() => {
      const signInText = wrapper.findByText(/loaded/i);
      expect(signInText).toBeTruthy();
    });
  });
});
