import * as React from 'react';
import renderer from 'react-test-renderer';
import {IconButton} from '../../../src/components';

it('renders correctly', () => {
  const tree = renderer
    .create(<IconButton onPress={() => null} iconName="tune" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
