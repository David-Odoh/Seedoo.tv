import React, { Component } from 'react';

import './aboutUs.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import Footer from '../footer/footer';
import About from '../../components/AboutUs/aboutUs';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="About Us"></TitleBar>
                <About></About>
                {/*<Footer></Footer>*/}
            </div>
        )
    }
}
