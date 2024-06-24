<template>
  <div :class="lightClass" class="light" @click="navigate">
  </div>
</template>

<script>
export default {
  props: {
    lightType: String,
    orangeRoute: String,
    greenRoute: String,
  },
  computed: {
    lightClass() {
      if (this.lightType === 'red') {
        return "red";
      }

      if (this.lightType === 'orange') {
        return "orange";
      }

      if (this.lightType === 'green') {
        return "green";
      }
    }
  },
  methods: {
    navigate() {
      if (this.lightType === 'red') {
        this.$router.push({ name: 'home' });
      }

      if (this.lightType === 'orange' && this.orangeRoute) {
        this.$router.push({ name: this.orangeRoute });
      }

      if (this.lightType === 'green' && this.greenRoute) {
        this.$router.push({ name: this.greenRoute });
      }
    }
  },
}
</script>

<style scoped>
.red {
  background-color: red;
  transform: translateY(-15%);
  --translateY: -15%;
  --shadow-color: red;
}

.orange {
  background-color: orange;
  --shadow-color: orange;
}

.green {
  background-color: green;
  transform: translateY(15%);
  --translateY: 15%;
  --shadow-color: green;
}

.light {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.light:active,
.light:hover,
.light:focus {
  transform: scale(1.2) translateY(var(--translateY, 0%));
  box-shadow: 0 0 20px var(--shadow-color);
  opacity: 100%;
}

@media (min-width: 600px) {
  .light {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 350px) {
  .light {
    width: 40px;
    height: 40px;
  }
}
</style>
