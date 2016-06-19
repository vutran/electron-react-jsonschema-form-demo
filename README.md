# Electron React JSON Schema Form Demo

Quick demo on how to use [React JSONSchema Form](https://github.com/mozilla-services/react-jsonschema-form) with [Electron](https://github.com/electron/electron).

### Usage

````js
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
````

### Lint

````bash
$ npm run lint
````

### Watch Files

````bash
$ npm run watch
````

### Dev

````bash
$ npm run dev
````

### Build

````bash
$ npm run build
````
