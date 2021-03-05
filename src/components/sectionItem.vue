<template>
  <!-- 這邊是主要顯示畫面用的 -->
  <section 
    v-if="showType === 'edit'" 
  >
    <slot />
  </section>
  <!-- 這邊是右方設定畫面使用的 -->
  <div v-else-if="showType === 'setting'">
    <input 
      v-model="settingData.height"
      type="number"
      min="0"
      @change="onChange"
    >
    <br>
    <input 
      v-model="settingData.backgroundColor"
      type="text"
      @change="onChange"
    >
    <br>
    <input 
      v-model="settingData.backgroundImage" 
      type="text" 
      @change="onChange"
    >
    <br>
    <button
      :style="{
        backgroundColor: settingData.fluid ? '#111' : '#eee',
        color: settingData.fluid ? '#eee' : '#111',
      }"
      @click="(e)=>{
        settingData.fluid = !settingData.fluid;
        onChange()
      }"
    > 
      滿板
    </button>
  </div>
</template>

<script>
// 基礎狀態等等都在這邊繼承使用
import componentBase from './componentBase';

export default {
  name: 'SectionItem',
  extends: componentBase,
  data(){
    return{
      componentsName: "sectionItem"
    }
  },
  methods:{
    // 這個是在mounted階段會觸發的function
    editInitEvent(){
    }
  }
}
</script>