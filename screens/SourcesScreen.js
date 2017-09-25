import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MultiSelect, Header } from '../components/common';

class SourcesScreen extends Component {

	onSubmit = (data) => {
		console.log(data);
	}

	render() {
		var data =  [{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		},{
			id: '1234',
			name: 'abhishek',
			description: 'Something'
		}, {
			id: '12334',
			name: 'abhishek1',
			description: 'Something1'
		}];

		return (
			<View style={styles.container}>
				<Header headerText={"Sources"} />
				<MultiSelect 
					data={data}
					onSubmit={this.onSubmit} 
				/>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
}
export default SourcesScreen;