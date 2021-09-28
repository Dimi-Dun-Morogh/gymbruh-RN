import * as React from 'react';
import {ErrorsInput} from '../../../src/components';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ErrorsInput errors={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
