import Vue from 'vue'
import Vuex from 'vuex'

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
            weight: '7',
            text: '開頭文字'
          },
          {
            type: 'titleItem',
            level: 2,
            size: 24,
            align: 'left',
            weight: 5,
            text: '開頭文字2'
          }
        ]
      }
    ],
    settingData: null
  },
  mutations: {
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
