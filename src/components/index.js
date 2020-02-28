import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content} = Layout;

function App() {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">活动页</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
                    Content
                </div>
            </Content>
        </Layout>
    );
}

export default App;

