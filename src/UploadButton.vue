<template>
  <div
    class="upload-btn"
  >
    <input
      :id="`${_uid}uploadFile`"
      ref="uploadFile"
      type="file"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="fileChanged"
    >
    <label
      :id="`label${_uid + 'uploadFile'}`"
      v-ripple="ripple"
      :for="`${_uid}uploadFile`"
      :class="`v-btn ${classes}${color} ${labelClass} upload-btn`"
      :style="{ maxWidth, width: fixedWidth || 'auto' }"
    >
      <div class="v-btn__content" style="max-width: 100%">
        <slot name="icon-left" />
        <span>
          {{ icon ? '' : noTitleUpdate ? title : uTitle || title }}
        </span>
        <slot name="icon" />
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: 'UploadBtn',
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
    color: {
      default: 'primary',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    fixedWidth: {
      default: null,
      type: String
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
    labelClass: {
      default: '',
      type: String
    },
    large: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    maxWidth: {
      default: '100%',
      type: String
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
    noTitleUpdate: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      uTitle: null
    }
  },
  computed: {
    classes() {
      const classes = {
        'v-btn--block': this.block,
        'v-btn--flat': this.flat,
        'upload-btn-hover': this.hover,
        'v-btn--icon': this.icon,
        'v-btn--large': this.large,
        'v-btn--loading': this.loading,
        'v-btn--outline v-btn--depressed': this.outline,
        'v-btn--round': this.round,
        'v-btn--small': this.small,
        'v-btn--disabled': this.disabled,
        'v-btn--depressed': this.depressed
      }

      // eslint-disable-next-line
      if (this.flat) this.color = ''

      let classString = ''
      for (const key in classes) {
        if (classes[key]) {
          classString += `${key} `
        }
      }
      return classString
    }
  },
  methods: {
    fileChanged(e) {
      if (e) {
        if (e.target.files.length > 0) {
          if (!this.multiple) {
            this.uTitle = e.target.files[0].name
            this.$emit('file-update', e.target.files[0])
          } else {
            let title = ''
            for (let i = 0; i < e.target.files.length; i++) {
              title += e.target.files[i].name + ', '
            }
            title = title.slice(0, title.length - 2)
            this.uTitle = title
            this.$emit('file-update', e.target.files)
          }
        } else {
          this.uTitle = null
          this.$emit('file-update')
        }
      }
    },
    clear() {
      this.$refs.uploadFile.value = ''
      this.$emit('file-update')
      this.uTitle = null
    }
  }
}
</script>

<style scoped>
.upload-btn {
  padding-left: 16px;
  padding-right: 16px;
}

.upload-btn input[type='file'] {
  position: absolute;
  height: 0.1px;
  width: 0.1px;
  overflow: hidden;
  opacity: 0;
  z-index: -1;
}

.upload-btn > .v-btn__content > span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.upload-btn-hover {
  cursor: pointer;
}
</style>
