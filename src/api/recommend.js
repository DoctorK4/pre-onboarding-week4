import apiRequest from 'api';

const RESOURCE = '/search';

export const getRecommend = async keyword => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`, {
      params: { q: keyword },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('API getRecommend error');
  }
};
