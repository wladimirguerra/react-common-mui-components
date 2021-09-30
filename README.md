# react-common-mui-components

> React MaterialUI's common components

[![NPM](https://img.shields.io/npm/v/react-common-mui-components.svg)](https://www.npmjs.com/package/react-common-mui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-blueviolet)](https://prettier.io)

## Install

This library requires [MaterialUI v5](https://mui.com) and
[React.JS v17](https://reactjs.org).

To install this library run:

```bash
npm install --save react-common-mui-components
```
Or

```bash
yarn add react-common-mui-components
```

## Components

### `ConfirmDialog`

A basic confirm dialog that show up a
MaterialUI Dialog with a title, message, and
two buttons to confirm or cancel an action.

#### `useConfirmDialog`

A hook that provides a way to show the dialog with an imperative call.

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
