import {ref} from 'vue'
import testStrHandler from '../components/testStrHandler.vue';
export function testInput(){
  const testdata=ref('')
  const han=ref<InstanceType<typeof testStrHandler> | null>()
  const abled=ref<boolean>(false)
  const setAbled=(value:boolean):void=>{
    abled.value=value
  }
  return {
    testStrHandler,
    testdata,
    han,
    abled,
    setAbled
  }
}
