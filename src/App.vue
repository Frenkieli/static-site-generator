<template>
  <div
    id="app"
    class="app"
  >
    <div class="components_list_bar">
      <component
        :is="componentName"
        v-for="(componentName, componentIndex) in componentItems"
        :key="componentIndex"
        class="components_list_bar_item"
        show-type="list"
        draggable="true"
        @dragstart.native="function(e){
          onItemDargStart(e, componentName);
        }"
      />
    </div>
    <router-view class="main_container" />
    <div 
      class="components_setting_bar" 
      :class="{active : settingData}"
    >
      <transition
        name="fade"
        tag="div"
      >
        <component
          :is="settingData && settingData.type"
          class="components_setting_bar_item"
          show-type="setting"
          :data="settingData"
        />
      </transition>

      <div 
        class="components_setting_bar_close"
        @click="deleteData"
      >
        <span> Delete </span>
        <font-awesome-icon 
          class="components_setting_bar_close_icon icon" 
          icon="trash-alt" 
        />
      </div>
      <div 
        class="components_setting_bar_close"
        @click="clearDate"
      >
        <span> Close </span>
        <font-awesome-icon 
          class="components_setting_bar_close_icon icon" 
          icon="times-circle" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import componentItems from './components/componentItems';

export default {
  name: 'App',
  extends: componentItems,
  computed: mapState([
    'pageData',
    'settingData'
  ]),
  methods: {
    ...mapMutations([
      'clearSettingData',
      'deleteSettingData'
    ]),
    onItemDargStart(e, itemName){
      e.dataTransfer.setData("text/plain", '{ "cmd" : "newItem", "data": "' + itemName + '"}');
    },
    clearDate(){
      this.clearSettingData();
    },
    deleteData(){
      this.deleteSettingData();
    }
  }
}
</script>


<style lang="scss">
// 喜歡這種小的scrollbar
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background: rgb(173, 100, 40);
  border-radius: 4px;
}

// vue動畫效果
.fade {
  &-enter-active,
  &-leave-active {
    transition: all 0.1s;
  }

  &-enter,
  &-leave-to {
    position: absolute;
    opacity: 0;
  }
}


@mixin bar-style {    
  position: fixed;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 200px;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6px;
    background-image: linear-gradient(to right, #000 0%, #fff 50%, #000 100%);
  }
}

.app {
  height: 100vh;

  .components_list_bar {
    @include bar-style;

    left: -200px;

    &::after {
      right: -6px;
    }

    &:hover {
      left: 0;
    }

    &_item {
      cursor: grab;
      margin: 2px;
      padding: 2px;
      border: 1px solid #666;
      border-radius: 5px;

      &:hover {
        outline: 3px solid rgb(0, 255, 242);
      }
    }
    
    .tool_item {
      width: 100%;
      vertical-align: middle;
    }

  }

  .main_container {
    flex-grow: 1;

  }

  .components_setting_bar {
    @include bar-style;

    right: -200px;
    padding: 5px;

    &::after {
      left: -6px;
    }

    &.active {
      right: 0;
    }

    &_close {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      margin: 2px 0;
      padding: 5px;
      width: 100%;
      color: #111;
      background-position-x: -200px;
      background-repeat: no-repeat;
      background-size: 200px;
      background-image: linear-gradient(45deg, rgba(94, 255, 234, 0.39) 50% , #fff 100%);
      border: 2px solid #444;
      border-radius: 5px;
      transition: 0.2s;

      .icon {
        transition: 0.2s;
      }

      &:hover {
        background-position-x: 0;

        .icon {
          color: #f00;
          transform: rotate(360deg);
        }
      }
    }
  }

}
</style>
