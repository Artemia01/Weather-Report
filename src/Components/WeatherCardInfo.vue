<template>

<div class="container">
  <ul>
    <li>{{ info.name }}</li>
    <li><img src="../Assets/humidity.png"></li>
    <li><img src="../Assets/temperature.png"></li>
    <li><img src="../Assets/weather.png"></li>
    <li><img src="../Assets/pressure.png"></li>
  </ul>
  <ul>
    <li>{{ sys.country }}</li>
    <li>Humidity</li>
    <li>Temp</li>
    <li>Weather</li>
    <li>Pressure</li>
  </ul>
  <ul>
    <li>{{ coord.lon }}, {{ coord.lat }}</li>
    <li>{{ main.humidity }}%</li>
    <li>{{ main.temp }}℃</li>
    <li>{{ weather.main }}</li>
    <li>{{ main.pressure }}</li>
  </ul>
</div>

</template>

<script>
import {Api} from '../Api'
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ShowWeather",
  props: {
    item: {
      type: String,
      require: false
    }
  },
  data() {
    return {
      info:{},
      sys:{},
      weather:{},
      coord:{},
      main:{},
    };
  },
  mounted() {
    if(this.item){
      Api.getWeatherInfo(this.item)
    .then((res)=>{
      this.info = res.data;
      this.sys = res.data.sys;
      this.weather = res.data.weather[0];
      this.coord = res.data.coord;
      this.main = res.data.main;
    })
    .catch((e)=>{
      alert(e);
    })
    }


  },
});
</script>

<style scoped>
.container {
    background-image: linear-gradient(to right top, rgba(5, 25, 55, 0.7), rgba(100, 135, 147, 0.7));
    color:  #04d9ff;
    border-radius: 0px;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 60px;
    background-color: transparent;
    font-family: Trebuchet MS;
}


li{
  margin-bottom:25px;
  text-align: left;
  height:32px;
  font-size: 24px;
}

img{
  filter: invert(1);
  width:30px;
  height:30px;
}
</style>