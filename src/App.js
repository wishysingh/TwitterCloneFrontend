import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreator} from 'react-redux';
import TweetList from './TweetList';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import {clickSearch} from './action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	console.log('$$$$$$$$$$$', state);
  return{
      tweets: state.searchingTweets.tweets
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onSearchClicking: (search) => dispatch(clickSearch(search))
}
}

class App extends Component 
{
	constructor() 
	{
		super();
		this.state = {
			searchQuery:''
		};
	}
	apiCall(query)
	{
		const{onSearchClicking}=this.props;
		  onSearchClicking(query);
	}
	onSearchChange(event)
	{
		this.setState(
		{
		searchQuery:event.target.value
		})
			
	}
	onSearch()
	{
		console.log(this.state.searchQuery);
		this.apiCall(this.state.searchQuery);
	}
  
	render() 
	{
		console.log(this.props.tweets.tweet ? this.props.tweets.tweet.statuses[0].text:'A');
    return (
			<div>
				<Navbar/>
		<div class="container">
		
			<div class="row">
				<div class="col-sm-3">
				</div>
				<div class="col-sm-6">
					<div class="panel panel-info">
					
						<SearchBox search={this.onSearch.bind(this)} sQ={this.onSearchChange.bind(this)}/>
						
						<div>
						{this.props.tweets.tweet ?
						<TweetList mess={this.props.tweets.tweet ? this.props.tweets.tweet.statuses:[]}/>:
						<div />
					}
						</div>
					</div>
				</div>

				<div class="col-sm-3">
				</div>
			</div>
			
		</div>
		</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
