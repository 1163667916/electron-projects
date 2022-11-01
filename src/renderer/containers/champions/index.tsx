import React, { useEffect, useState } from 'react';
import api from 'renderer/api/api';
import fetch from '../../api/fetch';

type Champion = {
  ally_tips: string[];
  enemy_tips: string[];
  id: number;
  image_url: string;
  key: string;
  name: string;
  passive: {
    description: string;
    image_url: string;
    name: string;
    video_url: string;
  };
  spells: {
    key: string;
    cooldown_burn: [];
    cost_burn: number[];
    description: string;
    image_url: string;
    max_rank: number;
    name: string;
    range_burn: number[];
    tooltip: string;
    video_url: string;
  }[];
};

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
  return (
    <div className="champions-container">
      <div>
        <ul className="champions-list flex-row flex-wrap">
          {champions.map((champion) => {
            return (
              <li
                className="champions-list-item flex-row margin-bottom-15"
                key={champion.key}
                style={{ width: '33.3%' }}
              >
                <div className="champions-list-item__avatar">
                  <img src={champion.image_url} alt={champion.name} />
                </div>
                <div className="champions-list-item__content">
                  <span>{champion.name}</span>
                  <div>
                    <span>英雄技能：</span>
                    <ul className="flex-row">
                      {champion.spells.map((spell) => (
                        <li className="flex-column">
                          <img
                            style={{ width: '64px' }}
                            src={spell.image_url}
                            alt="spell"
                          />
                          <span>{spell.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    被动技能：
                    <img src={champion.passive.image_url} alt="passive" />
                    <span
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{
                        __html: champion.passive.description,
                      }}
                    />
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
