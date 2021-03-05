<script>
import sectionItem from './sectionItem';
import titleItem from './titleItem';
import textItem from './textItem';
import imageItem from './imageItem';

export default {
  components:{
    sectionItem,
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