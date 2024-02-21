<template>
  <div>x的y次方：{{ result }}</div>
  <input type="text" class="a1" v-model="input1" @change="emits('update:set1',parseInt(input1.trim()))"><br>
  <input type="text" class="a1" v-model="input2" @change="emits('update:set2',parseInt(input2.trim()))"><br>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
    interface props {
      set1:number,
      set2?:number
    }
    const props=withDefaults(defineProps<props>(),{
      set1:1,
      set2:0
    })
    const emits=defineEmits<{
      'update:set1':[value:number],
      'update:set2':[value:number]
    }>()

    const result=computed(()=>{
      return Math.pow(props.set1,props.set2)
    })

    const input1=ref('')
    const input2=ref('')
</script>

<style scoped lang="less">
  .a1{
    color: white;
    background-color: rgba(20,20,75,1);
    border: solid 2px rgb(12, 228, 248);
    border-radius: 4px;
  }
</style>