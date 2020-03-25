import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import LandingPage from './modules/LandingPage'
import Adapter from "enzyme-adapter-react-16";
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
  const textElement = getByText(/Welcome/i);
  expect(textElement).toBeInTheDocument();
});


test("check if live leaderboard text is present",()=>{
  const {getByText}=render(<LandingPage/>);
  const llText = getByText(/Live/i);
  expect(llText).toBeInTheDocument()
})


test("check if leaderboard is present",()=>{
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find('Leaderboard').exists()).toEqual(true)
})
