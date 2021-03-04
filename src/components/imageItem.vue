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
    />
  </div>
  <div v-else-if="showType === 'list'">
    圖形組件
  </div>
  <div v-else-if="showType === 'setting'">
    <input 
      type="number" 
      v-model="settingData.size" 
      @change="onChange"
    >
    <br>
    <input 
      type="text" 
      v-model="settingData.src" 
      @change="onChange"
    >
    <br>
    <select 
      v-model="settingData.align" 
      @change="onChange"
    >
      <option value="left">left</option>
      <option value="right">right</option>
    </select>
  </div>
</template>

<script>
// 基礎狀態等等都在這邊繼承使用
import componentBase from './componentBase';

export default {
  extends: componentBase,
  name: 'imageItem',
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