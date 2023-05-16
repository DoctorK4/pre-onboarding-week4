import { FaSpinner, FaTrash } from 'react-icons/fa';
import { useCallback, useState, useEffect, useRef } from 'react';

import { deleteTodo } from '../../../api/todo';

const TodoItem = ({ id, title, setTodos }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;