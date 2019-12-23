import React from 'react'

export default class Rating extends React.Component {
  render() {
    return (
      <div>
        <span >
          {'★'.repeat(this.props.movieRating).padEnd(5,'☆')}</span>
      </div>
    )
  }
}