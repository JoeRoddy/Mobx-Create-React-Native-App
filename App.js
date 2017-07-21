import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "mobx-react";
import Counter from './app/components/Counter';
import stores from "./app/stores";

export default class App extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <Provider {...stores}>
        <Counter />
      </Provider>
    );
  }
}

