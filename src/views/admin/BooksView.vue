<template>
  <Sidebar/>
  <div class="container books_section">
    <div class="card">
      <div class="card-header">
        <h4>Books</h4>
        <div class="search-container">
          <input type="text" v-model="searchQuery" placeholder="Search...">
          <button class="btn btn-primary" @click="search">Search</button>
          <button class="btn btn-danger" @click="resetSearch">Reset</button>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Publication Year</th>
              <th>Language</th>
              <th>Category ID</th>
              <th>Copies Owned</th>
              <th>Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody v-if="filteredBooks.length > 0">
            <tr v-for="(book, index) in filteredBooks" :key="index">
              <td>
                <template v-if="!book.isEditing">{{ book.title }}</template>
                <template v-else><input v-model="book.title" /></template>
              </td>
              <td>
                <template v-if="!book.isEditing">{{ book.publicationYear }}</template>
                <template v-else><input v-model="book.publicationYear" /></template>
              </td>
              <td>
                <template v-if="!book.isEditing">{{ book.language }}</template>
                <template v-else><input v-model="book.language" /></template>
              </td>
              <td>
                <template v-if="!book.isEditing">{{ book.categoryId }}</template>
                <template v-else><input v-model="book.categoryId" /></template>
              </td>
              <td>
                <template v-if="!book.isEditing">{{ book.copiesOwned }}</template>
                <template v-else><input v-model="book.copiesOwned" /></template>
              </td>
              <td>
                <template v-if="!book.isEditing">{{ book.count }}</template>
                <template v-else><input v-model="book.count" /></template>
              </td>
              
              <td>
                <button class="btn btn-primary" @click="editBook(book)">
                  <template v-if="!book.isEditing">Edit</template>
                  <template v-else>Save</template>
                </button>
                <button class="btn btn-danger" @click="deleteBook(book.id)">Delete</button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">No matching books found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Sidebar} from "@/components";

export default {
  name: 'Books',
  components: {Sidebar},
  data() {
    return {
      books: [],
      searchQuery: '',
      filteredBooks: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getAuthToken() {
      // Replace this with your actual logic to get the token
      return localStorage.getItem('token')
    },
    getBooks() {
      const authToken = this.getAuthToken();
      
      axios.get("http://localhost:5208/api/Book",{
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
    })
        .then(res => {
          this.books = res.data.map(book => ({ ...book, isEditing: false }));
          this.filteredBooks = res.data;
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    },
    search() {
      const query = this.searchQuery.toLowerCase().trim();
      if (query === '') {
        this.filteredBooks = this.books;
        return;
      }

      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.publicationYear.toString().includes(query) ||
        book.language.toLowerCase().includes(query) ||
        book.categoryId.toString().includes(query) ||
        book.copiesOwned.toString().includes(query)
      );
    },
    resetSearch() {
      this.searchQuery = '';
      this.filteredBooks = this.books;
    },
    editBook(book) {
      const authToken = this.getAuthToken()
  if (book.isEditing) {
    axios.put(`http://localhost:5208/api/Book/${book.id}`, {
      title: book.title,
      publicationYear: book.publicationYear,
      language: book.language,
      categoryId: book.categoryId,
      copiesOwned: book.copiesOwned
     
    },{
      headers: {
        'Authorization':`Bearer ${authToken}`,
      },
    })
      .then(response => {
        console.log('Book updated successfully:', response.data);
        book.isEditing = false;
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  } else {
    book.isEditing = true; 
  }
},
    deleteBook(bookId) {
      const authToken = this.getAuthToken();
      axios.delete(`http://localhost:5208/api/Book/${bookId}`,{
        headers: {
       'Authorization':`Bearer ${authToken},`
        },
      })
        .then(() => {
          this.books = this.books.filter(book => book.id !== bookId);
          this.filteredBooks = this.filteredBooks.filter(book => book.id !== bookId);
        })
        .catch(error => {
          console.error('Error deleting book:', error);
        });
    },
  },
};
</script>

<style scoped>
.books_section{
 padding-left: 200px;
}

</style>
