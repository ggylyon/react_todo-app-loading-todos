import { Filters } from '../../types/Filters';
import { Filter } from '../Filter/Filter';

type Props = {
  todosQuantity: number;
  filterBy: (filterCriteria: Filters) => void;
};

export const Footer = ({ todosQuantity, filterBy }: Props) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {todosQuantity} items left
      </span>

      <Filter filterBy={filterBy} />
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
