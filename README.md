# React Context Modal (working with multiple modals)

Working with multiple modals, you can use classes or Hooks depending on your own preference.

### Install

#### Create file .npmrc
```
echo "@awesome-typescript:registry=https://npm.pkg.github.com" > .npmrc
```

#### Install npm package
```
npm install @awesome-typescript/react-router-config-breadcrumbs@1.0.0 --save --save-exact
```

### Usage

With hooks:
```tsx
import { useModalContext } from '@awesome-typescript/react-context-modal'

const ExamplePage = (props) => {
    const { showModal } = useModalContext()

    return (
        <button onClick={() => showModal(ExampleModal, { userId: 1 })}>
            Open modal
        </button>
    )
}

const ExampleModal = ({ userId, ...props }) => (
   <div>
       <h1>User ID: {userId}</h1>
       <button onClick={() => props.hideModal()}>
           Hide Modal
       </button>
   </div>
)
```

```tsx
export const App = () => (
    <ModalProvider>
        <App />
        <ModalRoot />
    </ModalProvider>
)
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
	  <div id="root"></div>
	  <div id="modal-root"></div>
  </body>
</html>
```
