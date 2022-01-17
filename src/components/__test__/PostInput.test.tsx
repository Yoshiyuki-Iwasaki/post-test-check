import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostInput from "../PostInput";
import data from "../../postData.json";

describe("<PostInput>", () => {
  const props = {
    postData: data,
    setPostData: jest.fn(),
  };
  test("Snapshotは問題ないか", () => {
    const { asFragment } = render(<PostInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
