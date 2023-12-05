<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1>Books</h1>
    <input type="text" v-model="searchQuery" placeholder="Search...">
    <select v-model="selectedCategory" @change="filterBooks">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
    <input type="text" v-model="selectedLanguage" placeholder="Language" @input="filterBooks">
    <input type="text" v-model="selectedPublicationYear" placeholder="Publication Year" @input="filterBooks">
    <input type="text" v-model="searchByAuthor" placeholder="Author" @input="filterBooks">
    <input type="number" v-model="selectedCopiesOwned" placeholder="Copies Owned" @input="filterBooks">
  </div>
  
      <div class="card-body ">

        <table class="table table-bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>publicationYear</th>
            <th>language</th>
            <th>categoryId</th>
            <th>copiesOwned</th>

            <!-- <th>Count</th> -->
            <!-- <th> <b-button class="btn btn-primary" size="sm">Refresh</b-button></th> -->

          </tr>

          </thead>
          <tbody >
          <tr v-for="(book, index) in this.books" :key="index">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.publicationYear }}</td>
            <td>{{ book.language }}</td>
            <td>{{ book.categoryId }}</td>
            <td>{{ book.copiesOwned }}</td>
            <td>
            <button @click="editBook(book)">Edit</button>
            <button @click="deleteBook(book.id)">Delete</button>
          </td>
          </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'books',
  data() {
    return {
      books: []
    }
  },
  mounted() {
    this.getbooks()
    // this.getStudents();
    // console.log('i am here')
  },
  methods: {
    getbooks() {
      axios.get("http://127.0.0.1:5208/api/Book")
          .then(res => {
            this.books = res.data;
            console.log(res.data)
          })
    }
  },
  
  editBook(book) {
      // Implement logic to handle editing a book
      axios.put(`api/books/${book.id}`, book)
        .then(response => {
          console.log('Book updated:', response.data);
          // Perform any necessary actions after successful update
        })
        .catch(error => {
          console.error('Error updating book:', error);
        });
    },
    deleteBook(bookId) {
      // Implement logic to handle deleting a book
      axios.delete(`api/books/${bookId}`)
        .then(response => {
          console.log('Book deleted:', response.data);
          // Perform any necessary actions after successful deletion
        })
        .catch(error => {
          console.error('Error deleting book:', error);
        });
    },
  }

</script>

<!-- sdgfdshjgsdghdfsg -->
