<template>
  <button @click="abled" :class="{'active':flag,'close':!flag}">{{ flag?'开启ing':'关闭ing' }}</button><br>
  <div v-for="(item,index) in list" :key="index">
    次数: {{ item.num }} ,时间: {{ item.time }}
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import type { Ref } from 'vue';
  const record=localStorage.getItem('flashRecord')
  const list:Ref<Array<{num:number,time:string}>>=ref(JSON.parse(record || "[]"))

  window.addEventListener('beforeunload',()=>{
    const time=new Date().toLocaleTimeString()
    const new_record:Array<{num:number,time:string}>=[...list.value,{num:list.value.length+1,time:time}]
    if(flag.value) localStorage.setItem('flashRecord',JSON.stringify(new_record))
  })

  const flag=ref(false)
  const abled:()=>void=()=>{
    flag.value=!flag.value
  }
</script>

<style scoped>
  .active{
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    color: white;
    background-color: rgba(20,20,75,1);
    border: solid 2px rgb(12, 228, 248);
  }
  .close{
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    color: rgb(32, 246, 25);
    background-color: rgb(47, 47, 173);
    border: solid 2px rgb(248, 205, 12);
  }
</style>