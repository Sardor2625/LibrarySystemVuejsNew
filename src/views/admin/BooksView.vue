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
      
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Publication Year</th>
              <th>Language</th>
              <th>Category ID</th>
              <th>Copies Owned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in filteredBooks" :key="index">
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
      books: [],
      categories: [], // Assuming you have categories data
      searchQuery: '',
      selectedCategory: '',
      selectedLanguage: '',
      selectedPublicationYear: '',
      searchByAuthor: '',
      selectedCopiesOwned: null,
    }
  },
  mounted() {
    this.getBooks()
    // Fetch categories if needed
  },
  methods: {
    getBooks() {
      axios.get("http://127.0.0.1:5208/api/Book")
        .then(res => {
          this.books = res.data;
          console.log(res.data)
        })
    },
    filterBooks() {
      this.filteredBooks = this.books.filter(book => {
        const matchesCategory = !this.selectedCategory || book.categoryId === parseInt(this.selectedCategory);
        const matchesLanguage = !this.selectedLanguage || book.language.toLowerCase().includes(this.selectedLanguage.toLowerCase());
        const matchesPublicationYear = !this.selectedPublicationYear || book.publicationYear.toString() === this.selectedPublicationYear;
        const matchesAuthor = !this.searchByAuthor || book.author.toLowerCase().includes(this.searchByAuthor.toLowerCase());
        const matchesCopiesOwned = !this.selectedCopiesOwned || book.copiesOwned === parseInt(this.selectedCopiesOwned);

        return matchesCategory && matchesLanguage && matchesPublicationYear && matchesAuthor && matchesCopiesOwned;
      });
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
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
