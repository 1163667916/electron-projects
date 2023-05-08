import React, { useEffect } from 'react';
import classNames from 'classnames';

import './css/index.scss';

import { Carousel } from 'antd';
import temJpg from '../../statics/imgs/temp/www.acg.gy_71.jpg';

const tempList = [
  {
    src: temJpg,
    title: '【小拉】850买一只赛博宠物猫值不值？',
    timestamp: '时间',
    viewCount: 200,
  },
  {
    src: temJpg,
    title: '【小拉】850买一只赛博宠物猫值不值？',
    timestamp: '时间',
    viewCount: 200,
  },
  {
    src: temJpg,
    title: '【小拉】850买一只赛博宠物猫值不值？',
    timestamp: '时间',
    viewCount: 200,
  },
  {
    src: temJpg,
    title: '【小拉】850买一只赛博宠物猫值不值？',
    timestamp: '时间',
    viewCount: 200,
  },
  {
    src: temJpg,
    title: '【小拉】850买一只赛博宠物猫值不值？',
    timestamp: '时间',
    viewCount: 200,
  },
  {
    src: temJpg,
    title: '【小拉】850买一只赛博宠物猫值不值？',
    timestamp: '时间',
    viewCount: 200,
  },
];

function Index() {
  useEffect(() => {}, []);

  return (
    <div id="page-index">
      <div className="section-1 flex-row">
        <div className="left-part margin-right-15 ">
          <div className="carousel border-radius-5">
            <Carousel autoplay>
              <div>
                <img src={temJpg} alt="" />
              </div>
              <div>
                <img src={temJpg} alt="" />
              </div>
              <div>
                <img src={temJpg} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="right-part">
          <ul className="flex-row flex-wrap">
            {_.map(tempList, (item, i) => (
              <li key={i}>
                <div
                  className={classNames('video', {
                    'padding-right-15': (i + 1) % 3 !== 0,
                  })}
                >
                  <div className="top border-radius-5">
                    <img src={temJpg} alt="" />
                  </div>
                  <div className="middle">{item.title}</div>
                  <div className="bottom">浏览量，时间</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
