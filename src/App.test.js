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
  wrapper.setProps({
    dataList:[{
      "email_id":"imeverything@gmail.com",
      "name":"vivek",
      "batch":"PE2020",
      "rank":9,
      "overall_score":50,
      "individual_scores":
      [
         {
          "contest1_score":50,
          "contest2_score":50
         }

      ],
      "udemy_completion_percentage":50
  }]
  })
  expect(wrapper.find('Leaderboard')).toHaveLength(1)
})
