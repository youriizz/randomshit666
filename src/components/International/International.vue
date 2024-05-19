<template>
    <div class="international" @click="handleGlobalClick">
      <Country1 id="country1" ref="country1" @country-selected="bringToFront('country1')" />
      <Country2 id="country2" ref="country2" @country-selected="bringToFront('country2')" />
      <Country3 id="country3" ref="country3" @country-selected="bringToFront('country3')" />
      <Country4 id="country4" ref="country4" @country-selected="bringToFront('country4')" />
    </div>
  </template>
  
  <script>
  import Country1 from './Country1.vue';
  import Country2 from './Country2.vue';
  import Country3 from './Country3.vue';
  import Country4 from './Country4.vue';
  import EventBus from '../../eventBus';
  
  export default {
    components: {
      Country1,
      Country2,
      Country3,
      Country4
    },
    data() {
      return {
        globalClickCount: 0
      };
    },
    methods: {
      handleGlobalClick() {
        if (this.globalClickCount < 2) {
          this.globalClickCount++;
          console.log("Global click count:", this.globalClickCount);
          EventBus.emit('update-click-count', this.globalClickCount);
        }
      },
      bringToFront(countryId) {
      const country = this.$refs[countryId];
      if (country && country.$el) {
        country.$el.style.zIndex = '10';
        console.log(`bringToFront set zIndex to 10 for ${countryId}`);
        this.$refs.country1.$el.style.zIndex = countryId === 'country1' ? '10' : '1';
        this.$refs.country2.$el.style.zIndex = countryId === 'country2' ? '10' : '1';
        this.$refs.country3.$el.style.zIndex = countryId === 'country3' ? '10' : '1';
        this.$refs.country4.$el.style.zIndex = countryId === 'country4' ? '10' : '1';
      } else {
        console.error(`bringToFront method not found on ${countryId}`);
      }
      }
    },
    created() {
      EventBus.on('update-click-count', (count) => {
        this.globalClickCount = count;
        console.log(`Global click count updated to ${this.globalClickCount}`);
      });
    }
  }
  </script>
  
  <style>
  .international {
    position: absolute;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
  }

  </style>
  