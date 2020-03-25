import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import LandingPage from './modules/LandingPage'
import Adapter from "enzyme-adapter-react-16";
import Leaderboard from './modules/Leaderboard'
import { shallow, configure, mount } from "enzyme";

configure({ adapter: new Adapter() });


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check if mounting is happening(LandingPage)", () => {
  const mounted = mount(<LandingPage/> );
  expect(mounted.exists()).toEqual(true);
});

test("renders header", () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test("check mounting of Leaderboard",()=>{
  const mounted=mount(<Leaderboard/>)
  expect(mounted.exists()).toEqual(true)
})
