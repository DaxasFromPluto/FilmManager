<script >
export default {
  provide() {
    return {
      films: this.films,
      updateFilms: this.updateFilms
    };
  },
  data() {
    return {
      films: []
    };
  },
  methods: {
    updateFilms(films) {
      this.films = films;
    }
  }
};
</script>


<template>
  <div class = "body">
    
    <header>
    <nav class = "nav-bar">
      <router-link to="/">Domovská stránka</router-link>
      <router-link to="/MovieList">Seznam filmů</router-link>
      <router-link to="/AddMovie">Přidat film</router-link>
    </nav>
    <router-view />
    </header>

  

  </div>
  
</template>

<style scoped>
.img{
  width: 100%;
  height: 100%;
}

nav {
  
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.3);
}


</style>
