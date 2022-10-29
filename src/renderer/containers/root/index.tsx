import { FireOutlined, FrownOutlined, RocketOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ChampionsContainer from '../champions';

const Root = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['index']);

  const navList = [
    {
      label: '首页',
      key: 'index',
      icon: <FireOutlined />,
    },
    {
      label: '英雄列表',
      key: 'champions',
      icon: <FrownOutlined />,
    },
    {
      label: '英雄数据',
      key: 'champions-data',
      icon: <RocketOutlined />,
    },
  ];

  return (
    <Layout className="layout fw fh">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={navList}
          onSelect={({ selectedKeys: keys }) => {
            setSelectedKeys(keys);
          }}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Router>
          <Routes>
            <Route path="/index" element={<span>111</span>} />
            <Route path="/champions" element={<ChampionsContainer />} />
            <Route path="/champions-data" element={<ChampionsContainer />} />
          </Routes>
        </Router>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Root;
