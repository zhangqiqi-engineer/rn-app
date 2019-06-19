import React from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>移动护理登陆</Text>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        placeholder="用户名："
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="密码："
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="地点："
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Home');
                    }} style={styles.container}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>登陆</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        color: '#666',
        fontWeight: 'bold',
        fontSize: 30,
        textAlignVertical: 'center',
    },
    content: {
        flex: 2,
    },
    input: {
        fontSize: 20,
        width: 300,
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: 1,
    },
    container: {
        paddingTop: 20,
        alignItems: 'center',
    },
    button: {
        marginBottom: 30,
        width: 300,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 50,
    },
    buttonText: {
        padding: 12,
        color: 'white',
    },
});