import React from 'react';
import Todos from './Todos.js';
import { TodosStoreProvider } from 'TodosStore';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('Todos Component', () => {
  it('Renders the Todos Component', () => {
    const wrapper = mount(
      <TodosStoreProvider>
        <Todos />
      </TodosStoreProvider>
    );
    expect(wrapper.find('#todos-root').length).toEqual(1);
  })

  test('todos snapshot renders', () => {
    const component = renderer.create();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});