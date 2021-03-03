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
            text: '第一篇'
          },
          {
            type: 'imageItem',
            size: 261,
            align: 'left',
            src: 'img/fox.jpg'
          },
          {
            type: 'textItem',
            size: 16,
            align: 'left',
            weight: 5,
            text: '興經力都也爸。美景願腦景，前實書球教一大出許張我錢小充水、本國畫不出樹層戰小次變生，溫向市強考，有美不學國葉公有職是經你，是片的心以近助不上。們類。       統請義回系我他小少生如海……心出言據上紙亞父但不以。起的大時，且家專年小庭來年接長使中岸場如實之、一什他，待市但對多不回空任美我子，陽物團子速類太後太的人，件連院持告入。人必來點表具、對源無這心量民保出；很回是車房解商發本麼境！歷雖開試是住女，加向告眼說連識這本來其多見那生舉助阿；意毒利見座神把光定變計讀：員身式臺及引人房北病要示定作走還統組得取高下……復開題語一不一，業媽使近自，一青我成，我許證。廣人走兒目，際雖入究怕變片她度然樣。間護知造完裡對想資有車成一回記看這這上斯……展體際一子那苦品應在門案個幾大地四人人今如車童用，真名親於為卻居的引：叫片看。團光能們童、為畫化最送子質年能度自一到也麼學代化業結天化間機，他才友得包一公，道原育體此都同球種車。下謝紅去後報，的標女接有花歌館越完，認安沒作答不張還常能然謝是。作方兒好接事來行；向改太著近否調體的第，我和家之動到如保觀總了升、考傷從現！數聲。問這連獲常場油地景果育他你陽女試就動那報。成總下地構理的但千著女不生生如地飯不於國，童了斷不作而望往器紙天明你影推場心政復難時哥度的發物消加歌來學看行的種心直作時率：定先燈說發令會政、約口布該就美物急義性學臺什全停已差、應策源下理接這有元務好司市、轉我錯工；識式這在怕洋司品便了頭料美速未望非下活見！賣交當，入隊說媽福。做就身任了少父更青收？書這聯不：持裡量下。不長葉圖房以研可境臺使想一別一？供仍其清計那道麼界、算全期洲代談司再小我下開重消眼相二上意親！日推這不今大各友人興不思現夫外洋，全太起大汽，部往自食……年我卻雨調，好輕此們計到沒計金常活我金金母光自花鄉廠軍節機打環竟他結大是明，但看人事。木工馬，玩水西面站到用我轉，供南型期費場制開黃字離密規部條趣相告正，呢教去你素文每長實到後以重個自小現說方事長小。影們你投人沒散色素能道委引下道五傷來受高區想所好在驚區雙智仍區到府：所覺聲令我北告至什生地玩研不眼經一同西社先提地時！現久東自線過全府公現：然和這那的命不又子！記學適至就都來決我化積歡現失查會家。道使一致在……得多就了；間的告時當輪係術人好止教的導他意定西壓理高成打化間強深電院究長舉心族前化子火里成怎車天地下。是子沒點、我對一離白的！春時變先可，水用增知……站根一！笑學孩廣下於此人開人，得布是開水院舉運物然，一育來有邊語這料？裡到她教張我驚小所西，工量成好度有室，料要光學影百五媽那銷團在代等再的，方遊夫十型吃中人話他表的計口人賣去前旅錯雜年三長，小十能統望注，度上臺始年人天減知子立聲程總而是育界市加靜合學生車路內相。'
          }
        ]
      },
      {
        child: [
          {
            type: 'titleItem',
            level: 1,
            size: 36,
            align: 'center',
            weight: 7,
            text: '第二篇'
          },
          {
            type: 'imageItem',
            size: 261,
            align: 'right',
            src: 'img/fox.jpg'
          },
          {
            type: 'textItem',
            size: 16,
            align: 'left',
            weight: 5,
            text: '興經力都也爸。美景願腦景，前實書球教一大出許張我錢小充水、本國畫不出樹層戰小次變生，溫向市強考，有美不學國葉公有職是經你，是片的心以近助不上。們類。       統請義回系我他小少生如海……心出言據上紙亞父但不以。起的大時，且家專年小庭來年接長使中岸場如實之、一什他，待市但對多不回空任美我子，陽物團子速類太後太的人，件連院持告入。人必來點表具、對源無這心量民保出；很回是車房解商發本麼境！歷雖開試是住女，加向告眼說連識這本來其多見那生舉助阿；意毒利見座神把光定變計讀：員身式臺及引人房北病要示定作走還統組得取高下……復開題語一不一，業媽使近自，一青我成，我許證。廣人走兒目，際雖入究怕變片她度然樣。間護知造完裡對想資有車成一回記看這這上斯……展體際一子那苦品應在門案個幾大地四人人今如車童用，真名親於為卻居的引：叫片看。團光能們童、為畫化最送子質年能度自一到也麼學代化業結天化間機，他才友得包一公，道原育體此都同球種車。下謝紅去後報，的標女接有花歌館越完，認安沒作答不張還常能然謝是。作方兒好接事來行；向改太著近否調體的第，我和家之動到如保觀總了升、考傷從現！數聲。問這連獲常場油地景果育他你陽女試就動那報。成總下地構理的但千著女不生生如地飯不於國，童了斷不作而望往器紙天明你影推場心政復難時哥度的發物消加歌來學看行的種心直作時率：定先燈說發令會政、約口布該就美物急義性學臺什全停已差、應策源下理接這有元務好司市、轉我錯工；識式這在怕洋司品便了頭料美速未望非下活見！賣交當，入隊說媽福。做就身任了少父更青收？書這聯不：持裡量下。不長葉圖房以研可境臺使想一別一？供仍其清計那道麼界、算全期洲代談司再小我下開重消眼相二上意親！日推這不今大各友人興不思現夫外洋，全太起大汽，部往自食……年我卻雨調，好輕此們計到沒計金常活我金金母光自花鄉廠軍節機打環竟他結大是明，但看人事。木工馬，玩水西面站到用我轉，供南型期費場制開黃字離密規部條趣相告正，呢教去你素文每長實到後以重個自小現說方事長小。影們你投人沒散色素能道委引下道五傷來受高區想所好在驚區雙智仍區到府：所覺聲令我北告至什生地玩研不眼經一同西社先提地時！現久東自線過全府公現：然和這那的命不又子！記學適至就都來決我化積歡現失查會家。道使一致在……得多就了；間的告時當輪係術人好止教的導他意定西壓理高成打化間強深電院究長舉心族前化子火里成怎車天地下。是子沒點、我對一離白的！春時變先可，水用增知……站根一！笑學孩廣下於此人開人，得布是開水院舉運物然，一育來有邊語這料？裡到她教張我驚小所西，工量成好度有室，料要光學影百五媽那銷團在代等再的，方遊夫十型吃中人話他表的計口人賣去前旅錯雜年三長，小十能統望注，度上臺始年人天減知子立聲程總而是育界市加靜合學生車路內相。'
          }
        ]
      },
      {
        child: []
      }
    ],
    settingData: null
  },
  mutations: {
    // 新增一個section資料
    addPageSection(state){
      state.pageData.push(
        {
          child: [
          ]
        }
      )
    },
    // 新增一個子組件到section
    addPageSectionChild(state, data){
      let toIndex;
      if(typeof data.serialNumber.itemIndex !== 'number'){
        toIndex = data.side === 'top' ? 0 : state.pageData[data.serialNumber.sectionIndex].child.length;
      }else{
        toIndex = data.side === 'top' ? data.serialNumber.itemIndex : data.serialNumber.itemIndex + 1;
      }
      state.pageData[data.serialNumber.sectionIndex].child.splice(toIndex, 0, JSON.parse(JSON.stringify(componentsItemDefault[data.itemName])));
    },
    // 變更一個子組件到對應section
    updatePageSectionChild(state, data){
      let toIndex;
      if(typeof data.serialNumber.itemIndex !== 'number'){
        toIndex = data.side === 'top' ? 0 : state.pageData[data.serialNumber.sectionIndex].child.length;
      }else{
        toIndex = data.side === 'top' ? data.serialNumber.itemIndex : (data.serialNumber.itemIndex + 1);
      }
      if(data.itemSerialNumber.sectionIndex === data.serialNumber.sectionIndex &&
        data.itemSerialNumber.itemIndex === data.serialNumber.itemIndex
        ){
          toIndex = data.itemSerialNumber.itemIndex;
      }
      let item = state.pageData[data.itemSerialNumber.sectionIndex].child.splice(data.itemSerialNumber.itemIndex, 1)[0];
      state.pageData[data.serialNumber.sectionIndex].child.splice(toIndex, 0, item);
    },
    // 更新該section位置和狀態
    pageSectionStatusUpdate(state, data){
      switch (data.cmd) {
        case 'up':
          state.pageData.splice(data.seleteIndex - 1 , 0 ,state.pageData.splice(data.seleteIndex, 1)[0]);
          break;
        case 'down':
          state.pageData.splice(data.seleteIndex + 1 , 0 ,state.pageData.splice(data.seleteIndex, 1)[0]);
          break;
        case 'delete':
            state.pageData.splice(data.seleteIndex, 1);
          break;
      
        default:
          break;
      }
    },
    // 變更子組件的參數設定
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
