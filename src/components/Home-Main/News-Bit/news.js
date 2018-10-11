import React, { Component } from 'react';
import { connect } from 'react-redux';

import './news.css';
import Tile from '../../../UI-Helpers/tile/tile';

class news extends Component {
    render() {
        return (
            <div className="news-bits">
                <h3>News Bit</h3>
                <div className="tiles">
                    {this.props.news.map(nws => (
                        <div key={nws.id}>
                            <Tile tileImg={nws.newsImageUrl}
                                tileTitle={nws.newsTitle}
                                tileSum={nws.newsSummary}
                                btnTitle="Read More"></Tile>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.NB.newsBits
    };
};

export default connect(mapStateToProps)(news);
