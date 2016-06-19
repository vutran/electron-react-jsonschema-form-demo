import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron'; // eslint-disable-line import/no-unresolved
import Demo from 'electron-react-jsonschema-form-demo'; // eslint-disable-line import/no-unresolved

// Load schemas and data
import schema from './json/schema';
import uiSchema from './json/uiSchema';
import formData from './json/formData';

const rootNode = document.getElementById('app');

ReactDOM.render(
  <Demo
    ipcRenderer={ipcRenderer}
    schema={schema}
    uiSchema={uiSchema}
    formData={formData}
  />,
  rootNode
);
