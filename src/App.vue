<script setup lang="ts">
  import { ref,computed, provide } from 'vue'
  import type {InjectionKey,Ref} from 'vue'
  import testStrHandler from './components/testStrHandler.vue';
  /**
   * particles_background存在问题
   */
  // import particles_background from './components/particles_background.vue';
  const testdata=ref('')
  // TODO testtag
  // FIXME testtag

  const testInver=ref<string>('')
  const istrue=computed(()=>{
    const arr=testInver.value.split('')
    return arr.reverse().join('')===testInver.value
  })

  const key:InjectionKey<Ref<string>>=Symbol('123')
  provide(key,testInver)
  // const abc=inject<Ref(string)>(key)


  const han=ref<InstanceType<typeof testStrHandler> | null>()
</script>

<template>
  <!-- <particles_background></particles_background> -->
  输入测试数据:<input type="text" v-model="testdata"><br>
  <testStrHandler v-model:getdata="testdata" ref="han"></testStrHandler>
  <br><br>
  镜像测试数据:<input type="text" v-model.trim="testInver">
  <div>{{ istrue }}</div>
</template>

<style scoped>

</style>
