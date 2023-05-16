import { createTodo } from 'api/todo';
import { checkInput } from 'components/InputTodo/checkInput';
import { useCallback } from 'react';

export const RecommendItem = ({
  item,
  setTodos,
  setInputText,
  setIsLoading,
}) => {
  const handleClick = useCallback(
    async e => {
      try {
        e.preventDefault();
        setIsLoading(true);
        const newItem = checkInput(item);
        const { data } = await createTodo(newItem);
        if (data) {
          return setTodos(prev => [...prev, data]);
        }
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [item, setInputText, setTodos, setIsLoading],
  );

  return (
    <li>
      <button type="button" onClick={handleClick}>
        {item}
      </button>
    </li>
  );
};
