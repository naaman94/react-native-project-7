import React, { Component } from 'react'
import { Text, View } from 'react-native'
import List from './componenets/list'
import Menu from './componenets/barMenu/Menu'

export default class App extends Component {
  state = {
    tips: [{
      _id: "5d887650a9d8ef3da535054b",
      like: 4,
      dislike: 80,
      tip: "0000000000000000",
      author: "Orayb",
      authorId: "Ranaid00099",
      dateOfPublish: "2019-05-06T08:28:14.929Z",
      __v: 0
    }, {
      _id: "5d887650a9d8ef3da535054b",
      like: 4,
      dislike: 80,
      tip: "1234567789123465798123",
      author: "Orayb",
      authorId: "Ranaid00099",
      dateOfPublish: "2019-05-06T08:28:14.929Z",
      __v: 0
    }]
  }
  render() {
    const { } = this;
    const { tips } = this.state;

    return (
      <View>
        {/* <List tips={tips} /> */}
        <Menu />
      </View>
    )
  }
}
