import React from 'react';

class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            automobile: '',
            automobiles: [],
            customer: '',
            customers: [],
            salesPerson: '',
            salesPersons: [],
        }

        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price:value})
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile:value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer:value})
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({salesPerson:value})
    }

    async componentDidMount() {
        const autoUrl = 'http://localhost:8100/api/automobiles/'
        const autoResponse = await fetch(autoUrl)
        const customerUrl = 'http://localhost:8090/api/customers/'
        const customerResponse = await fetch(customerUrl)
        const salesPersonUrl = 'http://localhost:8090/api/salespersons/'
        const salesPersonResponse = await fetch(salesPersonUrl)

        if (customerResponse.ok && autoResponse.ok && salesPersonResponse.ok) {
            const autoData = await autoResponse.json()
            const customerData = await customerResponse.json()
            const salesPersonData = await salesPersonResponse.json()
            
            this.setState({automobiles: autoData.autos})
            this.setState({customers: customerData.customers})
            this.setState({salesPersons: salesPersonData.sales_persons})
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.sales_person = data.salesPerson
        delete data.automobiles
        delete data.customers
        delete data.salesPersons
        delete data.salesPerson

        const url = 'http://localhost:8090/api/sales/';
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
                price: '',
                automobile: '',
                automobiles: [],
                customer: '',
                customers: [],
                salesPerson: '',
                salesPersons: [],
            };
            this.setState(cleared);
        }
    }


    render() {        
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Sale</h1>
                <form onSubmit={this.handleSubmit} id="create-sale-form">
                <div className="form-floating mb-3">
                    <select onChange={this.handleAutomobileChange} value={this.state.automobile} placeholder="Automobile" required type="text" name="automobile" id="automobile" className="form-control">
                    <option value="">Choose An Automobile</option>
                    {this.state.automobiles.map(automobile => {
                            return (
                                <option key={automobile.vin} value={automobile.vin}>{automobile.model.name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <select onChange={this.handleSalesPersonChange} value={this.state.salesPerson} placeholder="salesPerson" required type="text" name="salesPerson" id="salesPerson" className="form-control">
                        <option value="">Choose a Sales Person</option>
                        {this.state.salesPersons.map(salesPerson => {
                            return (
                                <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.employee_number}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <select onChange={this.handleCustomerChange} value={this.state.customer} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control">
                        <option value="">Choose A Customer</option>
                        {this.state.customers.map(customer => {
                            return (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handlePriceChange} value={this.state.price} placeholder="Price" required type="text" name="price" id="price" className="form-control"/>
                    <label htmlFor="price">Price</label>
                </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}


export default SalesRecordForm