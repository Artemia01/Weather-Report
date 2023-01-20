<template>
  <AddCity :cityList="cityList"></AddCity>
  <li><img src="../Assets/position.png"></li>
  <WeatherCardInfo :item="currentPositionCity" v-if="currentPositionCity"></WeatherCardInfo>
  <li><img src="../Assets/add-city.png"></li>
  <WeatherCardInfo v-for="item in cityList" :item="item"></WeatherCardInfo>
</template>

<script>
import AddCity from '../Components/AddCity.vue';
import WeatherCardInfo from '../Components/WeatherCardInfo.vue';
import { Api } from '../Api';
export default{
  name:"Home",
  components:{
    AddCity,
    WeatherCardInfo
  },
  data() {
    return {
      cityList:[],
      currentPositionCity:"",
    }
  },
  mounted(){
    this.getCityList();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        Api.getWeatherInfoByCoords(position.coords.latitude,position.coords.longitude)
      .then((res)=>{
      this.currentPositionCity = res.data.name;
    })
    .catch((e)=>{
      alert(e);
    })
      })
    }
  },
  methods:{
    getCityList(){
      if(localStorage.getItem('cityList')){
        this.cityList = JSON.parse(localStorage.getItem('cityList'));
      }
    }
  }
}
</script>

<style scoped>
  h2{
    color:  #04d9ff;
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    margin: 35px 0 20px 0;
  }

img{
  width:100px;
  height:100px;
  margin-left:47%;
  margin-right:47%;
}

</style>