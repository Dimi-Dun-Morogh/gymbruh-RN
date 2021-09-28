import * as React from 'react';
import renderer from 'react-test-renderer';
import {Modal} from '../../../src/components';

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
  const foo = () => null;
  const tree = renderer
    .create(
      <Modal visible text="hello modal" onDecline={foo} onSuccess={foo} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
