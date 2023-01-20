<template>
  <div class="container">
    <div class="item-container">
      <h2>Add City</h2>
      <p>Please enter the city name</p>
      <input type="text" id="city-name" placeholder="Enter the city" v-model="newCity" class="data-input">
      <p>{{ error }}</p>
      <button @click="addNewCity" id="contained-button-add">Add city</button>
    </div>
    <div class="item-container">
      <h2>Show Detail Weather</h2>
      <p>Select necessary city</p>
      <select id="city-choose" v-model="currentCity" class="data-input">
        <option v-for="item in cityList">{{ item }}</option>
      </select>
      <p></p>
      <router-link :to="`/weather/${currentCity}`" id="contained-button-show">
        Show weather
      </router-link>
    </div>
  </div>

</template>

<script >
import { defineComponent } from 'vue';
 const cities = require("cities-list");
export default defineComponent({
  name: "InputCity",
   props: {
    cityList: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      currentCity:'',
      newCity:'',
      allCities:[],
      error:''
    };
  },
  mounted(){


  },
   methods:{
    addNewCity(){
      if(this.isExists()){
        if(!this.$parent.cityList.includes(this.newCity)){
          this.cityList.push(this.newCity);
        this.newCity="";
        this.error="";
        }else{
          this.error="The city already exists";
        }
      try {
        localStorage.setItem ('cityList', JSON.stringify(this.cityList));
      }catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          alert ('Exceeded limit');
        }
      }
      }

    },
    isExists(){
      this.allCities = Object.keys(cities);
      this.allCities = this.allCities.map(item=>item.toLowerCase());
      if(this.allCities.includes(this.newCity.toLowerCase())){
        console.log("ok")
        this.error = ""
        return true
      }else if(!this.newCity){
        this.error = ""
      }else{
        this.error="There is no such place"
        return false
      }
    }
  }
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
    place-items: center;
}




.data-input {
    width: 270px;
    color:  #04d9ff;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.8;
}

.data-input:focus {
    outline: none;
}

h2 {
    font-size: 22px;
    margin-bottom: 15px;
    text-transform: uppercase;
    text-decoration: underline;
}

p {
    font-size: 16px;
    margin-bottom: 15px;
}

#contained-button-add {
    width: 290px;
    background-color: #f1f1f1  ;
    border-radius: 5px;
    padding: 10px ;
    display: block;
    color: rgb(40, 40, 40);
    border: transparent;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    color:  #04d9ff;
    
}

#contained-button-show {
    width: 250px;
    background-color: #f1f1f1  ;
    border-radius: 5px;
    padding: 10px ;
    display: block;
    color: rgb(40, 40, 40);
    border: transparent;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    color:  #04d9ff;
    
}
</style>
