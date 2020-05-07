import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../NavBar';

it('renders without breaking', ()=> {
  render(<BrowserRouter><NavBar/></BrowserRouter>);
});

it('matches snapshot', ()=> {
  const { asFragment } = render(<BrowserRouter><NavBar/></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});