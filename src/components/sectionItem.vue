<template>
  <!-- 這邊是主要顯示畫面用的 -->
  <section 
    v-if="showType === 'edit'" 
  >
    <slot />
  </section>
  <!-- 這邊是右方設定畫面使用的 -->
  <div v-else-if="showType === 'setting'" />
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