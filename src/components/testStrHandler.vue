<template>
  <input v-if="!props.getdata || data" type="text" v-model="final">
  <input v-else type="text" :placeholder="'存在传入值'+props.getdata" disabled>
  <div>check:{{ complate }}</div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'
import type {Ref} from 'vue'

// const props= defineProps({//运行时声明
//   getdata:{
//     type:String,
//     default:''
//   }
// })
//基于类型的声明
interface props{
  getdata:string
}
const props=withDefaults(defineProps<props>(),{
  getdata:''
})

// const emit=defineEmits(['update:getdata'])//运行时声明
// const emit =defineEmits({
//   'update:getdata':(value:string):void=>{}
// })//基于选项
// const emit=defineEmits<{(e:'update:getdata',value:string):void}>()//基于类型
const emit =defineEmits<{
  'update:getdata':[value:string]
  'update:abled':[boo:boolean]
}>()//最新的推荐写法

const data :Ref<string>=ref('')//通过Ref工具类型来实现

const final=computed({
   get:():string=>{ return props.getdata || data.value },
   set:(value)=>{
    emit('update:getdata',value)
    emit('update:abled',Boolean(value))
    data.value=value
   }
})

const complate=computed(()=>{
  const finalArr:string[]=final.value.split('')
  const object:{[str:string]:number}={}
  finalArr.forEach(ele=>{
    const keys=Object.keys(object)
    if(keys.findIndex(e=>ele===e)===-1){
      object[ele]=1
    }
    else object[ele]+=object[ele]
  })
  const keys= Object.keys(object).filter(ele=>object[ele]===Math.min(...Object.values(object)))
  return finalArr.filter(ele=>keys.findIndex(e=>e===ele)===-1).join('')
})
</script>

<style>

</style>