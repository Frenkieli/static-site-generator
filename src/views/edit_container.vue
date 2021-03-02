<template>
  <div class="edit_container">
    <section
      class="edit_container_section"
      v-for="(sectionData, sectionIndex) in pageData"
      :key="sectionIndex"
      @dragenter.stop="onDragItemEnter"
      @dragover.stop="onDragItemEnter"
      @dragleave.stop="onDragItemLeave"
      @drop.stop="function(e){
        onDragItemEnd(e, sectionIndex);
      }"
    >
      <component
        v-for="(itemData, itemIndex) in sectionData.child"
        showType='edit'
        :is="itemData.type"
        :data="itemData"
        :key="itemIndex"
        @click.native="settingItem(sectionIndex, itemIndex)"
        @dragenter.native.stop="onDragItemEnter"
        @dragover.native.stop="onDragItemEnter"
        @dragleave.native.stop="onDragItemLeave"
        @drop.native.stop="function(e){
          onDragItemEnd(e, sectionIndex, itemIndex);
        }"
      />
    </section>
    <div 
      class="edit_container_section edit_container_section_add"
      @click="addSection"
    >

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
      'changeSettingData',
      'addPageSection',
      'addPageSectionChild'
    ]),
    settingItem(sectionIndex, itemIndex){
      this.changeSettingData({sectionIndex, itemIndex})
    },
    addSection(){
      this.addPageSection();
    },
    onDragItemEnter(e){
      let el = e.target;
      e.preventDefault();
      e.stopPropagation();
      if(e.offsetY <= el.offsetHeight / 2){
        el.classList.add('addToTop');
        el.classList.remove('addToBottom');
      }else{
        el.classList.remove('addToTop');
        el.classList.add('addToBottom');
      }
      el.classList.add('dragItemIn');
    },
    onDragItemLeave(e){
      let el = e.target;

      el.classList.remove('dragItemIn');
      el.classList.remove('addToTop');
      el.classList.remove('addToBottom');
    },
    onDragItemEnd(e, sectionIndex, itemIndex){
      let el = e.target;

      el.classList.remove('dragItemIn');
      el.classList.remove('addToTop');
      el.classList.remove('addToBottom');

      let side = e.offsetY <= el.offsetHeight / 2 ? 'top' : 'bottom';
      this.addPageSectionChild({
        itemName: e.dataTransfer.getData("text"),
        side: side,
        serialNumber: {
          sectionIndex, itemIndex
        }
      });

    }
  }
}
</script>

<style lang="scss" scoped>
.edit_container{

    .dragItemIn{
      position: relative;
      background-color: #aaa;

      &::before{
        content: '';
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #f00;
      }

      &.addToTop{
        &::before{
          top: 0;
        }
      }

      &.addToBottom{
        &::before{
          bottom: 0;
        }
      }
      
    }


  &_section{
    width: 1200px;
    margin: auto;
    padding: 5px;
    border: 1px solid #777;
    &::after{
      content: '';
      display: block;
      clear: both;
    }
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
