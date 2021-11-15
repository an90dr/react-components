<h3 align=center style="padding-bottom:10px;border-bottom: 1px solid;">✔React components created for public use for free✔</h3>

# ✨ Features
- [ x ] 📦 Modal Component
- [ ]   🔍 👨🏻‍💻 👨🏻‍💻 ... More Components will be added soon ...

# 🤘 How to Use
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
