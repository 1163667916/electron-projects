/* eslint-disable react-hooks/exhaustive-deps */
import { FireOutlined, FrownOutlined, RocketOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const loader = () => {
  return {};
};

export const action = () => {
  return {};
};

function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/upload']);

  const navList = [
    {
      label: '首页',
      key: '/',
      icon: <FireOutlined />,
    },
    {
      label: '英雄列表',
      key: '/champions',
      icon: <FrownOutlined />,
    },
    {
      label: '英雄数据',
      key: '/champions-data',
      icon: <RocketOutlined />,
    },
    {
      label: '上传',
      key: '/upload',
      icon: <RocketOutlined />,
    },
    {
      label: '文件查看器',
      key: '/file-viewer',
      icon: <RocketOutlined />,
    },
  ];

  useEffect(() => {
    navigate(selectedKeys[0]);
  }, []);

  return (
    <Layout className="layout fw fh">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={navList}
          onSelect={({ selectedKeys: keys, key }) => {
            if (location.pathname === key) return;
            setSelectedKeys(keys);
            navigate(key);
          }}
        />
      </Header>
      <Content className="overflow-scroll-y" style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="margin-vertical-15">
          <Outlet />
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
}

export default Root;
