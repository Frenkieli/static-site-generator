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
    <div class="components_setting_bar">
      <component
        :is="settingData && settingData.type"
        class="components_list_bar_item"
        show-type="setting"
        :data="settingData"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import componentItems from './components/componentItems';

export default {
  name: 'App',
  extends: componentItems,
  computed: mapState([
    'pageData',
    'settingData'
  ]),
  methods: {
    onItemDargStart(e, itemName){
      e.dataTransfer.setData("text/plain", '{ "cmd" : "newItem", "data": "' + itemName + '"}');
    }
  }
}
</script>


<style lang="scss">

$border-style: 3px double rgba(0, 0, 0, 166);

@mixin border-style {
  box-sizing: border-box;
  width: 200px;
}

.app {
  display: flex;
  height: 100vh;

  .components_list_bar {

    @include border-style;

    border-right: $border-style;

    &_item {
      cursor: grab;
      margin: 2px;
      padding: 2px;
      border: 1px solid #666;
      border-radius: 5;

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

    @include border-style;

    border-left: $border-style;
  }

}
</style>
