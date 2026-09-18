import { Todo } from '../../types/Todo';
import { TodoComponent } from '../Todo/TodoComponent';

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => {
        return <TodoComponent todo={todo} key={todo.id} />;
      })}
    </section>
  );
};
