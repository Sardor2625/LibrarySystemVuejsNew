<template>
  <div class="card">
    <div class="card-header">
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
  
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publication Year</th>
          <th>Language</th>
          <th>Category</th>
          <th>Copies Owned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in filteredBooks" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.publicationYear }}</td>
          <td>{{ book.language }}</td>
          <td>{{ getCategoryName(book.categoryId) }}</td>
          <td>{{ book.copiesOwned }}</td>
          <td>
            <button @click="editBook(book)">Edit</button>
            <button @click="deleteBook(book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
    };
  },
  mounted() {
    this.fetchBooks();
    // Fetch categories if needed
  },
  methods: {
    fetchBooks() {
      axios.get('api/books')
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          console.error('Error fetching books: ', error);
        });
    },
    filterBooks() {
      // Implement filtering logic based on selected filters
      // Perform filtering on this.books array and update accordingly
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(category => category.id === categoryId);
      return category ? category.name : '';
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
