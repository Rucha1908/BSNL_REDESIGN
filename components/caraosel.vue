<template>

  <v-carousel >
   <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'Carousel01.png',
          },
          {
            src: 'Carousel02.png',
          },
          {
            src: 'Carousel03.png',
          },
          {
            src: 'Carousel04.png',
          },
        ],
      }
    },
  }
</script>