<h3 align=center style="padding-bottom:10px;border-bottom: 1px solid;">βReact components created for public use for freeβ</h3>

# β¨ Features

βπ¦ Modal Component\
βπ¦ Button Component\
π¬ Working to add more components π¨π»βπ» π¨π»βπ» β½β½β½

# π€ How to Use

## Install to your project from NPM:

```
npm install react-components-free
```

## Import to your React Component:

```
import {Modal} from 'react-components-free';
```

## Use inside your React Component:

```
  render() {
    return (
        <Modal
            title='Modal Title'
            footer={<div><button>OK</button><button>Cancel</button></div>}
            headerSeparator={true}
            footerSeparator={true}
            visibility={true}>
            <div>Modal Children Components </div>
        </Modal>
    );
  }
```
