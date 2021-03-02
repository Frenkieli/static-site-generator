<template>
  <div class="edit_container">
    <section
      class="edit_container_section"
      v-for="(sectionData, sectionIndex) in pageData"
      :key="sectionIndex"
    >
      <component
        v-for="(itemData, itemIndex) in sectionData.child"
        showType='edit'
        :is="itemData.type"
        :data="itemData"
        :key="itemIndex"
        @click.native="settingItem(sectionIndex, itemIndex)"
      />
    </section>
    <div class="edit_container_section edit_container_section_add">

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import componentItems from '../components/componentItems';

export default {
  extends: componentItems,
  name: 'edit_container',
  computed: mapState([
    'pageData'
  ]),
  methods: {
    ...mapMutations([
      'changeSettingData'
    ]),
    settingItem(sectionIndex, itemIndex){
      this.changeSettingData({sectionIndex, itemIndex})
    }
  }
}
</script>

<style lang="scss" scoped>
.edit_container{

  &_section{
    margin: auto;
    width: 1200px;
    border: 1px solid #777;
  }

  &_section_add{
    cursor: pointer;
    transition: 0.1s;
    border-radius: 20px;
    margin-top: 10px;

    &::after{
      content: '+';
      display: block;
      text-align: center;
      font-size: 100px;
      
    }

    &:hover{
      background-color: #777;
      color: #fff
    }

  }
}
</style>
