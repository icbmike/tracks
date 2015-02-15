/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="track">
				<h2>{this.props.title}</h2>
			</div>
		);
	}
});