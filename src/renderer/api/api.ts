// lol/
const baseURL = '/api/lol';

const getUrl = (path: string) => {
  return baseURL + path;
};

export default {
  getChampionData: () => getUrl('/request_legend_list'),
};
