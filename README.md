# My Button Package

[![npm version](https://img.shields.io/npm/v/my-button-package.svg)](https://www.npmjs.com/package/my-button-package)
[![license](https://img.shields.io/npm/l/my-button-package.svg)](https://github.com/yourusername/my-button-package/blob/main/LICENSE)

**My Button Package** is an npm package that provides button components with different styles for use in React applications. This package includes five different button styles: "primary", "default", "dashed", "text", and "link".

## Installation

You can install the npm package using the following command:

npm install my-button-package

## Usage

Here's an example usage of My Button Package:

```jsx
import React from 'react';
import { Button } from 'my-button-package';

const App = () => {
  return (
    <div>
      <h1>My Button Package Example</h1>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
};

export default App;
```

## Props
The "Button" component of My Button Package accepts the following props:

type: Prop used to determine the style of the button. Values: "primary", "default", "dashed", "text", "link".
License
My Button Package is licensed under the MIT License.

Contributing
If you find any issues or would like to contribute to the development, please feel free to open a pull request or issue on the GitHub repository.

Contact
You can contact me for any questions, suggestions, or feedback at: [email protected]

You can adapt this example README file to your own project and add the necessary information about your project. Remember that the README file is an important documentation piece that explains the usage, installation, props, and license of your project and can make it easier for your users to use your project.
