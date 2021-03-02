<script>
import titleItem from './titleItem';
import textItem from './textItem';

export default {
  data (){
    return{
      componentItems: [
        'titleItem',
        'textItem'
      ]
    }
  },
  components:{
    titleItem,
    textItem
  }
}
</script>