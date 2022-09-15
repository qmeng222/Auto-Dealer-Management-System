import React from 'react';


class SalesHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesPersons: [],
            sales: [],
            salesPerson: '',
        }

    }

    async handleSalesPersonChange(event) {
        const employee_number = event.target.value;

        const salesPersonUrl = `http://localhost:8090/api/salesperson/${employee_number}`
        const salesPersonResponse = await fetch(salesPersonUrl)

        if (salesPersonResponse.ok) {
            const salesPersonData = await salesPersonResponse.json();
        
        this.setState({salesPersons: salesPersonData})
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
    
        if (response.ok) {
            const data = await response.json();
            this.setState({ sales: data.sales });
            }
        }
    
    render() {
        if (this.state.salesPersons === undefined) {
            return null;
        }
        console.log(this.state.salesPersons, "this state sales")
        return (
        <>
        <div className="mb-3">
          <select onChange={this.handleSalesPersonChange} value={this.state.salesPersons} required id="sales_person" name="sales_person" className="form-select">
              <option value="">Choose a Sales Person</option>
              {this.state.salesPersons.map(salesPerson => {
                  return (
                      <option key={salesPerson.employee_number} value={salesPerson.employee_number}>{salesPerson.name}</option>
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
                <th>Sale price</th>
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