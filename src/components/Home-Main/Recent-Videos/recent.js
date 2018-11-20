import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import './recent.css';
import VideoList from '../../../UI-Helpers/video-list/videoList';
import Loading from '../../../img/loading.gif';

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
        const currentItems = this.props.videos.slice(indexOfFirstItem, indexOfLastItem);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.videos.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (number < 10) {
                return (
                    <li key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </li>
                );
            }
        });

        const loadingIcon = () => {
            if (!this.props.videos.length) {
                return (
                    <div className="loading">
                        <img src={Loading} alt="" />
                    </div>
                )
            }
        }

        return (
            <div className="recent">
                <h3>Recent Videos</h3>
                {loadingIcon()}
                <div className="tiles">
                    {currentItems.map(video => (
                        <div key={video.post.id}>
                            <VideoList
                                tileImg={"http://tv.seedoo.tv/cms/siteupload/" + video.post.coverurl}
                                tileVid={"http://tv.seedoo.tv/cms/siteupload/" + video.post.videourl}
                                tileTitle={video.post.title}
                                tileSum="Pls subscribe after watching"
                                tileViews={video.post.views}
                                btnTitle="Watch Now"></VideoList>
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