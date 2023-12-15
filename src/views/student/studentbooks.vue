<template>
  <div class="container">
    <div class="input_group">
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
              <div class="card-publicationYear">
                <input type="text" v-model="uploadData.Publicationyear" class="form-control" placeholder="Publication Year">
              </div>
              <button class="btn btn-success btn-block" type="button" @click="postBooks(book)">Post Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      searchQuery: '',
      uploadData: {
        Publicationyear: '' 
      }
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
      axios.get('http://localhost:5208/api/Book')
        .then(response => {
          this.books = response.data; 
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    },
    postBooks(book) {
      const dataToSend = {
        title: book.title,
        author: book.author,
        image: book.image,
        publicationYear: this.uploadData.Publicationyear 
      };

      axios.post('http://localhost:5208/order-book', dataToSend)
        .then(response => {
          console.log('Book successfully posted:', response.data);
          // Optionally, you can reset the input fields or perform any necessary actions after posting
          // this.uploadData.Publicationyear = '';
        })
        .catch(error => {
          console.error('Error posting book:', error);
        });
    }
  },
  created() {
    this.searchBooks();
  }
};
</script>

<style>
.input_group {
  padding-left: 200px;
}
</style>
