<template>
  <div id="app" class="app">
    <div class="components_list_bar">
      <component
        class="components_list_bar_item"
        v-for="(componentName, componentIndex) in componentItems"
        showType='list'
        draggable="true"
        :is="componentName"
        :key="componentIndex"
        @dragstart.native="function(e){
          onItemDargStart(e, componentName);
        }"
      />
    </div>
    <router-view class="main_container"/>
    <div class="components_setting_bar">
      <component
        class="components_list_bar_item"
        showType='setting'
        :is="settingData && settingData.type"
        :data="settingData"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import componentItems from './components/componentItems';

export default {
  extends: componentItems,
  name: 'App',
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

$borderStyle : 3px double rgba(0, 0, 0, 166);

@mixin borderStyle{
    box-sizing: border-box;
    width: 250px;
}

.app{
  display: flex;
  height: 100vh;

  .components_list_bar{

    @include borderStyle;
    border-right: $borderStyle;

    &_item{

      margin: 2px;
      padding: 2px;
      border: 1px solid #666;
      border-radius: 5;

    }

  }

  .main_container{

    flex-grow: 1;

  }

  .components_setting_bar{

    @include borderStyle;
    border-left: $borderStyle;
    
  }

}
</style>
