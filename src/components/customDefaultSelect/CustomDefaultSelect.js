import React, { Component } from 'react';
import Select from 'react-select';

// react-select returns null when you click the cross icon on the select in the UI
// This wraps react-select and allows you to return some other value (by default the empty string)
export default class CustomDefaultSelect extends Component {

    handleChange = (selectedValue) => {
        let defaultValue = '';

        if ('defaultValue' in this.props) {
            defaultValue = this.props.defaultValue;
        }

        this.props.onChange(
            this.props.userSettingsKey, 
            selectedValue === null ? defaultValue : selectedValue.value
        );
    };

    render() {
        return <Select
            value={this.props.value}
            onChange={this.handleChange}
            options={this.props.options}
        />;
    }
}