import React from 'react';

class DownloadButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        fetch('/storage/' + this.props.fileName)
            .then(response => {
                if (response.ok) {
                    response.blob().then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = this.props.fileName;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                    });
                }
            });
    }

    render() {
        return (
            <button className="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" onClick={this.handleClick}>
                Download {this.props.name}
            </button>
        );
    }
}

export default DownloadButton;
