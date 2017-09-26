import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

class NewsScreen extends Component {
	render() {
		console.log(this.props.navigation.state.params.uri);
		return (
				<WebView source={{uri: this.props.navigation.state.params.uri }} style={{marginTop: 0}} />
		);
	}
}

export default NewsScreen;