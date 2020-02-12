<template>
  <div>
    <input type="text"
           :className='className'
           :style='style'
           v-model="tags"
           @focus="focusfns"
           @keyup.delete="del"
           @keyup.enter='addContext'>
  </div>
</template>

<script>
export default {
  name: 'combobox',
  data () {
    return {
      tags: ''
    }
  },
  props: {
    className: {
      type: Object | String,
      default: '',
    },
    style: {
      type: Object | String,
      default: '',
    },
    value: {
      type: Array | Object | String,
      default: '',
    },
    separator: {
      type: String,
      default: ','
    }
  },
  formatValue () {

  },
  mounted () {
    if (typeof this.value !== 'string') {
      this.tags = this.value.join(this.separator)
    } else {
      this.tags = this.value
    }
  },
  methods: {
    tagTypeIsString () {
      return typeof this.tags === 'string'
    },
    addContext () {
      if (this.tagTypeIsString()) {
        if (this.separator !== ' ') {
          let tags = this.tags.split(' ')
          this.tags = tags.join(',')
        }
      }
    },
    focusfns () {
      this.tagTypeIsString() ? this.oldContext = this.tags : this.oldContext = this.tags.join(this.separator)
    },
    del (target) {
      let length = this.tags.length
      //获取到光标位置
      let pos = this.getPosition(target.target)
      //如果从最后删除就删除整个最后的内容
      if (pos === length) {
        let tags = this.tags.split(this.separator)
        tags.pop()
        this.tags = tags.join(this.separator)
      }
      //根据删除的位置 得到被删除的内容
      let context = this.delContent(pos)
      //如果是逗号前面的第一个字符 也执行删除操作
      let nextDot = this.delContent(pos + 1)
      if (nextDot === this.separator) {
        context = this.separator
        pos = pos + 1;
      }
      //删除的是逗号 则全部删除
      if (context === this.separator) {
        let start = 0
        for (let i = pos - 1; i >= 0; i--) {
          if (this.oldContext[i] === this.separator) {
            start = i
            break;
          }
        }
        let tags = null
        //获取到被删除单词首位
        if (start === 0) {
          tags = this.oldContext.split(this.separator)
          tags.shift()
          this.$emit('source', tags)
        } else {
          let newContext = this.oldContext.slice(0, start) + this.oldContext.slice(pos, this.oldContext.length)
          newContext = newContext.replace(this.separator + this.separator, this.separator)
          tags = newContext.split(this.separator)
          this.$emit('source', tags)
        }

        this.tags = tags.join(this.separator)
      }
      this.focusfns()
    },
    //获取被删除的内容
    delContent (pos) {
      return this.oldContext[pos]
    },
    add () {
      if (this.tagTypeIsString()) {
        this.tags = this.tags.split(this.separator)
      }
      this.tags.push('@testtest')
    },
    getPosition (element) {
      let cursorPos = 0;
      if (document.selection) { //IE
        var selectRange = document.selection.createRange();
        selectRange.moveStart('character', -element.value.length);
        cursorPos = selectRange.text.length;
      } else if (element.selectionStart || element.selectionStart == '0') {
        cursorPos = element.selectionStart;
      }
      return cursorPos;
    }
  }
}
</script>

<style  scoped>
</style>