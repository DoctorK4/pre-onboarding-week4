import React from 'react';
import { RecommendItem } from './RecommendItem';

export const RecommendKeywords = ({ recommendList }) => {
  return (
    <div>
      <ul>
        {recommendList.length > 0
          ? recommendList.map((item, index) => (
              <RecommendItem
                key={item.id}
                item={item}
                id={item.id}
                index={index}
              />
            ))
          : null}
      </ul>
    </div>
  );
};
