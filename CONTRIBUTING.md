# Contributing to the library

## Source Code Organization

###Rules
- All the components source code must be within `./src` folder.
- Each component must be in its own folder.
- The component folder and source file must have the same name of the component.
Eg: `./src/ConfirmDialog/ConfirmDialog.tsx`
- The component must be exported as a member, and as a default exported object.
- An `index.ts` file in each folder must export the default component and all member.
- The `index.ts` file must also export any component utilities.
