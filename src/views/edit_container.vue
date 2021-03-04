<template>
  <div class="edit_container">
    <section
      v-for="(sectionData, sectionIndex) in pageData"
      :key="sectionIndex"
      class="edit_container_section"
      @dragenter.stop="onDragItemEnter"
      @dragover.stop="onDragItemEnter"
      @dragleave.stop="onDragItemLeave"
      @drop.stop="function(e){
        onDragItemEnd(e, sectionIndex);
      }"
    >
      <component
        :is="itemData.type"
        v-for="(itemData, itemIndex) in sectionData.child"
        :key="itemIndex"
        class="edit_container_section_item"
        draggable="true"
        show-type="edit"
        :data="itemData"
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
          :style="sectionIndex !== 0 ? {} : {
            color: '#aaa',
            cursor: 'default'
          }"
          @click="sectionUp(sectionIndex)"
        >
          <font-awesome-icon icon="chevron-circle-up" />
        </div>
        <div 
          class="edit_container_section_toolbar_button edit_container_section_toolbar_downbutton"
          :style="sectionIndex !== pageData.length - 1 ? {} : {
            color: '#aaa',
            cursor: 'default'
          }"
          @click="sectionDown(sectionIndex)"
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
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import componentItems from '../components/componentItems';

export default {
  name: 'EditContainer',
  extends: componentItems,
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
.edit_container {
  .dragItemIn {
    position: relative;
    background-color: #aaa;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      height: 2px;
      background-color: #f00;
      z-index: 1;
    }

    &.addToTop {
      &::before {
        top: 0;
      }
    }

    &.addToBottom {
      &::before {
        bottom: 0;
      }
    }
      
  }


  &_section {
    cursor: pointer;
    position: relative;
    margin: auto;
    padding: 5px;
    width: 1200px;
    min-height: 20px;
    border: 1px solid #0003;

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    &:hover {
      outline: 3px solid rgb(0, 255, 242);

      .edit_container_section_toolbar {
        display: block;
      }
    }

    &_item {
      cursor: pointer;

      &:hover {
        outline: 3px solid rgb(27, 107, 255);
      }
    }

    &_add {
      cursor: pointer;
      margin-top: 10px;
      border-radius: 20px;
      outline: none !important;
      transition: 0.1s;

      &::after {
        content: '+';
        display: block;
        font-size: 100px;
        text-align: center;
      
      }

      &:hover {
        color: #fff;
        background-color: #777;
      }

    }

    &_toolbar {
      position: absolute;
      top: -1px;
      left: -1px;
      display: none;
      padding: 2px;
      font-size: 25px;
      background-color: #fffe;
      border: 1px solid #000a;

      &_button {
        cursor: pointer;
        display: inline-block;
        margin: 0 10px;

        &:hover {
          color: #00f;
        }
      }
    }
  }


}
</style>
