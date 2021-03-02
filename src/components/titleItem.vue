<template>
  <component 
    v-if="showType === 'edit'" 
    ref="title" 
    :is="'h' + data.level"
    :style="{
      fontSize: data.size + 'px',
      textAlign: data.align,
      fontWeight: data.weight + '00'
    }"
    class="header_title"
  >
    {{ data.text }}
  </component>
  <div v-else-if="showType === 'list'">
    標題組件
  </div>
  <div v-else-if="showType === 'setting'">
    <input 
      type="number" 
      v-model="settingData.size" 
      @change="onChange"
    >
    <br>
    <input 
      type="number" 
      v-model="settingData.level"
      min="1"
      max="6"
      @change="onChange"
    >
    <br>
    <input 
      type="text" 
      v-model="settingData.text" 
      @change="onChange"
    >
    <br>
    <select 
      v-model="settingData.align" 
      @change="onChange"
    >
      <option value="left">left</option>
      <option value="center">center</option>
      <option value="right">right</option>
    </select>
    <br>
    <select 
      v-model="settingData.weight" 
      @change="onChange"
    >
      <option
        v-for="n in 9"
        :value="n"
        :key="'weight' + n"
      >{{ n * 100 }}</option>
    </select>
  </div>
</template>

<script>

import componentBase from './componentBase';

export default {
  extends: componentBase,
  name: 'titleItem',
  methods:{
    editInitEvent(){
    },
    onChange(){
      let vm = this;
      console.log(vm.settingData, 'settingData');
    }
  }
}
</script>