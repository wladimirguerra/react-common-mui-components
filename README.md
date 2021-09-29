# react-common-mui-components

> React MaterialUI common components

[![NPM](https://img.shields.io/npm/v/react-common-mui-components.svg)](https://www.npmjs.com/package/react-common-mui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-blueviolet)](https://prettier.io)

## Install

This library requires [MaterialUI v5](https://mui.com). Please follow
its installation gide to proper setup.

To install this library run:

```bash
npm install --save react-common-mui-components
```
Or

```bash
yarn add react-common-mui-components
```
## Usage

```tsx
import React, { Component } from 'react'

import { MyComponent } from 'react-common-mui-components'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Components

### `ConfirmDialog`

This is a basic confirm dialog that show up a
MaterialUI Dialog with a title, message, and
two buttons to confirm or cancel an action.

#### `useConfirmDialog`

This hook provides a way to show the dialog with an imperative call.

```tsx
import { useConfirmDialog } from "react-common-mui-components"
import { deleteRecords } from "somewere"

const Page = () => {
  const {Dialog, showDialog} = useConfirmDialog();

  function handleDelete(){
    showDialog(
      "Delete All Records",
      "Are you sure you want to delete these records?",
      ()=> deleteRecords(),
      {
        labels: {
          yes: {
            label: "Yes!",
            color: "error"
          },
          no: {
            label: "No!"
          }
        }
      }
    )
  }

  return (
    <div>
      <Button onClick={handleDelete}>Delete All Records</Button>
      ...
      {/* Don't forget to place the Dialog in the tree*/}
      <Dialog/>
    </div>
  )
}
```


## License

MIT © [Wladimir Guerra](https://github.com/wladimirguerra)
