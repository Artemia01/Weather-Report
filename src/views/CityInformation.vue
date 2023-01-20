<template>
  <OneWeatherCard :item="city"></OneWeatherCard>
</template>

<script>
import OneWeatherCard from "../Components/OneWeatherCard.vue"
export default {
  name: "CityInformation",
  props: {
    city:''
  },
  components:{
    OneWeatherCard
  },
  data() {
    return {
    };
  },
}
</script>