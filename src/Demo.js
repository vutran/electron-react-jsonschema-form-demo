import React, { Component, PropTypes } from 'react';
import Form from 'react-jsonschema-form';

const ELECTRON_REACT_JSONSCHEMA_FORM_CHANGE = 'ELECTRON_REACT_JSONSCHEMA_FORM_CHANGE';

const Demo = class Demo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.ipcRenderer.send(ELECTRON_REACT_JSONSCHEMA_FORM_CHANGE, e.formData);
  }

  render() {
    const { schema, formData } = this.props;
    return (
      <Form
        schema={schema}
        formData={formData}
        onChange={this.handleChange}
      />
    );
  }
};

Demo.propTypes = {
  ipcRenderer: PropTypes.object,
  schema: PropTypes.object,
  formData: PropTypes.object,
};

export default Demo;
