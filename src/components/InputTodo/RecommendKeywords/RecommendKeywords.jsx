import React from 'react';
import { RecommendItem } from './RecommendItem/RecommendItem';

export const RecommendKeywords = ({ recommendList }) => {
  return (
    <div>
      <ul>
        {recommendList.length > 0
          ? recommendList.map((item, index) => (
              <RecommendItem key={item} item={item} id={index} />
            ))
          : null}
      </ul>
    </div>
  );
};
