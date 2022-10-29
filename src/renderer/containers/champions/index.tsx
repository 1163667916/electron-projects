import React, { useEffect } from 'react';
import api from 'renderer/api/api';
import fetch from '../../api/fetch';

const ChampionsContainer = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await fetch.get(api.getChampionData());
    window.console.log(result);
  };
  return <div> root</div>;
};

export default ChampionsContainer;
