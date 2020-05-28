// node modules
import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// local modules
import Navigation from '../Navigation/AppNavigation';
import './AppContainer.css';
const { Header, Content, Footer } = Layout;

const AppContainer = (props: any) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleClick = () => {
    setCollapsed(!collapsed);
  };
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated && <Navigation collapsed={collapsed} />}
      <Layout className="site-layout">
        {isAuthenticated && (
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              height: 40,
              position: 'fixed',
              top: 0,
              zIndex: 5,
              backgroundColor: '#fff',
              width: '100%',
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={toggleClick} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={toggleClick} />
            )}
          </Header>
        )}
        <Content
          className="site-layout-background"
          style={{
            margin: isAuthenticated ? '24px 16px' : '',
            padding: isAuthenticated ? 24 : 0,
            boxSizing: 'border-box',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </>
  );
};

export default AppContainer;
