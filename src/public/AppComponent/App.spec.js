import React from 'react';
import renderer from 'react-test-renderer';
import ReactSandboxApp from './ReactSandboxApp.js';
import { GlobalStoreProvider } from 'GlobalStore';

import { mount } from 'enzyme';

describe('ReactSandboxApp Component', () => {

  it('Renders the ReactSanboxApp Component', () => {
    const wrapper = mount(
      <GlobalStoreProvider>
        <ReactSandboxApp />
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