import * as React from 'react';
import {Input} from '../../../src/components';
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
  const tree = renderer
    .create(
      <Input
        value="hello"
        placeholder="world"
        onChangeText={() => null}
        label="hi"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
