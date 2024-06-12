
<template>
    <div>
      <h1>Přidat film</h1>
      <form @submit.prevent="addMovie">
        <div>
          <label>Název filmu:</label>
          <input type="text" v-model="name" required>
        </div>
        <div>
          <label>Režisér:</label>
          <input type="text" v-model="director" required>
        </div>
        <div>
          <label>Rok vydání:</label>
          <input type="number" v-model.number="year" required>
        </div>
        <button type="submit">Přidat</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddMovie',
    inject: ['films', 'updateFilms'],
    data() {
      return {
        name: '',
        director: '',
        year: ''
      };
    },
    methods: {
      addMovie() {
        const newMovie = {
          name: this.name,
          director: this.director,
          year: this.year
        };
        this.films.push(newMovie);
        this.updateFilms(this.films);
        this.name = '';
        this.director = '';
        this.year = '';
      }
    }
  };
  </script>
  

<style scoped>

form {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


h1 {
  color:white; 
  text-align: center;
  font-family: 'Poppins', sans-serif;
}


label {
  display: block;
  margin-bottom: 10px;
  color: #2e3a63; 
}


input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}


button[type="submit"] {
  background-color: #2e3a63;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #1e2755; 
}



</style>