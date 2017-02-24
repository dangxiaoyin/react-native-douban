/*
工具类
*/


import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions, //用于获取设备屏幕的宽高
  ActivityIndicator
} from 'react-native';


var Util = {
  //屏幕尺寸
  windowSize: {
    width: Dimensions.get("window").width,
    height:Dimensions.get("window").height
  },

  getRequest: function(url,successCallback, failCallback) {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => successCallback(responseData))
    .catch((error) => failCallback(error));
  },

// loading效果
  loading:<ActivityIndicator style={{marginTop: 200}}/>
}


module.exports = Util;
