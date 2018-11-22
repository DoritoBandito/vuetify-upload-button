<template>
  <div
    class="upload-btn"
  > 
    <input
      :id="id"
      type="file"
      :name="name"
      :accept="accept"
      v-on:change="fileChanged"
      :multiple="multiple"
    />
    <label
      v-if="ripple"
      :id="`label${id}`"
      :for="id"
      :class="`v-btn ${classes}${color} upload-btn`"
      v-ripple
    >
      <slot name="icon-left"></slot>
      {{ icon ? '' : title }}
      <slot name="icon"></slot>
    </label>
    <label
      v-else
      :id="`label${id}`"
      :for="id"
      :class="`v-btn ${classes}${color} upload-btn`"
    >
      <slot name="icon-left"></slot>
      {{ icon ? '' : title }}
      <slot name="icon"></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'upload-btn',
    props: {
      accept: {
        default: '*',
        type: String
      },
      block: {
        default: false,
        type: Boolean
      },
      depressed: {
        default: false,
        type: Boolean
      },
      fileChangedCallback: {
        default: undefined,
        type: Function
      },
      color: {
        default: 'primary',
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      flat: {
        default: false,
        type: Boolean
      },
      hover: {
        default: true,
        type: Boolean
      },
      icon: {
        default: false,
        type: Boolean
      },
      large: {
        default: false,
        type: Boolean
      },
      loading: {
        default: false,
        type: Boolean
      },
      multiple: {
        default: false,
        type: Boolean
      },
      name: {
        default: 'uploadFile',
        type: String
      },
      outline: {
        default: false,
        type: Boolean
      },
      ripple: {
        default: true,
        type: Boolean
      },
      round: {
        default: false,
        type: Boolean
      },
      small: {
        default: false,
        type: Boolean
      },
      title: {
        default: 'Upload',
        type: String
      },
      uniqueId: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      id () {
        return this.uniqueId ? `${this._uid}uploadFile` : 'uploadFile'
      },
      classes () {
        const classes = {
          'v-btn--block': this.block,
          'v-btn--flat': this.flat,
          'upload-btn-hover': this.hover,
          'v-btn--icon': this.icon,
          'v-btn--large': this.large,
          'v-btn--loading': this.loading,
          'v-btn--outline': this.outline,
          'v-btn--round': this.round,
          'v-btn--small': this.small,
          'v-btn--disabled': this.disabled,
          'v-btn--depressed': this.depressed
        }

        let classString = "";
        for (let key in classes) {
          if (classes[key]) {
            classString += `${key} `
          }
        }
        return classString;
      }
    },
    methods: {
      fileChanged (e) {
        if (e) {
          if (this.fileChangedCallback) {
            if (e.target.files) {
              if (!this.multiple && e.target.files[0]) {
                this.fileChangedCallback(e.target.files[0]);
              } else if (this.multiple) {
                this.fileChangedCallback(e.target.files);
              } else {
                this.fileChangedCallback(null);
              }
            } else {
              this.fileChangedCallback(null);
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .upload-btn {
    padding-left: 16px;
    padding-right: 16px;
  }

  .upload-btn input[type=file] {
    position: absolute;
    height: 0.1px;
    width: 0.1px;
    overflow: hidden;
    opacity: 0;
    z-index: -1;
  }

  .upload-btn-hover {
    cursor: pointer;
  }
</style>