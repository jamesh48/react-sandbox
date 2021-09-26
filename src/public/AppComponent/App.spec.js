import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';
import { GlobalStoreProvider } from 'GlobalStore';

import { mount } from 'enzyme';

describe('App Component', () => {

  it('Renders the App Component', () => {
    const wrapper = mount(
      <GlobalStoreProvider>
        <App />
      </GlobalStoreProvider>
    );
    expect(wrapper.find('#app-root').length).toEqual(1);
  })

  test('snapshot renders', () => {
    const component = renderer.create();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});