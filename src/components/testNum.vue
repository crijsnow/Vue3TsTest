<template>
  <div>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
  import {computed} from 'vue'
  const props=defineProps<{
    func?:string
  }>()

  function roundToDecimal(number:number, decimalPlaces:number) {
  const factor=Math.pow(10,decimalPlaces)
  return Math.floor(number*factor)/factor
}
  const result=computed(()=>{
    const c:number | undefined=Number(props.func?.split('=')[1])
    const a:number | undefined=Number(props.func?.split('x')[0])
    if(c===undefined || a===undefined){
      return 'x: 不可解'
    }
    const result=roundToDecimal(c/a,4)
    return `x: ${result}`
  })
</script>

<style scoped>

</style>