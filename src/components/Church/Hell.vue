<template>
  <div class="section hell">
    <component
      v-for="(container, index) in containers"
      :key="index"
      :is="container.type"
      :text="container.text"
      :src="container.src"
      :mobile-src="container.mobileSrc"
      :alt="container.alt"
      :height="container.height"
      :alt-height="container.altHeight"
      :additional-styles="container.additionalStyles"
      class="dynamic-container"
    ></component>

    <TrafficLight
      class="traffic-light"
      :orange-route="orangeRoute"
      :green-route="greenRoute"
      :relativeSize="false"
    />
  </div>
</template>

<script>
import TrafficLight from '../TrafficLight.vue';
import ContainerImage from './ContainerImage.vue';
import ContainerText from './ContainerText.vue';
import tableau2 from '@/assets/Church/tableau2.png';
import tombe1 from '@/assets/Church/tombe1.png';


export default {
  name: "Hell",
  components: {
    TrafficLight,
    ContainerImage,
    ContainerText, 
    tableau2,
    tombe1
  },
  data() {
    return {
 
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      containers: [
      { type: 'ContainerText', text: "So you think you've committed sins during your life on earth?", height: 80 },
      { type: 'ContainerImage', src: tableau2, alt: 'Tableau 2' },
      { type: 'ContainerText', text: "At least you admit it ...", height: 80 },
      { type: 'ContainerImage', src: tombe1, alt: 'Tableau 2' },
      { type: 'ContainerText', text: "Let's see which circle of hell you'll belong to 👎✝️🙅", height: 80 },
      {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Dante_Domenico_di_Michelino.jpg',
          mobileSrc: 'https://www.infobae.com/new-resizer/5pYV8DwQ1kgVk4cEN1LugSLHsJk=/1200x1800/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/BQWRFJD3OJDMXL4S7COGXMWGDQ.jpg',
        },
        {
          type: 'ContainerImage',
          src: 'https://www.thoughtco.com/thmb/Avbsf-KY0ImBByRdI1UatD7knW0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/illustration-to-the-divine-comedy-by-dante-alighieri--abyss-of-hell---1480-1490--found-in-the-collection-of-the-biblioteca-apostolica-vaticana--486777773-5c3a03c246e0fb00016261f2.jpg',
          mobileSrc: 'https://pbs.twimg.com/media/FsRu99YXgAUJsFJ.jpg',
        },
        { type: 'ContainerText', text: "Circle 1 : Limbo. 🍃 ", height: 50 },
        { type: 'ContainerText', text: "The souls of the unbaptized and the virtuous pagans reside in eternal melancholy, deprived of the vision of God but without physical suffering.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'http://www.worldofdante.org/media/images/inf/full/inf.3.9.dore.jpg',
          mobileSrc: 'http://www.worldofdante.org/media/images/inf/full/inf.4.94.dore.jpg',
        },
      
        {
          type: 'ContainerImage',
          src: 'http://www.worldofdante.org/media/images/inf/full/inf.4.42.dore.jpg',
        },
        { type: 'ContainerText', text: "You're a pagan but you're not virtuous. Let's go down ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 2 : Lust. 🔞", height: 50 },
        { type: 'ContainerText', text: "The souls of the lustful are eternally carried away by violent winds.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'http://www.worldofdante.org/media/images/inf/full/inf.5.31.dore.jpg',
        },
    
        {
          type: 'ContainerImage',
          src: 'https://cdn8.openculture.com/2015/01/29155210/blakedante-scaled.jpeg',
          mobileSrc: 'https://d7hftxdivxxvm.cloudfront.net/?height=799&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F4Dqo95m0kHZbKJxqD-jU9g%2Fnormalized.jpg&width=595',
        },
        
        { type: 'ContainerText', text: "You still look like a virgin. You don't belong here ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 3 : Gluttony. 🍽️", height: 50 },
        { type: 'ContainerText', text: "The souls of the gourmets are plunged into the mud in the freezing rain", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Botticelli_Inferno_XV.png',
        },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Inferno_Canto_6_lines_49-52.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Stradano_Inferno_Canto_06.jpg',
        },
        { type: 'ContainerText', text: "You just eat pasta with pesto 🍝 You're not a real gourmet ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 4 : Greed. 🤑", height: 50 },
        { type: 'ContainerText', text: "The souls of the avaricious are condemned to push heavy weights, constantly colliding, symbolising their obsession with material riches.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0701fc86-1e95-4c86-9afd-0c9ab967bb5f_1184x960.png',
        },
    
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Gustave_Doré_-_Dante_Alighieri_-_Inferno_-_Plate_22_%28Canto_VII_-_Hoarders_and_Wasters%29.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Stradano_Inferno_Canto_07.jpg',
        },
        { type: 'ContainerText', text: "Even if you'd like to have a lot of money, you don't have any. Further Down ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 5 : Anger. 😡", height: 50 },
        { type: 'ContainerText', text: "The angry souls fight on the surface of the River Styx, while the lazy souls are submerged under the muddy water.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Illustrations_to_Dante%27s_Divine_Comedy_object_9_Butlin_812-9Minos.jpg/1600px-Illustrations_to_Dante%27s_Divine_Comedy_object_9_Butlin_812-9Minos.jpg?20130707211030',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Stradano_Inferno_Canto_08.jpg',
        },
        
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Illustrations_to_Dante%27s_Divine_Comedy%2C_object_44_%28Butlin_812-42%29_The_Baffled_Devils_Fighting.jpg/640px-Illustrations_to_Dante%27s_Divine_Comedy%2C_object_44_%28Butlin_812-42%29_The_Baffled_Devils_Fighting.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Blake_Dante_Hell_VII_Canto.jpg',
        },
        { type: 'ContainerText', text: "You don't even have enough strength to fight ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 6 : Heresy. ☯️☪️", height: 50 },
        { type: 'ContainerText', text: "The souls of heretics are locked in burning graves, symbolising their permanent separation from divine truth.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Blake_Dante_Hell_X_Farinata.jpg/640px-Blake_Dante_Hell_X_Farinata.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Illustrations_to_Dante%27s_Divine_Comedy_object_2_Butlin_812-3_The_Mission_of_Virgil.jpg/640px-Illustrations_to_Dante%27s_Divine_Comedy_object_2_Butlin_812-3_The_Mission_of_Virgil.jpg',
        },
    
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Inferno_Canto_33_verses_62-63.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Blake_Dante_Hell_XXVI_Ulisses.jpg/640px-Blake_Dante_Hell_XXVI_Ulisses.jpg',
        },
        { type: 'ContainerText', text: "You're not heretic. You don't even believe in yourself. ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 7 : Violence. 🔪", height: 50 },
        { type: 'ContainerText', text: "Murderers are plunged into a river of blood, the suicided transformed into tortured trees, and blasphemers tormented in a desert of fire.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Stradano_Inferno_Canto_20.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Gustave_Dore%27s_illustration_of_hell_depicting_Muhammadand_Ali.png/640px-Gustave_Dore%27s_illustration_of_hell_depicting_Muhammadand_Ali.png',
        },
        
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Botticelli_Inferno_XVIII.png',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sandro_Botticelli_-_Inferno%2C_Canto_XVIII_%28detail%29_-_WGA02855.jpg/640px-Sandro_Botticelli_-_Inferno%2C_Canto_XVIII_%28detail%29_-_WGA02855.jpg',
        },
        { type: 'ContainerText', text: "You didn't do all that because you saw yourself as a good person. ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 8 : Fraud 🐍", height: 50 },
        { type: 'ContainerText', text: "The souls of fraudsters suffer punishments such as flogging, immersion in excrements and transformation into reptiles.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg/1920px-William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg',
        },
        
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Blake_Dante_Hell_XXIV_Thieves.jpg',
          mobileSrc: 'https://rossonl.wordpress.com/wp-content/uploads/2021/01/flatterers.jpg',
        },
        { type: 'ContainerText', text: "You didn't commit fraud. You wanted to but you didn't have the balls to do it. ⬇", height:  150 },
        { type: 'ContainerText', text: "Circle 9 : Treason 🤥", height: 50 },
        { type: 'ContainerText', text: "The traitors are frozen in Lake Cocytus, with the greatest traitors eternally masticated by Lucifer in the centre of the circle.", height: 80 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Gustave_Dore_Inferno32.jpg',
        },

        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Inferno_Canto_34_verses_20-21.jpg',
          mobileSrc: 'https://rossonl.wordpress.com/wp-content/uploads/2021/02/9.jpg',
        },
        { type: 'ContainerText', text: "You can't be a traitor because you've never been faithful to anyone ⬇", height:  150 },
        { type: 'ContainerText', text: "Well. It seems that your circle doesn't yet exist in hell" , height: 200},
        { type: 'ContainerText', text: "They don't have something for people without a personality 😔", height: 80 },
        { type: 'ContainerText', text: "Now you can either wait for them to update to the 21st century ...", height: 80 },
        { type: 'ContainerText', text: "... or you can invent your own personality by continuing below and pressing one of the buttons 😈", height: 200 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Gustave_Doré_-_Dante_Alighieri_-_Inferno_-_Plate_13_%28Canto_V_-_Minos%29.jpg',
        },
      ]
  
    };
  }
};
</script>

<style scoped>
.section {
  height: 6200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: linear-gradient(to bottom, #000000, #000000);

  position: relative;
  color: white;
}

.dynamic-container {
  width: 100%;
}

.traffic-light {
  position: absolute;
  bottom: 0;
  transform: rotate(-90deg);
  justify-content: center;
}

@media (max-width: 1024px) {
  .section {
  height: 4200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background: rgb(0, 0, 0);
  position: relative;
  color: white;
}
}
</style>
