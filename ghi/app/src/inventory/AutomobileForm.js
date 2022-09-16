import React from 'react';

// Creates an automobile
class AutomobileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color:'',
            year:'',
            vin: '',
            vehicleModels: [],
        }

        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color:value})
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({year:value})
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin:value})
    }

    handleModelChange(event) {
        const value = event.target.value;
        this.setState({vehicleModel:value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.vehicleModels

        const url = 'http://localhost:8100/api/automobiles/';
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
                color: '',
                year: '',
                vin: '',
                vehicleModel:'',
            };
            this.setState(cleared);
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ vehicleModels: data.models });
        }
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add an Automobile to Inventory</h1>
                <form onSubmit={this.handleSubmit} id="create-automobile-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                    <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleYearChange} value={this.state.year} placeholder="year" required type="text" name="year" id="year" className="form-control"/>
                    <label htmlFor="year">Year</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleVinChange} value={this.state.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                    <label htmlFor="vin">VIN</label>
                </div>
                <div className="form-floating mb-3">
                    <select onChange={this.handleModelChange} value={this.state.model} placeholder="Vehicle_model" required type="text" name="vehicle_model" id="vehicle_model" className="form-control">
                    <option value="">Choose a Vehicle Model</option>
                    {this.state.vehicleModels.map(model => {
                        return(
                            <option key={model.id} value={model.id}>{model.name}</option>
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


export default AutomobileForm