import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  todosQuantity: number;
  filterBy: (filterCriteria: string) => void;
};

export const Footer = ({ todosQuantity, filterBy }: Props) => {
  const [filterCriteria, setFilterCriteria] = useState('all');

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {todosQuantity} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames(
            'filter__link',
            filterCriteria === 'all' ? 'selected' : '',
          )}
          data-cy="FilterLinkAll"
          onClick={event => {
            event.preventDefault();

            setFilterCriteria('all');
            filterBy('all');
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames(
            'filter__link',
            filterCriteria === 'active' ? 'selected' : '',
          )}
          data-cy="FilterLinkActive"
          onClick={event => {
            event.preventDefault();

            setFilterCriteria('active');
            filterBy('active');
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames(
            'filter__link',
            filterCriteria === 'completed' ? 'selected' : '',
          )}
          data-cy="FilterLinkCompleted"
          onClick={event => {
            event.preventDefault();
            setFilterCriteria('completed');
            filterBy('completed');
          }}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
