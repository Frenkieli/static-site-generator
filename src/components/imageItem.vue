<template>
  <div
    v-if="showType === 'edit'" 
    :style="{
      float: data.align
    }"
  >
    <img
      class="baseComponents_image"
      :src="data.src"
      :style="{
        width: data.size + 'px',
      }"
    >
  </div>
  <div v-else-if="showType === 'list'">
    <img 
      class="tool_item"
      draggable="false"
      :src="'img/components/' + componentsName + '.png'" 
      :alt="componentsName"
    >
  </div>
  <div v-else-if="showType === 'setting'">
    <input 
      v-model="settingData.size" 
      type="number" 
      @change="onChange"
    >
    <br>
    <input 
      v-model="settingData.src" 
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
      <option value="right">
        right
      </option>
    </select>
  </div>
</template>

<script>
// 基礎狀態等等都在這邊繼承使用
import componentBase from './componentBase';

export default {
  name: 'ImageItem',
  extends: componentBase,
  data(){
    return{
      componentsName: "imageItem"
    }
  },
  methods:{
    // 這個是在mounted階段會觸發的function
    editInitEvent(){
    },
    onChange(){
      let vm = this;
      console.log(vm.settingData, 'settingData');
    }
  }
}
</script>

<style lang="scss" scoped>
.baseComponents_image {
  pointer-events: none;
  vertical-align: top;
}
</style>