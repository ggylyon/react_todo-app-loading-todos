import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Notification } from './components/Notification/Notification';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/Todo';
import { getTodos } from './api/todos';

function filterBy(todos: Todo[], filterCriteria = 'all') {
  switch (filterCriteria) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterCriteria, setFilterCriteria] = useState('all');
  const filteredTodos = filterBy(todos, filterCriteria);
  const uncompletedTodos = todos.filter(todo => !todo.completed).length;

  const [notificationText, setNotificationText] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleNotification = () => {
    setIsNotificationVisible(true);
    setTimeout(() => setIsNotificationVisible(false), 3000);
  };

  useEffect(() => {
    getTodos()
      .then(response => {
        const formattedResponse = response.map(todo => {
          const formattedTodo = {
            title: todo.title,
            id: todo.id,
            userId: todo.userId,
            completed: todo.completed,
          };

          return formattedTodo;
        });

        setTodos(formattedResponse);
      })
      .catch(() => {
        setNotificationText('Unable to load todos');
        handleNotification();
      });
  }, []);

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />
        {todos.length > 0 && <TodoList todos={filteredTodos} />}
        {todos.length > 0 && (
          <Footer
            todosQuantity={uncompletedTodos}
            filterBy={setFilterCriteria}
          />
        )}
      </div>

      <Notification
        notificationText={notificationText}
        isNotificationVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
      />
    </div>
  );
};
