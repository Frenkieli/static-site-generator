<template>
  <component 
    :is="'h' + data.level" 
    v-if="showType === 'edit'" 
    ref="title"
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
      v-model="settingData.size" 
      type="number" 
      @change="onChange"
    >
    <br>
    <input 
      v-model="settingData.level" 
      type="number"
      min="1"
      max="6"
      @change="onChange"
    >
    <br>
    <input 
      v-model="settingData.text" 
      type="text" 
      @change="onChange"
    >
    <br>
    <select 
      v-model="settingData.align" 
      @change="onChange"
    >
      <option value="left">
        left
      </option>
      <option value="center">
        center
      </option>
      <option value="right">
        right
      </option>
    </select>
    <br>
    <select 
      v-model="settingData.weight" 
      @change="onChange"
    >
      <option
        v-for="n in 9"
        :key="'weight' + n"
        :value="n"
      >
        {{ n * 100 }}
      </option>
    </select>
  </div>
</template>

<script>

import componentBase from './componentBase';

export default {
  name: 'TitleItem',
  extends: componentBase,
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