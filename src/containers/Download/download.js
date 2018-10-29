import React, { Component } from 'react';

import './download.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import Footer from '../footer/footer';
import DownLoadComp from '../../components/Download/download'

export default class Download extends Component {
    render() {
        return (
            <div className='download'>
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="Download"></TitleBar>
                <DownLoadComp></DownLoadComp>
            </div>
        )
    }
}
