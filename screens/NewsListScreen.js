import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { Button } from '../components/common';
import NewsItem from '../components/NewsItem';

class NewsListScreen extends Component {
	componentWillMount() {

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		
		this.dataSource = ds.cloneWithRows([{
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		},
		{
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}, {
			author: 'Author1',
			description: 'Description1',
			title: 'title1',
			url: 'google.com',
			urlToImage: 'https://via.placeholder.com/50x50',
			publishedAt: '12312413'
		}]);

	}

	renderRow = (news) => {
		return (
			<NewsItem news={news} />
		);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<ListView
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

export default NewsListScreen;