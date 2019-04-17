import React, { Component } from 'react'
import moment from 'moment';
import {DateTimePicker} from '@atlaskit/datetime-picker';

const standardDateFormat = 'DD/MM/YYYY HH:mm:ss';

class DateTimeSelector extends Component {

    handlePublishDateChange = (value) => {
        this.props.onChange(moment(value, moment.ISO_8601).format(standardDateFormat))
    }

    render() {

        return (
            <DateTimePicker 
                hideIcon="false"
                value={this.props.value != null ? moment(this.props.value, standardDateFormat).toISOString() : ''}
                onChange={this.handlePublishDateChange}
                dateFormat="DD/MM/YYYY"
                timeIsEditable={true}
                times={["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" ]}
            />  
        )
    }
}

export default DateTimeSelector;