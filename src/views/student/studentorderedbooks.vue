<template>
    <div class="container">
      <div class="card manage_student_div">
        <div class="card-header">
          <h4>Ordered Books</h4>
        </div>
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Student Info</th>
                <th>Taking Date</th>
                <th>Returning Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="OrderedBooks.length > 0">
              <tr v-for="(book, index) in OrderedBooks" :key="index">
                <td>{{ book.title }}</td>
                <td>{{ book.StudentInfo }}</td>
                <td>{{ book.TakingDate }}</td>
                <td>{{ book.ReturningDate }}</td>
                <td>{{ book.action }}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="6">Loading</td>
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
    name: 'OrderedBooks',
    data() {
      return {
        OrderedBooks: []
      }
    },
    mounted() {
      this.getOrderedBooks()
    },
    methods: {
      getOrderedBooks() {
        axios.get("http://127.0.0.1:5208/api/OrderedBooks")
          .then(res => {
            this.OrderedBooks = res.data;
            console.log(res.data)
          })
      },
    },
  }
  </script>
  
  <style>
  .manage_student_div {
    margin-left: 200px;
  }
  </style>
  