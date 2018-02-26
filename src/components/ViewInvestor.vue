<template>
  <div id="view-investor">
    <ul class="collection with-header">
      <!-- <li class="collection-header"><h4>{{name}}</h4></li>
      <li class="collection-item">Employee ID#: {{employee_id}}</li>
      <li class="collection-item">Department: {{dept}}</li>
      <li class="collection-item">Position: {{position}}</li> -->
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <!-- <button @click="deleteEmployee" class="btn red">Delete</button> -->

    <!-- <div class="fixed-action-btn">
      <router-link :to="{ name: 'edit-employee', params: { investorID: investorID }}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div> -->
  </div>
</template>

<script>
  // import db from './firebaseInit'
  export default {
    name: 'view-investor',
    data () {
      return {
        
      }
    }
   
  }
</script>
