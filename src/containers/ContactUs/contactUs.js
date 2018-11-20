import React, { Component } from 'react';

import './contactUs.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import Form from './Form/form';

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="Contact Us"></TitleBar>
                <Form></Form>
            </div>
        )
    }
}
