import React from "react";

class ModelsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/models/";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ models: data.models });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h2 className="mt-5">
          <b>Vehicle Models</b>
        </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.models.map((model) => {
              return (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.manufacturer.name}</td>
                  <td>
                    <img
                      src={model.picture_url}
                      alt="model pic"
                      width="250"
                      height="150"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ModelsList;
