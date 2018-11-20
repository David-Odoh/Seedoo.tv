import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import './news.css';
import Tile from '../../../UI-Helpers/tile/tile';
import Loading from '../../../img/loading.gif';

class news extends Component {
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

    render() {
        const { currentPage, itemsPerPage } = this.state;

        // Logic for displaying current items
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = this.props.news.slice(indexOfFirstItem, indexOfLastItem);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.news.length / itemsPerPage); i++) {
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
            if (!this.props.news.length) {
                return (
                    <div className="loading">
                        <img src={Loading} alt="" />
                    </div>
                )
            }
        }

        return (
            <div className="news-bits">
                <h3>News Bit</h3>
                {loadingIcon()}
                <div className="tiles">
                    {currentItems.map(nws => (
                        <div key={nws.post.id}>
                            <Tile tileImg={"http://tv.seedoo.tv/news/upload/" + nws.post.fileurl}
                                tileTitle={nws.post.title}
                                tileSum={`${nws.post.body}...`}
                                btnTitle="Read More"></Tile>
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
        news: state.NB.newsBits
    };
};

export default connect(mapStateToProps)(news);
