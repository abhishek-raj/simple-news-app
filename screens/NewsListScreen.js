import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/common/Button';

class NewsListScreen extends Component {
	render() {
		return (
			<View>
				<Text>NewsListScreen</Text>
				<Text>NewsListScreen</Text>
				<Text>NewsListScreen</Text>
				<Text>NewsListScreen</Text>
				<Text>NewsListScreen</Text>
				<Button><Text> Click me</Text> </Button>
			</View>
		);
	}
}

export default NewsListScreen;