import * as React from 'react';
import renderer from 'react-test-renderer';
import {TextBlock} from '../../../src/components';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(mockState => {
      return mockState;
    }),
  };
});

it('renders correctly', () => {
  const tree = renderer.create(<TextBlock>hello </TextBlock>).toJSON();
  expect(tree).toMatchSnapshot();
});
