import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import Like from "../Like";

describe("Like テスト", () => {

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
    const button = component.getByTestId("counter");
    fireEvent.click(button);
    fireEvent.click(button);
    screen.getByText("2");
  });
});
