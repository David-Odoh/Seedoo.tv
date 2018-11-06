import React, { Component } from 'react';
import { connect } from 'react-redux';

import './recent.css';
import Tile from '../../../UI-Helpers/tile/tile';

class recent extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            itemsPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    checkAvailability() {
        if (!this.props.videos) {
            return (
                <div>
                    No Posts
                </div>
            )
        }
    }
    render() {
        const { currentPage, itemsPerPage } = this.state;

        // Logic for displaying current items
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentTodos = this.props.videos.slice(indexOfFirstItem, indexOfLastItem);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.videos.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div className="recent">
                <h3>Recent Videos</h3>
                <div className="tiles">
                    {currentTodos.map(video => (
                        <div key={video.post.id}>
                            <Tile tileImg={"http://tv.seedoo.tv/cms/siteupload/" + video.post.coverurl}
                                tileTitle={video.post.title}
                                tileSum="Don't forget to subscribe"
                                btnTitle="Watch"></Tile>
                        </div>
                    ))}
                </div>
                <div className="bottom-pag">
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        videos: state.VH.videoHighlights
    };
};

export default connect(mapStateToProps)(recent);