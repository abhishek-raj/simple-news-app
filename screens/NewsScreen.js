import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

class NewsScreen extends Component {
	render() {
		return (
				<WebView source={{html: '<html><body>adadasd</body></html>' }} style={{marginTop: 20}} />
		);
	}
}

export default NewsScreen;