<template>
    <div class="header">
        <h1>Vítejte v aplikaci pro správu filmů</h1>
    </div>

    <div class = "logo" >
    <img src="@/assets/MovieLogo.png" class="img">
   </div>
    

</template>
  
<script>
 
</script>
  
<style scoped>
.header{
  color: white; 
  font-family: 'Arial';
  font-size: 1rem;  
  font-weight: bold; 
  text-align: center; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
    width: 500px;
    height: 400px;
    margin-right: 20px;
    margin-top: 15px; 
    border: solid 2px white;
}

.img{
  width: 100%;
  height: 100%;
}

</style>