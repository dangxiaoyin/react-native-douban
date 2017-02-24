import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var Icon = require("./left_icon");

var Header = React.createClass({
  render: function() {

    // 获取obj对象，包括 backName（按钮名称），barTitle
    var headerContent = this.props.initObj;

    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.left_btn} onPress={this._pop}>
          <Icon/>
          <Text style={styles.btn_text}>{headerContent.backName}</Text>
        </TouchableOpacity>
        <View style={styles.title_container}>
          <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
        </View>
      </View>
    );
  },
  //返回按钮事件处理方法
  _pop: function(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor : "#3497ff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  left_icon: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center"
  },
  left_btn: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  btn_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },
  title_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 18,
    width:200
  }
});

module.exports = Header;
