import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { observer, inject } from "mobx-react";

@inject("counterStore")
@observer
export default class Counter extends Component {

    add = (x) => {
        this.props.counterStore.count += x;
    }

    subtract = (x) => {
        this.props.counterStore.count -= x;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50 }}>
                    Count: {this.props.counterStore.count}
                </Text>
                <View style={styles.buttons}>
                    <Button onPress={e => this.props.counterStore.increment()}
                        title="increment" />
                    <Button onPress={e => this.props.counterStore.decrement()}
                        title="decrement" />
                    <Button onPress={e => this.add(5)} title="+5" />
                    <Button onPress={e => this.subtract(5)} title="-5" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttons: {
        height: 200,
        width: 200,
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});