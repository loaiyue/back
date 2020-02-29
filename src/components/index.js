import React from 'react';
import {Layout, Menu} from 'antd';
import {BrowserRouter,Route} from "react-router-dom"
const client_height=document.documentElement.clientHeight;
const {Header, Content} = Layout;


class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">活动页</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: client_height-64}}>
                        <BrowserRouter>
                            <div>
                                <Route path="/" exact render={()=><div>home</div>}></Route>
                                <Route path="/detail" exact render={()=><div>detail</div>}></Route>
                            </div>
                        </BrowserRouter>
                    </div>
                </Content>
            </Layout>
        )
    }

}

export default App;

