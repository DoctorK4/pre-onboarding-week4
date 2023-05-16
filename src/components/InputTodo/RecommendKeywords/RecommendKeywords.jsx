import React from 'react';
import { RecommendItem } from './RecommendItem/RecommendItem';

export const RecommendKeywords = ({ recommendList, setInputText }) => {
  return (
    <div>
      <ul>
        {recommendList.length > 0
          ? recommendList.map((item, index) => (
              <RecommendItem
                key={item}
                item={item}
                id={index}
                setInputText={setInputText}
              />
            ))
          : null}
      </ul>
    </div>
  );
};
