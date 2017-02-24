/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

var Navigation = require("./ios_views/common/navigation");
var BookList = require("./ios_views/book/book_list");
var MovieList = require("./ios_views/movie/movie_list");

// 隐藏状态栏
StatusBar.setHidden(false);

// TabBarIOS管理两个模块：图书、电影
var DoubanProject = React.createClass ({
  getInitialState: function() {
    return {
      selectedTab:"图书"
    };
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
        title="图书"
        selected={this.state.selectedTab==="图书"}
        onPress={() => {
          this.setState ({
            selectedTab: "图书"
          })
        }}
        // image!book
        icon={require("./book.png")}>
        <Navigation component={BookList}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        title="电影"
        selected={this.state.selectedTab==="电影"}
        onPress={() => {
          this.setState ({
            selectedTab: "电影"
          })
        }}
        // image!movie
        icon={require("./movie.png")}>
        <Navigation component={MovieList}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        title="动态"
        selected={this.state.selectedTab==="动态"}
        onPress={() => {
          this.setState ({
            selectedTab: "动态"
          })
        }}
        // image!book
        icon={require("./book.png")}>
          <View style={{backgroundColor:"cyan",flex:1}}></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        title="我的"
        selected={this.state.selectedTab==="我的"}
        onPress={() => {
          this.setState ({
            selectedTab: "我的"
          })
        }}
        // image!movie
        icon={require("./movie.png")}>
          <View style={{backgroundColor:"yellow",flex:1}}></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});



AppRegistry.registerComponent('DoubanProject', () => DoubanProject);
