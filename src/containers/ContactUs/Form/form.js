import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Animated } from "react-animated-css";

import './form.css';
import { addMessage } from '../../../actions/messages'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    renderInputField(field) {

        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''}`

        return (
            <div className={className}>
                {/* <label>{field.myLabel}</label> */}
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className="error animated bounceInLeft">
                        {field.meta.touched ? field.meta.error : ''}
                    </div>
                </Animated>
                <input
                    type="text"
                    placeholder={field.myPlaceholder}
                    {...field.input}
                />

            </div>
        )
    }

    renderTextareaField(field) {

        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''}`

        return (
            <div className={className}>
                {/* <label>{field.myLabel}</label> */}
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className="error animated bounceIn">
                        {field.meta.touched ? field.meta.error : ''}
                    </div>
                </Animated>
                <textarea
                    placeholder={field.myPlaceholder}
                    {...field.input}
                ></textarea>

            </div>
        )
    }

    onSubmit(values) {
        this.props.addMessage(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="bg-cover">
                <div className="Form row">
                    <div className="left">
                        <span style={{ color: "#fff" }}>See</span><span style={{ color: "#01d202" }}>doo</span>
                    </div>
                    <div className="right">
                        <div className="top">
                            <h1>Leave Us a Message</h1>
                        </div>
                        <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>

                            <div className="name-email">
                                <Field
                                    className="form-field"
                                    myLabel="Name"
                                    myPlaceholder="Name"
                                    name="name"
                                    component={this.renderInputField}
                                />

                                <Field
                                    myLabel="Email"
                                    name="email"
                                    myPlaceholder="Email"
                                    component={this.renderInputField}
                                />
                            </div>

                            <div className="number-message">
                                <Field
                                    myLabel="Phone Number"
                                    name="number"
                                    myPlaceholder="Phone Number"
                                    component={this.renderInputField}
                                />

                                <Field
                                    myLabel="Message"
                                    name="message"
                                    myPlaceholder="Message"
                                    component={this.renderTextareaField}
                                />
                            </div>

                            <button type="submit">Submit</button>

                        </form>
                    </div>

                </div>
            </div>
        );
    }

}

function validate(values) {
    const errors = {}

    if (!values.name) {
        errors.name = "The name is empty"
    }

    if (!values.email) {
        errors.email = "Enter you email"
    }
    if (!values.number) {
        errors.number = "Enter you number"
    }

    if (!values.message) {
        errors.message = "Enter a message"
    }
    return errors;
}


function mapStateToProps(state) {
    return {
        success: state.data
    }
}

export default reduxForm({
    validate,
    form: 'PostMessage'
})(
    connect(mapStateToProps, { addMessage })(Form)
    )