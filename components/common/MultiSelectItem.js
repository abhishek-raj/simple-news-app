import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './CardSection';

class MultiSelectItem extends Component {
	render() {
		
		var { id, name, description, selected } = this.props.item;
		
		return (
			<TouchableWithoutFeedback 
				onPress={() => {this.props.selectItem(id)}}
			>
				<View>
					<CardSection>
						<Text> { name } </Text>
						<Text> { (selected)?"\u2714":"" } </Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default MultiSelectItem;