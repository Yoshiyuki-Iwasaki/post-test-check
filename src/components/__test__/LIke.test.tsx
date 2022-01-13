import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import Like from "../Like";

describe("いいね機能テスト", () => {

  afterEach(() => {
    cleanup();
  });

  // Snapshot テスト
  test("render", () => {
    const { asFragment } = render(<Like />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Click テスト
  test("Click テスト", () => {
    const component = render(<Like />);
    const likedButton = component.getByTestId("like");
    fireEvent.click(likedButton);
    screen.getByText("1");
    const unlikedButton = component.getByTestId("unlike");
    fireEvent.click(unlikedButton);
    screen.getByText("0");
  });
});
