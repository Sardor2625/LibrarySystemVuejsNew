// adminService.js (Service file for admin-related API calls)

// Example import or configuration for Axios or other HTTP client
// import axios from 'axios';
// axios.defaults.baseURL = 'https://your-api-url.com';

const adminService = {
    async fetchAdmins() {
      // Simulating fetching admins API call (replace with actual API call)
      // For example:
      // return axios.get('/admin');
      return new Promise((resolve, reject) => {
        // Simulating fetching admins after 1 second (replace with actual API call)
        setTimeout(() => {
          // Assuming API returns a list of admins
          const admins = [
            { id: 1, name: 'Admin 1' },
            { id: 2, name: 'Admin 2' },
            // ...other admin data
          ];
          resolve(admins);
        }, 1000);
      });
    },
  
    // Add other admin-related API functions here
  };
  
  export default adminService;
  