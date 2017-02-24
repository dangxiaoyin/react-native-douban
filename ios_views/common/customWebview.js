import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

var Header = require("./header");

var CustomWebview = React.createClass({
  render:function() {
    return (
      <View style={{backgroundColor:"white",flex:1}}>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName:this.props.backName,
            barTitle:this.props.barTitle
          }}/>
          <WebView
            startInLoadingState={true}
            contentInset={{top:-44, bottom:-120}}
            source={{url:this.props.url}}/>
      </View>
    );
  }
});

module.exports = CustomWebview;
