
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, BackHandler, ToastAndroid, Alert } from 'react-native';
import { Icon, SearchBar, TabBar, List, Tabs } from '@ant-design/react-native';
import Update from '../../updata'
const Item = List.Item;
const Brief = Item.Brief;

const routes = [];

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }

    //返回键
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        routes.push('blueTab');
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        if (routes.length <= 1) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                BackHandler.exitApp();
                return;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        } else {
            routes.splice(routes.length - 1, 1);
            this.setState({
                selectedTab: routes[routes.length - 1],
            });

            return true;
        }
    };


    //渲染首页 tab
    renderText = (n) => {
        const tabs2 = [
            { title: '全部护理' },
            { title: '特级护理' },
            { title: '一级护理' },
            { title: '二级护理' },
            { title: '三级护理' },
        ];
        return <Tabs tabs={tabs2} initialPage={0} tabBarPosition="top">
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <List>
                    <Item arrow="horizontal" onPress={() => { }}>
                        01 患者1
              </Item>
                    <Item arrow="horizontal" onPress={() => { }}>
                        02 患者2
              </Item>
                    <Item arrow="horizontal" onPress={() => { }}>
                        03 患者3
              </Item>
                    <Item arrow="horizontal" onPress={() => { }}>
                        04 患者4
              </Item>
                    <Item arrow="horizontal" onPress={() => { }}>
                        05 患者5
              </Item>

                </List>
            </ScrollView>
        </Tabs>;
    };
    //渲染首页
    renderContent = (pageText) => {
        switch (pageText) {
            case 'blueTab': {

                return (
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={styles.topshow}>
                            <View style={styles.content}><Text style={styles.row}>肠胃外科1病区</Text><Text style={styles.row}>陈护士</Text></View>
                            <View style={styles.content}><Text style={styles.row}>患者总数：60</Text><Text style={styles.row}>护理组：</Text><Text style={styles.row}>切换床卡</Text></View>
                        </View>

                        <View style={{ flex: 2 }}>
                            {this.renderText()}
                        </View>
                    </View>
                );
            }
            case 'redTab': {
                return <Update />
            }
            case 'greenTab': {
                return <View><Text>321</Text></View>
            }
            default: {

            }
        }
    }
    onChangeTab(tabName) {
        routes.push(tabName);

        this.setState({
            selectedTab: tabName,
        });
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    style={styles.tabFont}
                    title="首页"
                    icon={<Icon name="home" />}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    {this.renderContent('blueTab')}
                </TabBar.Item>
                <TabBar.Item
                    style={styles.tabFont}
                    icon={<Icon name="ordered-list" />}
                    title="医嘱执行"
                    badge={2}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                    {this.renderContent('redTab')}
                </TabBar.Item>
                <TabBar.Item
                    style={styles.tabFont}
                    icon={<Icon name="like" />}
                    title="药品接收"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => this.onChangeTab('greenTab')}
                >
                    {this.renderContent('greenTab')}
                </TabBar.Item>
                <TabBar.Item
                    style={styles.tabFont}
                    icon={<Icon name="user" />}
                    title="输血执行"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    {this.renderContent(4)}
                </TabBar.Item>
            </TabBar>
        );
    }
}

const styles = StyleSheet.create({
    topshow: {
        backgroundColor: '#2ECCF9',
        padding: 15,
    },
    content: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 15,
    },
    tabFont: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tabs: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#fff',
    },
});