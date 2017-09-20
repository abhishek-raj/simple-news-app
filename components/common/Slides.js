import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
	renderLastSlide(index) {
		if(index === this.props.data.length - 1) {
			return (
				<Button
					title="Start"
					raised
					buttonStyle={styles.buttonStyle}
					onPress={this.props.onComplete}
				/>
			);
		}
	}

	renderSlides() {
		return this.props.data.map((slide, index) => {
			return (
				<View 
					key={slide.text} 
					style={[styles.slideStyle, {backgroundColor: slide.color}]}
				>
					<Text style={styles.slideTextStyle}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		});
	}
	render() {
		return (
			<ScrollView
				horizontal
				contentContainerStyle={{flexGrow: 1}}
				style={{flex: 1}}
				pagingEnabled
				bounces={false}
			>
				{this.renderSlides()}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH,
	},
	slideTextStyle: {
		fontSize: 60,
		color: 'white',
		textAlign: 'center'
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
		marginTop: 15
	}
});
export default Slides;