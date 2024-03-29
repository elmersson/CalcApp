import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class CalcButton extends React.Component {

  static defaultProps = {
    onPress: function() { },
    title: "",
    color: "white",
    backgroundColor: "black",
    radius: 40,

    style: { },
  }


  render() {
    var r = this.props.radius;
    var w = this.props.radius * 2;
    var h = this.props.radius * 2;
    var bc = this.props.backgroundColor;

    return (
      <TouchableHighlight onPress={this.props.onPress}
        style={[styles.container, { width: w, height: h, borderRadius: r, backgroundColor: bc }, { ...this.props.style }]} underlayColor="#ffffff">
        <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", margin: 5, },
  text: { fontFamily:"Roboto-Thin" ,fontSize: 30, },
});
