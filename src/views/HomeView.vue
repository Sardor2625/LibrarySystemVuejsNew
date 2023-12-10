<template>
<<<<<<< HEAD
    <div class="container">
      <div class="card student_table">
        <div class="card-header">
          <h4>
            Student Infoo
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
              <td>{{ StudentInfo.firstName  }}</td>
              <td>{{ StudentInfo.lastName  }}</td>
              <td>{{ StudentInfo.phone  }}</td>
              <td>{{ StudentInfo.email  }}</td>
              <td>{{ StudentInfo.idCard  }}</td>
              <td>{{ StudentInfo.passport   }}</td>
              <td>{{ StudentInfo.role  }}</td>
            </tr>
            </tbody>
          </table>
=======
  <div class="container">
    <div class="card student_table">
      <div class="card-header">
        <h4>
          Personal information
        </h4>
      </div>
      <div class="card-body ">
        <!-- start  -->
        <div class="col-lg-10">
          <h2 class="page-title text-center"></h2>
          <div class="table-responsive-sm">
            <table class="table table-bordered table-hover">
              <tbody>
                <tr>
                  <td>First name</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.FirstName }}</th>
                </tr>
                <tr>
                  <td>Last name</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.LastName }}</th>
                </tr>
                <tr>
                  <td>Phone</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.Phone }}</th>
                </tr>
                <tr>
                  <td>Email</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.Email }}</th>
                </tr>
                <tr>
                  <td>Id card</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.IdCard }}</th>
                </tr>
                <tr>
                  <td>passport</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.Passport }}</th>
                </tr>
                <tr>
                  <td>role</td>
                  <th v-for="(StudentInfo, index) in this.StudentInfo" :key="index">{{ StudentInfo.Role }}</th>
                </tr>
              </tbody>
            </table>
          </div>

>>>>>>> 6435794 (Student books update)
        </div>
        <!-- end  -->
      </div>
    </div>
  </div>
</template>
  
<<<<<<< HEAD
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
=======
<script>
import axios from 'axios'
>>>>>>> 6435794 (Student books update)

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
      axios.get("http://127.0.0.1:5208/api/Book")
        .then(res => {

          this.StudentInfo = res.data;
          console.log(res.data)
        })
    }
  },
}
</script>

<style>
.student_table {
  margin-left: 200px;
}
</style>