import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostInput from "../PostInput";

describe("PostInput 機能テスト", () => {
  afterEach(() => {
    cleanup();
  });

  // Snapshot テスト
  test("render", () => {
    const { asFragment } = render(<PostInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Submit テスト
  test("Submit テスト", () => {
    const component = render(<PostInput />);
  });
});
