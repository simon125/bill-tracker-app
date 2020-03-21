// node modules
import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// local modules
import Navigation from '../Navigation/Navigation';
import './AppContainer.css';
const { Header, Content } = Layout;

const AppContainer = (props: any) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Navigation collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggleClick
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </>
  );
};

export default AppContainer;
