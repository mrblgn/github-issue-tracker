import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {HomeScreen} from '../HomeScreen';
import * as utils from '../../utils';

describe('Home Screen', () => {
  it('should be home page', async () => {
    const route = {params: {}};
    const navigation = {navigate: jest.fn()};

    spyOn(navigation, 'navigate');
    const page = render(<HomeScreen {...({navigation, route} as any)} />);

    const ownerInput = page.getByTestId('ownerInput');
    const repoInput = page.getByTestId('repoInput');
    const searchButton = page.getByTestId('searchButton');
    fireEvent.changeText(ownerInput, 'facebook');
    fireEvent.changeText(repoInput, 'react');
    await act(async () => {
      const spy = jest
        .spyOn(utils, 'requestIssues')
        .mockReturnValue(Promise.resolve('response'));
      fireEvent.press(searchButton);
      expect(spy).toHaveBeenCalled();
    });
    // expect(navigation.navigate).toHaveBeenCalledWith('Issues');
  });
});
