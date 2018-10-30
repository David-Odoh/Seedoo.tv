import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';

import './news.css';
import Tile from '../../../UI-Helpers/tile/tile';

class news extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            perPage: 10,
            pageCount: 0
        }
    }

    // handlePageClick = (data) => {
    //     let selected = data.selected;
    //     let offset = Math.ceil(selected * this.props.perPage);

    //     this.setState({ offset: offset }, () => {
    //         this.loadCommentsFromServer();
    //     });
    // };

    render() {
        return (
            <div className="news-bits">
                <h3>News Bit</h3>
                <div className="tiles">
                    {/*{this.setstate({ pageCount: Math.ceil(this.props.news.meta.total_count / this.props.news.meta.limit) })}*/}
                    {this.props.news.map(nws => (
                        <div key={nws.post.id}>
                            <Tile tileImg={"http://tv.seedoo.tv/news/upload/" + nws.post.fileurl}
                                tileTitle={nws.post.title}
                                tileSum={nws.post.body}
                                btnTitle="Read More"></Tile>
                        </div>
                    ))}
                </div>
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
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
