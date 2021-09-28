import * as React from 'react';
import {Button} from '../../../src/components';
import renderer from 'react-test-renderer';

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
  const button = renderer
    .create(<Button onPress={() => null}>ok</Button>)
    .toJSON();
  expect(button).toMatchSnapshot();
});
