import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection } from './common'; 

class NewsItem extends Component {
	render() {
		
		var { 
			author, 
			description, 
			title, 
			url, 
			urlToImage, 
			publishedAt 
		} = this.props.news;

		return (
				<CardSection style={styles.cardSectionStyle}>
					<View style={styles.imageContainer}>
						<Image style={styles.imageStyle} source={{uri: urlToImage}}/>
					</View>
					<View style={styles.detailsContainer}>
						<Text> {title} </Text>
						<Text> {publishedAt} </Text>
					</View>
				</CardSection>
		);
	}
}

const styles = {
	cardSectionStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10	
	},
	detailsContainer: {
		flex: 2
	},
	imageStyle: {
		width: 50,
		height: 50	
	}
}
export default NewsItem;