import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "../Home";

it('renders without breaking', ()=> {
  render(<Home itemCounts={{snacks:1, drinks:2}} />);
  render(<Home />);
});

it('matches snapshot', ()=> {
  const {asFragment} = render(<Home itemCounts={{snacks:1, drinks:2}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('displays item counts passed as props', ()=> {
  const { getByText } = render(<Home itemCounts={{snacks:3, drinks:2}} />);
  const subheading = getByText(`2 drinks and 3 snacks`, {exact: false});
  expect(subheading).toBeInTheDocument();
})

it('displays subheading without item counts', () => {
  const { getByText } = render(<Home />);
  const subheading = getByText(`Browse our vast selection of menu items.`);
  expect(subheading).toBeInTheDocument();
})