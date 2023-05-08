// lol/
const baseURL = '/api';

const prefix = '/lol';

export const getUrl = (path: string) => {
  return baseURL + path;
};

const lol = (path: string) => getUrl(prefix) + path;

export default {
  getChampionData: () => lol('/request_legend_list'),
};
