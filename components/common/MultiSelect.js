import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import MultiSelectItem from './MultiSelectItem';
import { Button } from './Button';

class MultiSelect extends Component {

	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		
		this.dataSource = ds.cloneWithRows(this.props.data);
		this.setState({
			dataSource: this.dataSource,
			data: this.props.data
		});
	}

	selectItem = (id) => {
		var newDataSource = [];

		for(item of this.state.data) {
			if(item.id === id && item.selected === 1) {
				newDataSource.push(
					{ ...item, selected: 0 }
				);
			} else if(item.id === id) {
				newDataSource.push(
					{ ...item, selected: 1 }
				);
			} else {
				newDataSource.push(
					{ ...item }
				);
			}
		}
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(newDataSource),
			data: newDataSource
		});
	};

	renderRow = (item) => {
		return <MultiSelectItem 
			item={item}
			selectItem={this.selectItem}
		/>;
	};

	selectedItems = (cb) => {
		var newDataSource = [];
		for(item of this.state.data) {
			if(item.selected === 1) {
				newDataSource.push(
					{ ...item }
				);
			}
		}
		cb(newDataSource);
	};

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.listViewContainer }>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow}
					/>
				</View>
				<View style={ styles.buttonContainer }>
					<Button onPress={this.selectedItems(this.props.onSubmit)} >
						<Text>
							Submit
						</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		paddingBottom: 5
	},
	listViewContainer: {
		flex: 8
	},
	buttonContainer:{
		flex: 1
	}
}

export { MultiSelect };