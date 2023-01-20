<template >
    <div class="main">
    <div class="content">
        <router-view></router-view>
    </div>
    </div>
</template>

<style scoped>
.content {
    padding: 50px;
    min-height: 100vh;
    font-family:"Trebuchet MS", serif;
    box-sizing:border-box;
}
.main::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1000%;
    background-repeat: round;
    background-image: url("./Assets/back-we.jpeg"); 
    filter: blur(4px);  
    z-index: -1;
}
</style>
