
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


/**
 * 报错Uncaught TypeError: Class extends value undefined is not a constructor or null
 */
// import "./type/tsParticles.d.ts"
// import Particles from "@tsparticles/vue3";
// import Particles from 'particles.js'

// import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

// const particlesInit= async engine => {
//     await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
//     // await loadSlim(engine); //如果您不需要形状（Shapes）或动画（Animations），您可以从 “@tsparticles/slim” 加载精简版本。
//   }


const app=createApp(App)
// app.use(Particles, {
//   init: async (engine:any) => {
//     // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
//     await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
//   },
// })

app.use(createPinia())

app.mount('#app')
