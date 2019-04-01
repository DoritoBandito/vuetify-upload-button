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

Simple Upload button
```html
<upload-btn></upload-btn>
```

Upon file change, the Upload Button component emit a file-update event with the file or files as the argument, see the following example:
```html
<template>
  <upload-btn
    @file-update="update"
  >

  </upload-btn>
</template>

<script>
  import UploadButton from 'vuetify-upload-button'

  export default {
    methods: {
      update (file) {
        // handle file here. File will be an object.
        // If multiple prop is true, it will return an object array of files.
      }
    },
    components: {
      'upload-btn': UploadButton
    }
  }
</script>
```

Button with icon. The 'icon' slot defaults to the right:
```html
<upload-btn
  title="Button With Icon"
>
  <template slot="icon">
    <v-icon>add</v-icon>
  </template>
</upload-btn>
```

Button with left icon:
```html
<upload-btn
  title="Button With Icon"
>
  <template slot="icon-left">
    <v-icon left>add</v-icon>
  </template>
</upload-btn>
```

Button as icon
```html
<upload-btn icon>
  <template slot="icon">
    <v-icon>add</v-icon>
  </template>
</upload-btn>
```

You can clear the file input using a ref
```html
<upload-btn ref="button" title="Button" />

<button @click="$refs.button.clear()" />
```

## Props

You can use the following props

| Name          | Description   | Type  | Default |
| ------------- |---------------| -----:| -----:|
| accept        | HTML input accept attribute | string | * |
| block         | block         | bool  | false |
| depressed     | remove box shadow | bool | false |
| color | vuetify color, e.g. 'primary' | string | 'primary' |
| disabled | sets disabled property for input/button | bool | false |
| fixedWidth | sets a fixed width for the button | string | null |
| flat | sets button flat | bool | false |
| hover | button has hoverable effect | bool | true |
| icon | button is icon button | bool | false |
| labelClass | class to apply to the label such as text color | string | '' |
| large | button is large | bool | false |
| loading | loading state for button | bool | false |
| maxWidth | allows the button to grow based on filename length to a max | string | 100% |
| multiple | allows multiple files to be uploaded, returns an array instead of single object | bool | false |
| name | applies HTML name attribute | string | uploadFile |
| outline | button is outline | bool | false |
| ripple | button has ripple effect | bool | true |
| round | button is round | bool | false |
| small | button is small | bool | false |
| title | text of button | string | 'Upload' |
| noTitleUpdate | disabled dynamic updating of title | bool | false |

*Removed uniqueID as a prop because it should ALWAYS have a unique id

