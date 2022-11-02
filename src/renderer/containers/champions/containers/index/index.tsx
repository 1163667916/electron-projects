import React, { useEffect, useState } from 'react';
import api from 'renderer/api/api';
import fetch from '../../../../api/fetch';
import { Champion } from '../../config/type';

const ChampionsContainer = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setChampions(data);
        return null;
      })
      .catch((err) => {
        window.console.log(err);
      });
  }, []);

  const getData = async () => {
    const result = await fetch.get(api.getChampionData());
    return result.data;
  };

  const onChampionClickHandle = (champion: Champion) => {
    window.console.log(champion);
  };
  return (
    <div className="champions-container">
      <div>
        <ul className="champions-list flex-row flex-wrap">
          {champions.map((champion) => {
            return (
              <li
                className="champions-list-item flex-row margin-bottom-15 margin-horizontal-5 "
                key={champion.key}
              >
                <div
                  title={champion.name}
                  className="champions-list-item__avatar curosr-point width-120"
                  onClick={() => onChampionClickHandle(champion)}
                >
                  <img src={champion.image_url} alt={champion.name} />
                  <div className="width-120 font-size-20 text-overflow">
                    <span>{champion.name}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChampionsContainer;
