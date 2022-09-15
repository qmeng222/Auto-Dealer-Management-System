import React from "react";

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: "",
      customerName: "",
      date: "",
      time: "",
      technician: "",
      technicians: [],
      reason: "",
    };
    // bind in constructor:
    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTechChange = this.handleTechChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // methods to update the components' state:
  handleVinChange(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }
  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ customer_name: value });
  }
  handleDateChange(event) {
    const value = event.target.value;
    this.setState({ date: value });
  }
  handleTimeChange(event) {
    const value = event.target.value;
    this.setState({ time: value });
  }
  handleTechChange(event) {
    const value = event.target.value;
    this.setState({ technician: value });
  }
  handleReasonChange(event) {
    const value = event.target.value;
    this.setState({ reason: value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.customer_name = data.customerName;
    delete data.customerName;
    delete data.technicians;
    const appointmentsUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(appointmentsUrl, fetchConfig);
    if (response.ok) {
      const newAppointment = await response.json();
      console.log(newAppointment);
      const cleared = {
        vin: "",
        customer_name: "",
        date: "",
        time: "",
        technician: "",
        reason: "",
      };
      this.setState(cleared);
    }
  }
  // load the technicians dropdown:
  async componentDidMount() {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ technicians: data.technicians });
    }
  }

  render() {
    console.log(this.state.technicians);
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a service appointment</h1>
            <form onSubmit={this.handleSubmit} id="new-shoe-form">
              <div className="form-floating mb-3">
                <input
                  value={this.state.vin}
                  onChange={this.handleVinChange}
                  placeholder="VIN"
                  required
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">VIN number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.customer_name}
                  onChange={this.handleNameChange}
                  placeholder="Customer name"
                  required
                  type="text"
                  name="customer_name"
                  id="customer_name"
                  className="form-control"
                />
                <label htmlFor="customer_name">Customer name</label>
              </div>
              <div
                className="form-floating mb-3"
                data-provide="datepicker-inline"
              >
                <input
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  placeholder="Date"
                  type="date"
                  name="date"
                  id="date"
                  className="form-control"
                />
                <label htmlFor="date">Date</label>
              </div>
              <div
                className="form-floating mb-3"
                data-provide="datepicker-inline"
              >
                <input
                  value={this.state.time}
                  onChange={this.handleTimeChange}
                  placeholder="Time"
                  type="time"
                  name="time"
                  id="time"
                  className="form-control"
                />
                <label htmlFor="time">Time</label>
              </div>
              <div className="mb-3">
                <select
                  value={this.state.technician}
                  onChange={this.handleTechChange}
                  required
                  name="technician"
                  id="technician"
                  className="form-select"
                >
                  <option value="">Choose a technician</option>
                  {this.state.technicians.map((technician) => {
                    return (
                      <option
                        key={technician.employee_number}
                        value={technician.technician_name}
                      >
                        {technician.technician_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="reason">Reason</label>
                <textarea
                  value={this.state.reason}
                  onChange={this.handleReasonChange}
                  className="form-control"
                  id="reason"
                  rows="3"
                  name="reason"
                ></textarea>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentForm;
