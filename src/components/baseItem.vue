<template>
  <!-- 這邊是主要顯示畫面用的 -->
  <div 
    v-if="showType === 'edit'" 
  />
  <!-- 這邊是在左方工具欄位顯示用的 -->
  <div v-else-if="showType === 'list'" />
  <!-- 這邊是右方設定畫面使用的 -->
  <div v-else-if="showType === 'setting'" />
</template>

<script>
// 基礎狀態等等都在這邊繼承使用
import componentBase from './componentBase';

export default {
  name: 'BaseItem',
  extends: componentBase,
  methods:{
    // 這個是在mounted階段會觸發的function
    editInitEvent(){
    }
  }
}
</script>