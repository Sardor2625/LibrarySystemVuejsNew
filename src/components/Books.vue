<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>
            Books
          </h4>
  
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
            <tbody v-if="this.books.length > 0">
            <tr v-for="(book, index) in this.books" :key="index">
              <td>{{ book.id }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.publicationYear }}</td>
              <td>{{ book.language }}</td>
              <td>{{ book.categoryId }}</td>
              <td>{{ book.copiesOwned }}</td>
            </tr>
            </tbody>
            <!-- <tbody v-else>
                <tr>
                    <td colspan="6">Loading</td>
                </tr>
            </tbody> -->
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
  }
  </script>