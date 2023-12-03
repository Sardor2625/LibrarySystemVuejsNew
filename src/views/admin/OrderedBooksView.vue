<template>
    <div>
      <h2>Ordered Books</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orderedBooks" :key="order.bookID">
            <td>{{ order.bookID }}</td>
            <td>{{ order.title }}</td>
            <td>{{ order.author }}</td>
            <td>{{ order.orderDate }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orderedBooks: [
          { bookID: 1, title: 'Book A', author: 'Author A', orderDate: '2023-11-01', status: 'Pending' },
          { bookID: 2, title: 'Book B', author: 'Author B', orderDate: '2023-11-05', status: 'Delivered' },
          // Add more ordered books as needed
        ]
      };
    }
  };
  </script>
  