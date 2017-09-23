import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import MultiSelectItem from './MultiSelectItem';

class MultiSelect extends Component {

	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(["Hi","hi1"]);
	}

	renderRow() {
		return <MultiSelectItem />;
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

export default MultiSelect;