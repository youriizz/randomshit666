<template>
  <div class="section heaven">
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
import artefact1 from '@/assets/Church/artefact1.png';
import artefact4 from '@/assets/Church/artefact4.png';
import eglise2 from '@/assets/Church/eglise2.png';
import tableau1 from '@/assets/Church/tableau1.png';

export default {
  name: "Heaven",
  components: {
    TrafficLight,
    ContainerImage,
    ContainerText
  },
  data() {
    return {
      artefact1,
      artefact4,
      eglise2,
      tableau1,
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      containers: [
      { type: 'ContainerText', text: 'So you think your soul is free of sin?', height: 80 },
      { type: 'ContainerImage', src: tableau1, alt: 'Tableau 1' },
      { type: 'ContainerText', text: "It's not for me to decide ...", height: 80 },
      { type: 'ContainerImage', src: artefact4, alt: 'Artefact 4'},
      { type: 'ContainerText', text: "Follow Jesus and carry the cross to Mount Golgotha ✝️ I promise you'll go to heaven 🙏", height: 80 },
      {
          type: 'ContainerImage',
          src: 'https://img1.picmix.com/output/stamp/normal/1/5/0/1/441051_34264.gif',
        },
        { type: 'ContainerText', text: "Level 1 : Jesus is sentenced to death", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ecce_homo_by_Antonio_Ciseri_%281%29.jpg/1280px-Ecce_homo_by_Antonio_Ciseri_%281%29.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Antonio_Ciseri_-_Ecce_Homo_%28detail%29.jpg/1280px-Antonio_Ciseri_-_Ecce_Homo_%28detail%29.jpg',
        },
        { type: 'ContainerText', text: "Bruh it's not fair but you don't mess with the Roman pagans ", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://cdn.mediatheque.epmoo.fr/link/3c9igq/hjv189jpvhpmsm8.jpg',
          mobileSrc: 'https://cdn.prod.website-files.com/5ed7bf5384079963115358b8/5fd0c79d78c73d3cd58e5f7e_3.jpeg',
        },
        { type: 'ContainerText', text: "Level 2 : Jesus takes up his cross", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Le_Christ_quittant_le_prétoire-Gustave_Doré_%283%29.jpg/1600px-Le_Christ_quittant_le_prétoire-Gustave_Doré_%283%29.jpg?20110429151310',
          mobileSrc: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/459087/914081/main-image',
        },
        { type: 'ContainerText', text: "I'm gonna help him cause I want to go to heaven", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F70c1e5b8-98ff-4318-ad3b-4a2b09e7a15c_996x868.png',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Christ_Falling_on_the_Way_to_Calvary_-_Raphael.jpg',
        },
        { type: 'ContainerText', text: "Level 3 : Jesus falls for the first time", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.joyfulheart.com/easter/images-tissot/tissot-jesus-falls-beneath-the-cross-721x479.jpg',
        },
        { type: 'ContainerText', text: "Yo Jesus wtf you're embarrassing us in front of everyone here 😓😓", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://th-thumbnailer.cdn-si-edu.com/kB60kb1c5aIyKyx2_m--SFSrtZY=/1000x750/filters:no_upscale():focal(331x259:332x260)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/db/99/db99818e-f30e-4bf3-a57b-4d9f337c8a1d/detail_1.jpg',
          mobileSrc: 'https://i0.wp.com/www.leonieslonging.org/wp-content/uploads/2015/03/Stations-3-First-Fall-Gebhard-Fugel-WMC.jpg',
        },
        { type: 'ContainerText', text: "Level 4 : Jesus meets his mother", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Chiesa_di_San_Polo_%28Venice%29_-_VIA_CRUCIS_IV_-_Jesus_meets_his_mother_by_Giandomenico_Tiepolo.jpg',
        },
        { type: 'ContainerText', text: "We don't have time for family business. God's waiting for us boy.", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://loandbeholdbible.files.wordpress.com/2022/09/fourth-station-cross-jesus-meets-mother-mary.jpg?w=1108&h=737&crop=1',
          mobileSrc: 'https://cutterandcutter.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/05/jesus-meets-his-mother-32530-product-1.jpg',
        },
        { type: 'ContainerText', text: "Level 5 : You help Jesus carry his cross", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://news.bbcimg.co.uk/media/images/49293000/jpg/_49293384_procession17_cross.jpg',
          mobileSrc: 'https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/1/the-painting-simon-of-cyrene-helps-jesus-carry-his-cross-by-josef-piens-cooreman-jozef-sedmak.jpg',
        },
        { type: 'ContainerText', text: "We win as a team or lose as a team 🧑‍🤝🧑", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/65/657f/657fa964-0040-48df-971e-88f0de5c6714/73389a57-cd89-42f6-9458-c3f635bfcd39.jpg',
          mobileSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrS004DfJCkJpZXq7n7EJZ-QXxMVgbCnWtBAfeCqIiQD_6CziYCKMVMA5Cam2iH79t106E2YfkEshokPHPb0go87N8Nw4KdhXONTackTcdicb17chHytADJ7n7W8EQrriZoOKuW4Xpor2zReqbFBGE5aSCqVaf8v52P3oTT5vDItmHl5ty2OVNrlL-/s1228/1400_maître%20de%20boucicaut_heures%20de%20jeanne%20bessonnelle_French_Paris_1400-25_BNF_Latin%201161_168r.jpg',
        },
        { type: 'ContainerText', text: "Level 7 : Jesus falls for the second time", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://loandbeholdbible.com/wp-content/uploads/2023/02/7-seventh-station-fall.jpg?w=640',
          mobileSrc: 'https://catholicsstrivingforholiness.org/wp-content/uploads/2022/04/94htsgwagy_shutterstock_519499108-768x1152-1-683x1024.jpg',
        },
        { type: 'ContainerText', text: "I think Jesus needs some Red Bull 🪽🪽", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://wp.en.aleteia.org/wp-content/uploads/sites/2/2019/04/web3-jesus-falls-second-time-stations-of-the-cross-flickr.jpg',
          mobileSrc: 'https://theviewfromjoemcgrath.com/wp-content/uploads/2014/07/socross7.jpg',
        },
        { type: 'ContainerText', text: "Level 8 : Jesus consoles the women of Jerusalem", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://shamelesspopery.com/media/2012/03/Stations_of_the_Cross-_8-_Saint-Jean-Baptiste_au_Beguinage-_Brussels.jpg',
          mobileSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtA4CvDJY-M36JoeR0qPcxQ-yZ2J2SjzTlNtMrJF5EHQ9b3uChuQ5PIXAppRQAzh46LwdyzvxCg1xjguy6h_MkBTRsCZzwXAHHED8HZ2aU_MJejMQymkufGc2bcTbrw1iVUjUNp7bRR3g/s1600/station-cross8.jpg',
        },
        { type: 'ContainerText', text: "Jesus has been horny for 36 years 🥵🥵", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jesus_meets_the_women_of_Jerusalem.JPG/1200px-Jesus_meets_the_women_of_Jerusalem.JPG',
          mobileSrc: 'https://acervo-portinari.s3.sa-east-1.amazonaws.com/1905f60cfaa929d1aab4a0625188fd98.jpeg',
        },
        { type: 'ContainerText', text: "Level 9 : Jesus falls for the third time", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.joyfulheart.com/easter/images-tissot/tissot-simon-the-cyrenian-compelled-to-carry-the-cross-with-jesus-d1.jpg',
          mobileSrc: 'https://png.pngtree.com/thumb_back/fw800/background/20220430/pngtree-the-third-fall-of-jesus-station-nine-of-the-cross-photo-image_22069476.jpg',
        },
        { type: 'ContainerText', text: "Jesus I told you the shortest jokes are the best 😫😫", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://ignitumtoday.com/wp-content/uploads/2016/03/Fr_Pfettisheim_Chemin_de_croix_station_IX_Christ_detail-1024x768.jpg',
          mobileSrc: 'https://d3d00swyhr67nd.cloudfront.net/w1200h1200/collection/OU/SSHO/OU_SSHO_13-001.jpg',
        },
        { type: 'ContainerText', text: "Level 10 : Jesus is stripped of his clothes", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.artnet.com/WebServices/images/ll00047llduKjGFgEGECfDrCWvaHBOcFKyC/marc-chagall-le-chemin-de-croix.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/25/El_Expolio%2C_por_El_Greco.jpg',
        },
        { type: 'ContainerText', text: "No striptease? 😏", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Theophile_Lybaert_-_Jesus_is_stripped_of_His_garments.jpg',
          mobileSrc: 'https://uploads0.wikiart.org/00202/images/barnett-newman/1.jpg',
        },
        { type: 'ContainerText', text: "Level 11 : Jesus is nailed to the cross", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://media.mutualart.com/Images//2020_11/03/09/094124371/34bf25b1-1a8c-43ba-ac28-c972c7296546.Jpeg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristo_crucificado.jpg',
        },
        { type: 'ContainerText', text: "Ok we made it, now we just have to die to get into heaven", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.telegraph.co.uk/multimedia/archive/01247/dali2_1247555c.jpg',
          mobileSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qe-SEHnEanp1qN3JOj9YBAR_ZmbG6JQtfA&s',
        },
        { type: 'ContainerText', text: "Level 12 : Jesus dies on the cross", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.leisure-italy.com/wp-content/uploads/2017/05/Michelangelo-Crucifix.jpg',
          mobileSrc: 'https://d1inegp6v2yuxm.cloudfront.net/royal-academy/image/upload/c_limit,cs_tinysrgb,dn_72,f_auto,fl_progressive.keep_iptc,w_1200/c8oh5tf368mlkbgy0tvp.jpeg',
        },
        { type: 'ContainerText', text: "Let's gooooo 🍾🪩🎉", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.finestresullarte.info/rivista/immagini/2019/1016/marc-chagall-crocifissione-bianca-dettaglio.jpg',
          mobileSrc: 'https://www.artic.edu/iiif/2/cefba431-1241-6240-3a92-ffa787e5fa49/full/843,/0/default.jpg',
        },
        { type: 'ContainerText', text: "Level 13 : Jesus is taken down from the cross", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.artbible.info/images/rubens-kruisafname_midden_grt.jpg',
          mobileSrc: 'https://media.mutualart.com/Images//2015_04/25/18/184242796/dc148070-bb6e-46c9-a9b5-2183c0d03bc8.Jpeg',
        },
        { type: 'ContainerText', text: "Look below us Jesus 👼👼 They take care of our bodies", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://m.museivaticani.va/content/dam/museivaticani/immagini/collezioni/musei/pinacoteca/12_01_caravaggio_deposizione_dettaglio/jcr:content/renditions/original.jpg',
          mobileSrc: 'https://01posterstreet.com/cdn/shop/files/Caravaggio-The-Deposition-of-Christ-Fine-Art-PrintPoster-002068.jpg?v=1710406586',
        },
        { type: 'ContainerText', text: "Level 14 : Jesus is buried", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://home.ubalt.edu/ntygfit/ai_04_distinguishing_perspective/ai_04_see/tv1/tv1CJA0034___.jpg',
          mobileSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/14_-_Jesus_is_laid_in_the_tomb_and_covered_in_incense_-_Station_14_of_the_Calvary_Nuestra_Señora_de_la_Asunción_Church_%28Villamelendro_de_Valdavia%29.jpg',
        },
        { type: 'ContainerText', text: "At this point, I don't really care anymore. Let's fly to heaven", height: 40 },
        {
          type: 'ContainerImage',
          src: 'https://www.learnreligions.com/thmb/xdVbtvaRtT1KiOTG0MbUp8h-G9I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JosephOfArimathea-5c2e4559c9e77c0001904cf9.jpg',
          mobileSrc: 'https://images.squarespace-cdn.com/content/v1/5197d5d1e4b00c954c5e1035/1587493008025-H6G6IXRMZYBFHMT26D2S/Epitaphios+SM+WMD.jpg?format=1500w',
        },
        { type: 'ContainerText', text: "Hey Jesus I think the way to get into heaven is to press one of the buttons above 😇😇", height: 40 },














        



      ]
    };
  }
};
</script>

<style scoped>
.section {
  height: 5200vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  background: linear-gradient(to bottom, #7feaff, #ffffff);
  position: relative;
}

.dynamic-container {
  width: 100%;
}

.traffic-light {
  position: absolute;
  top: 0;
  transform: rotate(-90deg);
  justify-content: center;
}

@media (max-width: 1024px) {
  .section {
  height: 4200vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  background: rgb(255, 255, 255);
  position: relative;
}
}
</style>
