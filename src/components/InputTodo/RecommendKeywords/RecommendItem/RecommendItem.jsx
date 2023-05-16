export const RecommendItem = ({ item, setInputText }) => {
  const changeToKeyword = e => {
    e.preventDefault();
    setInputText(item);
  };

  return (
    <li>
      <button type="button" onClick={changeToKeyword}>
        {item}
      </button>
    </li>
  );
};
