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
        draggable="true"
        v-for="(itemData, itemIndex) in sectionData.child"
        showType='edit'
        :is="itemData.type"
        :data="itemData"
        :key="itemIndex"
        @click.native="settingItem(sectionIndex, itemIndex)"
        @dragstart.native="function(e){
          onItemDargStart(e, sectionIndex, itemIndex);
        }"
        @dragenter.native.stop="onDragItemEnter"
        @dragover.native.stop="onDragItemEnter"
        @dragleave.native.stop="onDragItemLeave"
        @drop.native.stop="function(e){
          onDragItemEnd(e, sectionIndex, itemIndex);
        }"
      />
      <div class="edit_container_section_toolbar">
        <div 
          class="edit_container_section_toolbar_button edit_container_section_toolbar_upbutton"
          @click="sectionUp(sectionIndex)"
          :style="sectionIndex !== 0 ? {} : {
            color:  '#aaa',
            cursor: 'default'
          }"
        >
          <font-awesome-icon icon="chevron-circle-up" />
        </div>
        <div 
          class="edit_container_section_toolbar_button edit_container_section_toolbar_downbutton"
          @click="sectionDown(sectionIndex)"
          :style="sectionIndex !== pageData.length - 1 ? {} : {
            color:  '#aaa',
            cursor: 'default'
          }"
        >
          <font-awesome-icon icon="chevron-circle-down" />
        </div>
        <div 
          class="edit_container_section_toolbar_button edit_container_section_toolbar_deletebutton"
          @click="sectionDelete(sectionIndex)"
        >
          <font-awesome-icon icon="trash-alt" />
        </div>
      </div>
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
      'addPageSectionChild',
      'pageSectionStatusUpdate',
      'updatePageSectionChild'
    ]),
    settingItem(sectionIndex, itemIndex){
      this.changeSettingData({sectionIndex, itemIndex})
    },
    addSection(){
      this.addPageSection();
    },
    onItemDargStart(e, sectionIndex, itemIndex){
      e.dataTransfer.setData("text/plain", '{ "cmd" : "moveItem", "data": {"sectionIndex": ' + sectionIndex + ', "itemIndex": ' + itemIndex + '}}');
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
      let dragData = JSON.parse(e.dataTransfer.getData("text"));
      let side = e.offsetY <= el.offsetHeight / 2 ? 'top' : 'bottom';
      switch (dragData.cmd) {
        case "newItem":
          this.addPageSectionChild({
            itemName: dragData.data,
            side: side,
            serialNumber: {
              sectionIndex, itemIndex
            }
          });
          break;
        case "moveItem":
          this.updatePageSectionChild({
            itemSerialNumber: dragData.data,
            side: side,
            serialNumber: {
              sectionIndex, itemIndex
            }
          })
          break;
        default:
          break;
      }
    },
    sectionUp(seleteIndex){
      if(seleteIndex != 0){
        this.pageSectionStatusUpdate({
          cmd: 'up',
          seleteIndex: seleteIndex
        })
      }
    },
    sectionDown(seleteIndex){
      if(seleteIndex != this.pageData.length - 1){
        this.pageSectionStatusUpdate({
          cmd: 'down',
          seleteIndex: seleteIndex
        })
      }
    },
    sectionDelete(seleteIndex){
      this.pageSectionStatusUpdate({
        cmd: 'delete',
        seleteIndex: seleteIndex
      })
    },
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
    position: relative;
    width: 1200px;
    min-height: 20px;
    margin: auto;
    padding: 5px;
    border: 1px solid #777;
    &::after{
      content: '';
      display: block;
      clear: both;
    }
    &:hover{
      .edit_container_section_toolbar{
        display: block;
      }
    }
    &_toolbar{
      display: none;
      position: absolute;
      top: -1px;
      left: -1px;
      font-size: 25px;
      background-color: #ffffffee;
      border: 1px solid #000000aa;
      padding: 2px;

      &_button{
        display: inline-block;
        margin:0 10px;
        cursor: pointer;
        &:hover{
          color: #00f;
        }
      }
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
