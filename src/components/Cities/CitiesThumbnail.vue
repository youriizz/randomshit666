<template>
  <div
    class="FF100item FF100item-14"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <a href="html/BB145dubai.html" class="FF100item-14-link-1"></a>
    <svg :key="svgKey" width="800" height="800" viewBox="0 0 470 490" class="FF100item-14-animatedsvg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="4" dy="20" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.8" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow-hover" x="-20%" y="-20%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dx="10" dy="30" result="offsetblurhover" />
          <feComponentTransfer>
            <feFuncA type="table" slope="2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        :class="{ 'hovered-path': isHovered }"
        fill="transparent"
        stroke="black"
        stroke-width="3"
        filter="url(#shadow)"
      >
        <animate
          attributeName="d"
          dur="6000ms"
          repeatCount="indefinite"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          calcMode="spline"
          values="M380.5,271Q360,292,392,350.5Q424,409,384,423.5Q344,438,304.5,426.5Q265,415,236.5,406Q208,397,163.5,410Q119,423,98,390Q77,357,93,316.5Q109,276,74,243Q39,210,68,182.5Q97,155,116.5,127Q136,99,164.5,74.5Q193,50,229,70.5Q265,91,286,113Q307,135,322,153Q337,171,378,178Q419,185,410,217.5Q401,250,380.5,271Z;
                    M402,281Q410,312,381,327.5Q352,343,340,374.5Q328,406,294.5,386Q261,366,231.5,392.5Q202,419,158,425Q114,431,117.5,380.5Q121,330,100,306Q79,282,43.5,243.5Q8,205,42.5,174Q77,143,107,121.5Q137,100,178,120.5Q219,141,242.5,110Q266,79,289.5,101.5Q313,124,339,135Q365,146,387.5,167Q410,188,402,219Q394,250,402,281Z;
                    M439,287Q440,324,412,348Q384,372,370,417Q356,462,312.5,457.5Q269,453,238,426Q207,399,173,398Q139,397,138,358.5Q137,320,134.5,296Q132,272,114,246.5Q96,221,89,183.5Q82,146,94.5,103.5Q107,61,149.5,53Q192,45,229.5,55Q267,65,286,102.5Q305,140,356.5,123Q408,106,411,146.5Q414,187,426,218.5Q438,250,439,287Z;
                    M436,285.5Q433,321,394.5,334Q356,347,327,346.5Q298,346,280,360Q262,374,227.5,411.5Q193,449,168.5,420Q144,391,100,380.5Q56,370,44.5,330.5Q33,291,64,256Q95,221,95,187.5Q95,154,112.5,122.5Q130,91,165,83Q200,75,234.5,61Q269,47,305,56.5Q341,66,334.5,122.5Q328,179,350.5,190.5Q373,202,406,226Q439,250,436,285.5Z;
                    M380.5,271Q360,292,392,350.5Q424,409,384,423.5Q344,438,304.5,426.5Q265,415,236.5,406Q208,397,163.5,410Q119,423,98,390Q77,357,93,316.5Q109,276,74,243Q39,210,68,182.5Q97,155,116.5,127Q136,99,164.5,74.5Q193,50,229,70.5Q265,91,286,113Q307,135,322,153Q337,171,378,178Q419,185,410,217.5Q401,250,380.5,271Z"
        ></animate>
      </path>
    </svg>
    <img src="../../assets/Cities/localisation.webp" alt="img3" />
  </div>
</template>

<script>
export default {
  name: 'CitiesThumbnail',
  data() {
    return {
      svgKey: 0,
      isHovered: false
    };
  },
  mounted() {
    this.svgKey++;
  }
};
</script>

<style scoped>
.FF100item-14:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
  z-index: 3;
}

.FF100item-14 {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;
}

.FF100item-14 img {
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 20%;
  z-index: 1;
}

.FF100item-14-animatedsvg {
  height: 100%;
  width: 80%;
  transform: translate(0%, 0%);
}

.FF100item-14-animatedsvg path {
  transition: fill 0.1s ease-in-out;
  fill: transparent;
  filter: url(#shadow);
}

.FF100item-14:hover .FF100item-14-animatedsvg path {
  filter: url(#shadow-hover);
}

.FF100item-14:active .FF100item-14-animatedsvg path {
  fill: rgb(0, 0, 0);
}

@media (max-width: 600px) {
  .FF100item-14-animatedsvg {
    height: 100%;
    width: auto;
    transform: translate(0%, 0%);
  }
}
</style>
