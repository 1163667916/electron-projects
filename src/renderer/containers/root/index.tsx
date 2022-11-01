/* eslint-disable react-hooks/exhaustive-deps */
import { FireOutlined, FrownOutlined, RocketOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/champions']);

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
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Outlet />
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default Root;
