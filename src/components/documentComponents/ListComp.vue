<template>
  <ul
    :ref="ref_"
    :id="id_"
    :style="style_"
    :class="class_"
  >
    <li v-for="child in children_" :key="child.id"
      :ref="child.ref"
      :id="child.id"
      :style="child.style"
      :class="child.class"
      v-on:mousedown="onmousedown"
      v-on:mouseup="onmouseup"
    >
      {{ child.text }}
    </li>
  </ul>
</template>

<script>

import { SelectionsMixin } from './SelectionsMixin.js'

export default {

  name: 'ListComp',

  mixins: [
      SelectionsMixin
  ],

  props: [
    'children_',
    'ref_',
    'id_',
    'style_',
    'class_'
  ],

  data () {
    return {

    }
  },
  
}
</script>

<style lang="css" scoped>
</style>