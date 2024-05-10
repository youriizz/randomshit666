<template>
     <div :class="lightClass" class="light" @click="navigate"></div>
</template>

<script>
export default {
    props: {
        lightType: String,
    },
    computed: {
        lightClass() {
            if (this.type === 'red') {
                return "red";
            }

            if (this.type === 'orange') {
                return "orange";
            }
            
            if (this.type === 'green') {
                return "green";
            }
        }
    }
}
</script>

<style scoped>

.red {
    background-color: red;
}

.orange {
    background-color: orange;
}

.green {
    background-color: green;
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
  transform: scale(1.2);
  box-shadow: 0 0 20px light;
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