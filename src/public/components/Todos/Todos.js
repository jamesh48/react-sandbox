import React from 'react'
import 'GlobalSCSS';
import { useTodosContext } from 'TodosStore';

export default () => {
  const [{ todos, editedTodoValue }, todosDispatch] = useTodosContext();


  React.useEffect(() => {
    todosDispatch({ type: 'EDIT TODO VALUE', payload: '' });
  }, [todos]);

  return (
    <div className='component-container' id='todos-root'>
      <div>Todos: {todos.join(', ')}</div>
      <form onSubmit={() => {
        event.preventDefault();
        todosDispatch({ type: 'ADD TODO', payload: editedTodoValue })
      }}>
        <input type='text' value={editedTodoValue} onChange={() => {
          todosDispatch({ type: 'EDIT TODO VALUE', payload: event.target.value })
        }}></input>
        <button type='submit'>Add to Todos</button>
      </form>
    </div>
  );
};