<template>
    <div class="container">
      <div class="card student_table">
        <div class="card-header">
          <h4>
            Student Info
          </h4>
  
        </div>
        <div class="card-body ">
  
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>First name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Id card</th>
              <th>passport </th>
              <th>role</th>
            </tr>
  
            </thead>
            <tbody>
            <tr v-for="(StudentInfo, index) in this.StudentInfo" :key="index">
              <td>{{ StudentInfo.FirstName  }}</td>
              <td>{{ StudentInfo.LasyName  }}</td>
              <td>{{ StudentInfo.Phone  }}</td>
              <td>{{ StudentInfo.Email  }}</td>
              <td>{{ StudentInfo.IdCard  }}</td>
              <td>{{ StudentInfo.Passport   }}</td>
              <td>{{ StudentInfo.Role  }}</td>
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
    name: 'StudentInfo',
    data() {
      return {
        StudentInfo: []
      }
    },
    mounted() {
      this.getStudentInfo()
    
    },
    methods: {
      getStudentInfo() {
        axios.get("http://localhost:5208/api/StudentInfo")
            .then(res => {
              this.StudentInfo = res.data;
              console.log(res.data)
            })
      }
    },
  }
  </script>

  <style>
  .student_table{
    margin-left: 200px;
  }
</style>