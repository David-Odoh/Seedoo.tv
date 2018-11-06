import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import './entertainment.css';
import ListItem from '../../../UI-Helpers/list-item/listItem';
import Loading from '../../../img/loading.gif';

class Entertainment extends Component {
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
            return (
                <li key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
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
            <div className="newsComp">
                {loadingIcon()}
                <div className="tiles">
                    {console.log('Got news! ', this.props.news)}
                    {currentItems.map(nws => (
                        <div key={nws.post.id}>
                            <ListItem
                                tileImg={"http://tv.seedoo.tv/news/upload/" + nws.post.fileurl}
                                tileTitle={nws.post.title}
                                tileSum={nws.post.body}
                                tileViews={nws.post.views}
                                btnTitle="Read More"></ListItem>
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
        news: state.NB.entertainmentNews
    };
};

export default connect(mapStateToProps)(Entertainment);