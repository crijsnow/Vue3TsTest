<template>
  <div class="bgc">
      <vue-particles
          id="tsparticles"
          :particlesLoaded="particlesLoaded"
          :options="{
                  background: {
                      color: {
                          value: '#0d47a1'
                      }
                  },
                  fpsLimit: 120,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: true,
                              mode: 'push'
                          },
                          onHover: {
                              enable: true,
                              mode: 'repulse'
                          },
                      },
                      modes: {
                          bubble: {
                              distance: 400,
                              duration: 2,
                              opacity: 0.8,
                              size: 40
                          },
                          push: {
                              quantity: 4
                          },
                          repulse: {
                              distance: 200,
                              duration: 0.4
                          }
                      }
                  },
                  particles: {
                      color: {
                          value: '#ffffff'
                      },
                      links: {
                          color: '#ffffff',
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1
                      },
                      move: {
                          direction: 'none',
                          enable: true,
                          outModes: 'bounce',
                          random: false,
                          speed: 6,
                          straight: false
                      },
                      number: {
                          density: {
                              enable: true,
                          },
                          value: 80
                      },
                      opacity: {
                          value: 0.5
                      },
                      shape: {
                          type: 'circle'
                      },
                      size: {
                          value: { min: 1, max: 5 }
                      }
                  },
                  detectRetina: true
              }"
      />
  </div>
</template>


<script setup lang="ts">

const particlesLoaded=async (container:any) => {
      // tsparticles 加载完成
      console.log("tsParticles loaded container:", container);
    }
</script>

<style scoped>
.bgc{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>