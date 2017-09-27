import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { MultiSelect, Header, Spinner } from '../components/common';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import{ checkSources, getSources, setSources } from '../actions';

class SourcesScreen extends Component {
	
	static navigationOptions = {
    	title: 'Welcome',
  	};

	componentWillMount() {
		this.props.checkSources();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.sources != '' && nextProps.sources != undefined && nextProps.sources != null) {
			this.props.navigation.navigate('newsFlow');
		} else if(nextProps.sourcesNotFound) {
			this.props.getSources();
		}
	}

	onSubmit = (data) => {
		this.props.setSources(data);
	}

	render() {
		if(this.props.sourcesNotFound === undefined ) {
			console.log("Inside Apploading");
			return <AppLoading />;
		}

		if(this.props.showLoading) {
			console.log("Inside Spinner");
			return <Spinner />;
		}

		let data = [];
		for(source of this.props.allSources) {
			data.push({
				id: source.id,
				description: source.description,
				name: source.name
			});
		}
		console.log("Inside MultiSelect");
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

const mapStateToProps = state => {
	return {
		sourcesNotFound: state.news.sourcesNotFound,
		allSources: state.news.allSources,
		sources: state.news.sources,
		errorMessage: state.news.errorMessage,
		showLoading: state.news.showLoading
	};
};

export default connect(mapStateToProps, { checkSources, getSources, setSources })(SourcesScreen);