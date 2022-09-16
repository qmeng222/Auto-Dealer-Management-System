import React from 'react';

// Looks at a Sales Person's sale history

class SalesHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesPersons: [],
            sales: [],
            salesPerson: '',
        }
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    }

    async componentDidMount() {
        const salesPersonUrl = 'http://localhost:8090/api/salespersons/'
        const salesPersonResponse = await fetch(salesPersonUrl)

        if (salesPersonResponse.ok) {
            const salesPersonData = await salesPersonResponse.json();
        
            this.setState({salesPersons: salesPersonData.sales_persons})
        }
    }

    async handleSalesPersonChange(event) {
        const value = event.target.value;
        const salesPersonRecordResponse = await fetch(`http://localhost:8090/api/salesperson/${value}/records/`)
        if (salesPersonRecordResponse.ok) {
            const salesPersonRecordData = await salesPersonRecordResponse.json();
            this.setState({sales: salesPersonRecordData.sales})
        }
    }
    
    render() {
        return (
        <>
        <div className="mb-3">
            <select onChange={this.handleSalesPersonChange} value={this.state.salesPersons} required id="salesPerson" name="salesPerson" className="form-select">
                <option value="">Choose a Sales Person</option>
                {this.state.salesPersons.map(salesPerson => {
                    return (
                        <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.employee_number}</option>
                    );
                })}
            </select>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales person</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Sale Price</th>
                </tr>
            </thead>
            <tbody>
                {this.state.sales.map(sale => {
                    return (
                    <tr key={sale.id}>
                        <td>{ sale.sales_person.name }</td>
                        <td>{ sale.customer.name }</td>
                        <td>{ sale.automobile.vin }</td>
                        <td>{ sale.price }</td>
                    </tr>
                    );
                })}  
            </tbody>
        </table>
        </>
        )
    }
}


export default SalesHistory