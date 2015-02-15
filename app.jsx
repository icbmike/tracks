/** @jsx React.DOM */

var React = require('react/addons'),
		_ = require('lodash');

var Track = require('./components/track.jsx');

module.exports = React.createClass({
	
	getInitialState: function () {
	    return {
	        tracks: [{title:'Track 1'}]
	    };
	},
	addTrack: function(){
		var newTracks = React.addons.update(this.state.tracks, {
			$push : [{title: 'New Track'}]

		});

		this.setState({tracks: newTracks});
	},
	render: function(){
		var tracks = this.state.tracks.map(function(track){
			return <Track title={track.title} />
		});

		return (
			<div>
				{tracks}
				<button onClick={this.addTrack}>Add Track</button>
			</div>
		);
	}
});