<script>
import { mapMutations } from 'vuex';


export default {
  props: {
    showType: {
      type: String,
      default: 'item'
    },
    data: {
      type: Object,
      default: ()=> {}
    },
  },
  data(){
    return{
      settingData: null
    }
  },
  watch: {
    data:{
      immediate: true,
      handler(newValue) {
        this.settingData = newValue;
      }
    }
  },
  mounted(){
    let vm = this;
    if(vm.showType === 'edit'){
      vm.editInitEvent();
    }
  },
  methods:{
    ...mapMutations([
      'updataSettingData'
    ])
  }
}
</script>