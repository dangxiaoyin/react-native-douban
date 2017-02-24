import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView
} from 'react-native';


var Util = require("./../common/util");
var SearchBar = require("./../common/searchBar");
var ServiceURL = require("./../common/service");
var BookItem = require("./book_item");
var BookDetail = require("./book_detail");

var BookList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow!==newRow
    });
    return {
      dataSource: ds,
      show: false,
      keywords: "React"
    };
  },

  _changeText: function(text) {
    this.setState({
      keywords: text
    });
  },

  _searchPress: function() {
    this.getData();
  },

  getData: function() {
    this.setState({
      show: false
    });
    // 请求数据
    var that = this;
    //https://api.douban.com/v2/book/search?count=20&q=react
    var url = ServiceURL.book_search + "?count=20&q=" + this.state.keywords;
    Util.getRequest(url,function(data){
      // 请求成功回调

      if (!data.books || data.books.length == 0) {
        return alert("未查询到相关书籍")
      }
      var ds = new ListView.DataSource({
        rowHasChanged: (oldRow, newRow) => oldRow!==newRow
      });
      that.setState({
        show: true,
        dataSource: ds.cloneWithRows(data.books)
      });

    }, function(error){
      // 请求失败回调
      alert(error);
    })
  },

_showDetail: function(bookID) {
  var detailRoute = {
    component: BookDetail,
    passProps: {
      bookID: bookID
    }
  }
  this.props.navigator.push(detailRoute);
},
  render: function() {
    return (
      <ScrollView>
        <SearchBar
        placeholder="请输入图书的名称"
        onPress={this._searchPress}
        onChangeText={this._changeText}/>
        {
          //请求数据时显示loading 数据请求成功后显示ListView
          this.state.show ?
          <ListView
            dataSource={this.state.dataSource}
            initialListSize={10}
            renderRow={this._renderRow}
            renderSeparator={this._renderSeparator}/>
          : Util.loading
        }
      </ScrollView>
    );
  },
  componentDidMount: function() {
    this.getData();
  },
  _renderRow: function(book) {
    return <BookItem book={book} onPress={this._showDetail.bind(this, book.id)}/>
  },
  _renderSeparator: function(sectionID:number, rowID:number) {
    var style = {
      height: 1,
      backgroundColor: "#CCCCCC"
    }
    return <View style={style} key={sectionID+rowID}/>
  }
});

var styles = StyleSheet.create({

});

module.exports = BookList;
