// node modules
import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// local modules
import Navigation from '../Navigation/Navigation';
import LandingPageHeader from '../../pages/LandingPageHeader';
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
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {!isAuthenticated ? (
            <LandingPageHeader />
          ) : collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggleClick} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggleClick} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: isAuthenticated ? '24px 16px' : '',
            padding: isAuthenticated ? 24 : 0,
            boxSizing: 'border-box'
          }}
        >
          {props.children}
        </Content>
        {/* <Footer style={{ position: 'relative' }}> */}
        <div style={{ position: 'relative' }}>
          <h3
            style={{
              bottom: 30,
              left: '50%',
              position: 'absolute',
              zIndex: 3,
              color: 'white'
            }}
          >
            Bill tracker ©2020 Created by Szymon Oleszek
          </h3>
          <svg
            style={{ position: 'absolute', zIndex: 2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#40a9ff"
              fillOpacity="1"
              d="M0,224L120,202.7C240,181,480,139,720,128C960,117,1200,139,1320,149.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* </Footer> */}
      </Layout>
    </>
  );
};

export default AppContainer;
