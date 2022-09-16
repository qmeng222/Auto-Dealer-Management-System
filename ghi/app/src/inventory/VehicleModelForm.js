import React from 'react';

// Creates a Vehicle
class VehicleModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            pictureUrl: '',
            manufacturer:'',
            manufacturers: [],
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name:value})
    }

    handlePictureChange(event) {
        const value = event.target.value;
        this.setState({pictureUrl:value})
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer:value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.picture_url = data.pictureUrl
        data.manufacturer_id = data.manufacturer
        delete data.manufacturer
        delete data.pictureUrl
        delete data.manufacturers

        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            
            const cleared = {
                name: '',
                pictureUrl: '',
                manufacturer: '',
            };
            this.setState(cleared);
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ manufacturers: data.manufacturers });
        }
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-vehicle-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handlePictureChange} value={this.state.pictureUrl} placeholder="Picture_url" required type="text" name="picture_url" id="picture_url" className="form-control"/>
                    <label htmlFor="pictureUrl">Picture URL</label>
                </div>
                <div className="form-floating mb-3">
                    <select onChange={this.handleManufacturerChange} value={this.state.manufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control">
                    <option value="">Choose a Manufacturer</option>
                    {this.state.manufacturers.map(manufacturer => {
                        return(
                            <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                        )
                    })}
                    </select>
                </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}


export default VehicleModelForm