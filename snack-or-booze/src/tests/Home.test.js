import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

//smoke test
it('renders without breaking', ()=> {
  render(<Home itemCounts={{snacks:1, drinks:2}} />);
});

//snapshot tests
it('matches snapshot', ()=> {
  const {asFragment} = render(<Home itemCounts={{snacks:1, drinks:2}} />);
  expect(asFragment()).toMatchSnapshot();
});

//
it('displays item counts passed as props', ()=> {
  const { queryByTestId } = render(<Home itemCounts={{snacks:3, drinks:2}} />);
  const text = queryByTestId('item-count');
  expect(text).to.contain.text('2 drinks and 3 snacks')
})