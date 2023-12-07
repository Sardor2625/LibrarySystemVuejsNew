<template>
  <div class="container">
    <div class="card manage_student_div">
      <div class="card-header">
        <h4>Manage the students</h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Student id</th>
              <th>Student Info</th>
              <th>Title of the Book</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody v-if="ManageStudents.length > 0">
            <tr v-for="(student, index) in ManageStudents" :key="index">
              <td>{{ student.id }}</td>
              <td>{{ student.StudentInfo }}</td>
              <td>{{ student.TitleBook }}</td>
              <td>{{ student.Duration }}</td>
              <td>{{ student.Status }}</td>
              <td>
                <button @click="updateStatus(student.id, 'Active')">Active</button>
                <button @click="updateStatus(student.id, 'Delayed')">Delayed</button>
              </td>
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
  name: 'ManageStudents',
  data() {
    return {
      ManageStudents: []
    }
  },
  mounted() {
    this.getManageStudents()
  },
  methods: {
    getManageStudents() {
      axios.get("http://127.0.0.1:5208/api/ManageStudents")
        .then(res => {
          this.ManageStudents = res.data;
          console.log(res.data)
        })
    },
    updateStatus(studentId, newStatus) {
      axios.put(`http://127.0.0.1:5208/api/ManageStudents/${studentId}`, { Status: newStatus })
        .then(res => {
          this.getManageStudents();
          console.log(`Status updated to ${newStatus} for student ID ${studentId}`);
        })
        .catch(err => {
          console.error("Error updating status:", err);
        });
    }
  },
}
</script>

<style>
.manage_student_div {
  margin-left: 200px;
}
</style>
