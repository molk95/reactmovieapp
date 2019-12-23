import React from 'react'

export default class SearchMovie extends React.Component {
    render() {
        return (
            <div class="name-filter">
                <input placeholder="search..." class="name-filter-text" onChange={this.props.search} />
            </div>
        )
    }
}