import React, { Component } from 'react'

class ImageFormInput extends Component {
    render() {
        const handleChange = (e) => {
            let fileReader = new FileReader();
            let fileName = e.target.files[0].name;
            fileReader.onloadend = () => {
                this.props.onChange(fileName, fileReader.result);
            };
            fileReader.readAsArrayBuffer(e.target.files[0]);
        }

        return (
            <input className="image-uploader" type='file' onChange={handleChange} />
        );
    }
}

export default ImageFormInput;