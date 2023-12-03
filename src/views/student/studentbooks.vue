<template>
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search Books" v-model="searchQuery">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchBooks">Search</button>
        </div>
      </div>
  
      <div class="row">
        <div v-for="book in filteredBooks" :key="book.id" class="col-md-3 mb-4">
          <div class="card">
            <img :src="book.image" class="card-img-top" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.author }}</p>
              <button class="btn btn-success  btn-block">book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
// import cardimg from '../student/AtomHabits'

  export default {
    data() {
      return {
        books: [
          { id: 1, title: 'Atom Habits', author: 'Author 1', image: 'book1.jpg' },
          { id: 2, title: 'Hamsa', author: 'Author 2', image: 'book2.jpg' },
          { id: 2, title: 'Boburnoma', author: 'Author 2', image: 'book2.jpg' },
          { id: 2, title: 'Amur Temur', author: 'Author 2', image: 'book2.jpg' },
          { id: 2, title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
          { id: 2, title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
          { id: 2, title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
          { id: 2, title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
          // Add more book data as needed
        ],
        searchQuery: ''
      };
    },
    computed: {
      filteredBooks() {
        return this.books.filter(book =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      searchBooks() {
        // Logic for searching books if needed
      }
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  