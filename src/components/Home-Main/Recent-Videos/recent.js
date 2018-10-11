import React, { Component } from 'react';
import { connect } from 'react-redux';

import './recent.css';
import Tile from '../../../UI-Helpers/tile/tile';

class recent extends Component {
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
        return (
            <div className="recent">
                <h3>Recent Videos</h3>
                <div className="tiles">
                    {this.props.videos.map(video => (
                        <div key={video.id}>
                            <Tile tileImg={video.videoImageUrl}
                                tileTitle={video.videoTitle}
                                tileSum={video.videoSummary}
                                btnTitle="Watch"></Tile>
                        </div>
                    ))}
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