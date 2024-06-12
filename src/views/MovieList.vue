<template>
  <div class="movies-list">
    <h1 class = "header">Seznam filmů</h1>
    <ul>
      <li v-for="(film, index) in films" :key="index">
        <span class="movie-info" style="font-family: 'Poppins', sans-serif;">
          {{ film.name }} - {{ film.director }} - {{ film.year }}
        </span>
        <button @click="deleteFilm(index)" class="delete-btn">Smazat</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['films', 'updateFilms'],
  methods: {
    deleteFilm(index) {
      this.films.splice(index, 1);
      this.updateFilms(this.films);
    }
  }
};
</script>

<style scoped>
.header{
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
.movies-list {
  background-color: #6a11cb; 
  color: #ffffff; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movies-list h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.movies-list ul {
  list-style-type: none;
  padding: 0;
}

.movies-list li {
  margin-bottom: 10px;
}

.movie-info {
  font-size: 18px;
}

.delete-btn {
  background-color: #ff4f4f; 
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #ff3333;
}
</style>
