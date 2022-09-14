import React from 'react';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            employeeNumber: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name:value})
    }

    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({employeeNumber:value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.employee_number = data.employeeNumber;
        delete data.employeeNumber

        const url = 'http://localhost:8090/api/salespersons/';
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
                employeeNumber: '',
            };
            this.setState(cleared);
        }
    }


render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new SalesPerson</h1>
                <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEmployeeNumberChange} value={this.state.employeeNumber} placeholder="employeeNumber" required type="text" name="employeeNumber" id="employeeNumber" className="form-control"/>
                    <label htmlFor="employeeNumber">Employee Number</label>
                </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}


export default SalesPersonForm