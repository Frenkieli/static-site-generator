import Vue from 'vue'
import Vuex from 'vuex'

import componentsItemDefault from './componentsDefault';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageData: [
      {
        child: [
          {
            type: 'titleItem',
            level: 1,
            size: 36,
            align: 'center',
            weight: 7,
            text: '這是一個H1元件'
          },
          {
            type: 'titleItem',
            level: 2,
            size: 24,
            align: 'left',
            weight: 5,
            text: '這是一個H2元件'
          }
        ]
      }
    ],
    settingData: null
  },
  mutations: {
    addPageSection(state){
      state.pageData.push(
        {
          child: [
          ]
        }
      )
    },
    addPageSectionChild(state, data){
      let toIndex;
      if(typeof data.serialNumber.itemIndex !== 'number'){
        toIndex = data.side === 'top' ? 0 : state.pageData[data.serialNumber.sectionIndex].child.length;
      }else{
        toIndex = data.side === 'top' ? data.serialNumber.itemIndex : data.serialNumber.itemIndex + 1;
      }
      state.pageData[data.serialNumber.sectionIndex].child.splice(toIndex, 0, JSON.parse(JSON.stringify(componentsItemDefault[data.itemName])));
    },
    changeSettingData(state, data){
      Vue.set(state, 'settingData', state.pageData[data.sectionIndex].child[data.itemIndex]);
    },
    updataSettingData(state, data){
      Vue.set(state, 'settingData', data);
    },
  },
  actions: {
  },
  modules: {
  }
})
