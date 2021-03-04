<script>
import titleItem from './titleItem';
import textItem from './textItem';
import imageItem from './imageItem';

export default {
  components:{
    titleItem,
    textItem,
    imageItem
  },
  data (){
    return{
      componentItems: [
        'titleItem',
        'textItem',
        'imageItem'
      ]
    }
  }
}
</script>