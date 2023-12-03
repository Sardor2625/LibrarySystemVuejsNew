<template>
	<main>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Manage The Students
                </h4>
               
            </div>
            <div class="card-body ">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Student id</th>
                            <th>Student Info</th>
                            <th>Title of the book</th>
                            <th>Duraction</th>
                            <th>Status
								<!-- <div class="btn-group" role="group" id="toolBtns">
  <button class="btn" type="button" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }">Btn1</button>
  <button class="btn" type="button" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }">Btn2</button>
  <button class="btn" type="button" @click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }">Btn3</button></div>
</div> -->
							</th>
							
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.id }}</td>
                            <td>{{ student.info }}</td>
                            <td>{{ student.bookTitle }}</td>
                            <td>{{ student.duration }}</td>
                            <td>{{ student.status }}</td>
                        </tr>
                    </tbody>
                   
                </table>
            </div>
        </div>
    </div>
</main>
</template>

<script>
// import axios from 'axios'

export default {
    data() {
      return {
        students: [
          {
            id: 1,
            info: 'John Doe, Class 10',
            bookTitle: 'Book A',
            duration: '2 weeks',
            status: 'Borrowed'
          },
          {
            id: 2,
            info: 'Alice Johnson, Class 12',
            bookTitle: 'Book B',
            duration: '3 weeks',
            status: 'Returned'
          },
          // Add more students as needed
        ]
      };
    }
    // name: 'students',
    // data() {
    //     return {
    //         students: []
    //     }
    // },
    // mounted() {

    //     this.getStudents();
        // console.log('i am here')
    // },
    // methods: {
    //     getbooks() {
    //         axios.get('').then(res => {
    //             this.students = res.data.data
    //             //   console.log( this.students)
    //         });
    //     }
    // },
// 	var vm = new Vue({
// 	 el: '#toolBtns',
// 	 data: {
//  		activeBtn:''
// 	 }
//  });
}
</script>

<style>
.active{
  background-color:red;
}
</style>
<!-- 


<template>
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Info</th>
            <th>Title of the Book</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.id }}</td>
            <td>{{ student.info }}</td>
            <td>{{ student.bookTitle }}</td>
            <td>{{ student.duration }}</td>
            <td>{{ student.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        students: [
          {
            id: 1,
            info: 'John Doe, Class 10',
            bookTitle: 'Book A',
            duration: '2 weeks',
            status: 'Borrowed'
          },
          {
            id: 2,
            info: 'Alice Johnson, Class 12',
            bookTitle: 'Book B',
            duration: '3 weeks',
            status: 'Returned'
          },
          // Add more students as needed
        ]
      };
    }
  };
  </script> -->
  