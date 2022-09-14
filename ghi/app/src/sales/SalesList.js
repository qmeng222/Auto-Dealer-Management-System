import React from 'react';


class SalesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saleColumns:[[], [], []],
        }
    }

    async componentDidMount() {
        const salesUrl = 'http://localhost:8090/api/sales/';
        const salesResponse = await fetch(salesUrl);
    
        if (salesResponse.ok) {
            const salesData = await salesResponse.json();
            this.setState({ sales: salesData.sales });
            }
        }
    
    render() {
        if (this.state.sales === undefined) {
            return null;
        }
            return (
            <div className="container">
                <h1>All Sales</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Salesperson's Name</th>
                            <th>Salesperson's Employee Number</th>
                            <th>Customer's Name</th>
                            <th>Automobile VIN</th>
                            <th>Purchase Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.sales_person.employee_number}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td>{sale.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            )
        }
    }



export default SalesList