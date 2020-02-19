import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, FormLabel } from "react-bootstrap";

class Gift extends React.Component {

  state = {
    person: "",
    present: ""
  }

  onPersonChange = (e) => {
    this.setState({
      person: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl className="input-person" onChange={this.onPersonChange}/>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Gift;