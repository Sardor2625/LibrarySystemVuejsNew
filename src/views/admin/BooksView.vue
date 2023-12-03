<template>
    <div class="container">
        <div class="card">

    <div class="card-header">
      <input type="text" v-model="searchQuery" placeholder="Search...">
      <select v-model="selectedCategory" @change="filterBooksByCategory">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
      <input type="text" v-model="selectedPublicationYear" placeholder="Publication Year" @input="filterBooksByPublicationYear">
      <input type="text" v-model="searchByAuthor" placeholder="Author" @input="filterBooksByAuthor">
    </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Publication Year</th>
            <th>Language</th>
            <th>Author</th>
            <th>Category</th>
            <th>Copies Owned</th>
            <th>Actions</th>
            <th><button type="button" class="btn btn-primary">Refresh</button></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.publicationYear }}</td>
            <td>{{ book.lang }}</td>
            <td>{{ book.author }}</td>
            <td>{{ getCategoryName(book.categoryId) }}</td>
            <td>{{ book.copiesOwned }}</td>
            <td>
              <span style="cursor: pointer; color:rgb(255, 183, 0);" @click="editBook(book)" class="material-icons">edit</span>
              <span style="cursor: pointer; color: red;" @click="deleteBook(book.id)" class="material-icons">delete</span>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="card">
      <div v-if="editingBook">
        <h2>Edit Book</h2>
        <input v-model="editedBook.title" type="text" placeholder="Title">
        <input v-model="editedBook.publicationYear" type="text" placeholder="Publication Year">
        <input v-model="editedBook.author" type="text" placeholder="Author">
        <input v-model="editedBook.lang" type="text" placeholder="Lang">
        <select v-model="editedBook.categoryId">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
        <input v-model="editedBook.copiesOwned" type="text" placeholder="Copies Owned">
        <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
        <button type="button" class="btn btn-success" @click="updateBook">Save</button>

      </div></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [
          { id: 1, title: 'Hamsa', publicationYear: 2020,lang:'uzb', author: 'Avloniy', categoryId: 1, copiesOwned: 5 },
          { id: 2, title: 'Boburnoma', publicationYear: 2018,lang:'eng', author: 'Alisher', categoryId: 2, copiesOwned: 3 },
          { id: 3, title: 'O`tkan kunlar', publicationYear: 2018,lang:'uzb', author: 'Bobur', categoryId: 3, copiesOwned: 3 },
          { id: 4, title: 'Atom', publicationYear: 2018,lang:'uzb', author: 'Abdulla', categoryId: 4, copiesOwned: 3 },
          { id: 5, title: 'Habits', publicationYear: 2018,lang:'uzb', author: 'Fitrat', categoryId: 2, copiesOwned: 3 },
          { id: 6, title: 'Molxona', publicationYear: 2018,lang:'uzb', author: 'Hamid', categoryId: 1, copiesOwned: 3 },


          // Add more book data as needed
        ],
        categories: [
          { id: 1, name: 'Horror' },
          { id: 2, name: 'Historical' },
          { id: 3, name: 'Romance' },
          { id: 4, name: 'Western' },

          // Add more categories as needed
        ],
        editingBook: null,
        editedBook: { id: null, title: '', publicationYear: '',lang:'', author: '', categoryId: '', copiesOwned: '' },
        searchQuery: '',
        selectedCategory: '',
        selectedPublicationYear: '',
        searchByAuthor: ''
      };
    },
    computed: {
      filteredBooks() {
        let filtered = this.books;
  
        if (this.selectedCategory !== '') {
          filtered = filtered.filter(book => book.categoryId === parseInt(this.selectedCategory));
        }
  
        if (this.selectedPublicationYear !== '') {
          filtered = filtered.filter(book => book.publicationYear.toString() === this.selectedPublicationYear);
        }
  
        if (this.searchByAuthor !== '') {
          filtered = filtered.filter(book => book.author.toLowerCase().includes(this.searchByAuthor.toLowerCase()));
        }
  
        return filtered.filter(book =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      editBook(book) {
        this.editingBook = book;
        this.editedBook = { ...book };
      },
      updateBook() {
        const index = this.books.findIndex(book => book.id === this.editedBook.id);
        this.books.splice(index, 1, this.editedBook);
        this.cancelEdit();
      },
      deleteBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
        this.cancelEdit();
      },
      cancelEdit() {
        this.editingBook = null;
        this.editedBook = { id: null, title: '', publicationYear: '',lang: '', author: '', categoryId: '', copiesOwned: '' };
      },
      filterBooksByCategory() {
        // Logic to filter books by category
      },
      filterBooksByPublicationYear() {
        // Logic to filter books by publication year
      },
      filterBooksByAuthor() {
        // Logic to filter books by author
      },
      getCategoryName(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.name : '';
      }
    }
  };
  </script>
  
  <style>

</style>