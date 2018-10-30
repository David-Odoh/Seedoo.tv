import React, { Component } from 'react';

import './news.css';
import ListItem from '../../UI-Helpers/list-item/listItem';

export default class NewsComp extends Component {
    render() {
        return (
            <div className="newsComp">
                <ListItem></ListItem>
            </div>
        )
    }
}
