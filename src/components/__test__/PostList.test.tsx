import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostList from "../PostList";

describe("PostList 機能テスト", () => {
  afterEach(() => {
    cleanup();
  });

  // Snapshot テスト
  test("render", () => {
    const { asFragment } = render(<PostList />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Submit テスト
  test("Submit テスト", () => {
    const component = render(<PostList />);
  });
});
