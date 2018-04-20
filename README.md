# vuetify-upload-button

A Vue component for Vuetify.

This component is a file upload input with the base functionality of a Vuetify button.

## Installation

```js
npm i vuetify-upload-button
```

### Browser

Include the script file, then install the component with `Vue.use(UploadButton);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vuetify-upload-button/dist/upload-button.min.js"></script>
<script type="text/javascript">
  Vue.use(UploadButton);
</script>
```

### Module

```js
  import UploadButton from 'vuetify-upload-button';

  export default {
    components: {
      'upload-btn': UploadButton
    }
  }
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<upload-btn></upload-btn>
```

## Props

You can use the following props

| Name          | Description   | Type  | Default |
| ------------- |---------------| -----:| -----:|
| block         | block         | bool  | false |
| fileChangedCallback | callback for when a file is selected, returns a File object | function | undefined |
| color | vuetify color, e.g. 'primary' | string | 'primary' |
| disabled | sets disabled property for input/button | bool | false |
| flat | sets button flat | bool | false |
| hover | button has hoverable effect | bool | true |
| icon | button is icon button | bool | false |
| large | button is large | bool | false |
| loading | loading state for button | bool | false |
| outline | button is outline | bool | false |
| ripple | button has ripple effect | bool | true |
| round | button is round | bool | false |
| small | button is small | bool | false |
| title | text of button | string | 'Upload' |

