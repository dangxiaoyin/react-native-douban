import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var MovieItem = React.createClass({
  render: function() {

    var movie = this.props.movie;

    // 提取演员姓名
    var actors = [];
    for (var i in movie.casts) {
      actors.push(movie.casts[i].name);
    }

    return (
      <TouchableOpacity style={styles.item} {...this.props}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="contain" source={{uri:movie.images.medium}}/>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>名称：{movie.title}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>演员：{actors}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>评分：{movie.rating.average}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>时间：{movie.year}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>标签：{movie.genres}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});


var styles = StyleSheet.create({

  item: {
    flexDirection: "row",
    height: 120,
    padding: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 80,
    height: 110
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black"
  }
});


module.exports = MovieItem;
