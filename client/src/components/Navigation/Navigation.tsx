// node modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import {
  ExportOutlined,
  SettingOutlined,
  DashboardOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  BarChartOutlined,
  CalendarOutlined
} from '@ant-design/icons';
// local modules

const { Sider } = Layout;

interface NavigationProps {
  collapsed: boolean;
}

const Navigation = (props: NavigationProps) => {
  const { collapsed } = props;
  return (
    <>
      <Sider
        style={{ minHeight: '100vh' }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
          <Menu.Item key="/">
            <NavLink to="/">
              <DashboardOutlined />
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/add-bill">
            <NavLink to="/add-bill">
              <FileAddOutlined />
              <span>Add bill</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/bills">
            <NavLink to="/bills">
              <FileSearchOutlined />
              <span>Bills</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/calendar">
            <NavLink to="/calendar">
              <CalendarOutlined />
              <span>Calendar</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/reports">
            <NavLink to="/reports">
              <BarChartOutlined />
              <span>Reports</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/settings">
            <NavLink to="/settings">
              <SettingOutlined />
              <span>Settings</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/404">
            <NavLink to="/404">
              <ExportOutlined />
              <span>Log-out</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Navigation;
