import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Footer />);

    expect(queryByTestId("header__container")).toBeTruthy();
})
