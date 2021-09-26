import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Counter from './Counter.js';
import { CounterStoreProvider } from 'CounterStore';

describe('Counter Component', () => {

  it('Renders the Counter Component', () => {
    const wrapper = mount(
      <CounterStoreProvider>
        <Counter />
      </CounterStoreProvider>
    );
    expect(wrapper.find('#counter-root').length).toEqual(1);
  });

  test('counter snapshot renders', () => {
    const component = renderer.create();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});