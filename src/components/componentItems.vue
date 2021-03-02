<script>
import titleItem from './titleItem';
import textItem from './textItem';
import imageItem from './imageItem';

export default {
  data (){
    return{
      componentItems: [
        'titleItem',
        'textItem',
        'imageItem'
      ]
    }
  },
  components:{
    titleItem,
    textItem,
    imageItem
  }
}
</script>