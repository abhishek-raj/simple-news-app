import React, { Component } from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { Button, Spinner } from '../components/common';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';
import { setSourceTab, getNewsList } from '../actions';

class NewsListScreen extends Component {
	componentWillMount() {
		const ds1 = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		
		console.log(this.props.sources);
		let sources = [];
		for(source of this.props.sources) {
			sources.push({
				id: source.id,
				description: source.description,
				name: source.name
			});
		}
		this.sourcesTabs = ds1.cloneWithRows(sources);

		this.props.setSourceTab(this.props.sources[0]);
		this.props.getNewsList(this.props.sources[0]);
	}


	componentWillReceiveProps(nextProps) {
		if(nextProps.newsList) {
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.dataSource = ds.cloneWithRows(nextProps.newsList);
		}
	}

	renderRow = (news) => {
		return (
			<TouchableOpacity onPress={() => {this.props.navigation.navigate('news',{uri:news.url})}}>
				<NewsItem news={news} />
			</TouchableOpacity>
		);
	};

	renderSourceTab = (source) => {
		return (
			<TouchableOpacity 
				onPress={() => {
					this.props.setSourceTab(source);
					this.props.getNewsList(source);
				}}
			>
				<View style={[styles.tabStyle]}>
					<Text> {source.name} </Text>
				</View>
			</TouchableOpacity>
		);
	};

	renderNewsList = () => {
		if(this.props.newsListLoading || this.props.newsList === undefined) {
			console.log("newsListLoading");
			return <Spinner />;
		}
		if(this.props.errorMessage !== '') {
			return <Text> {this.props.errorMessage} </Text>;
		}
		console.log("Done");
		return (
			<ListView
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
		);
	};

	render() {
		return (
			<View style={{flex:1}}>
				<ListView
					horizontal={true}
					dataSource={this.sourcesTabs}
					renderRow={this.renderSourceTab}
				/>
				{this.renderNewsList()}
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		sources: state.news.sources,
		newsListLoading: state.news.newListLoading,
		newsList: state.news.newsList,
		errorMessage: state.news.errorMessage,
		currentSource: state.news.currentSource
	};
};

const styles = {
	tabStyle: {
		paddingLeft: 3,
		paddingRight: 3,
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 1,
		borderColor: '#ddd'
	}
}
export default connect(mapStateToProps, { setSourceTab, getNewsList })(NewsListScreen);