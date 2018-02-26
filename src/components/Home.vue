<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Investors</h4></li>
      <li v-for="investor in investors" v-bind:key="investor.index" class="collection-item">
        {{investor.investorID}}
        {{investor.name}} <br>
        {{investor.address.blk}} {{investor.address.street}} <br>
        {{investor.address.unit}} <br>
        {{investor.address.country}} {{investor.address.postcode}}

        <router-link class="secondary-content" v-bind:to="{ name: 'view-investor', params: { investorID: investor.investorID }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
    <!-- <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div> -->
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'home',
    data () {
      return {
        investors: [],
        loading: true
      }
    },
    created () {

      let investors = [
        {
          investorID: '001',
          name: 'John Rambo',
          address: {
            blk: '1',
            street: 'Desert Road',
            unit: 'B1-01',
            country: 'Afghanistan',
            postcode: '1007900'
          }
        },
        {
          investorID: '002',
          name: 'Lara Croft',
          address: {
            blk: '2',
            street: 'Tomb Road',
            unit: 'B10-08',
            country: 'Egypt',
            postcode: '120009'
          }
        }
      ]

      this.investors = investors
      // db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
      //   this.loading = false
      //   querySnapshot.forEach((doc) => {
      //     const data = {
      //       'id': doc.id,
      //       'employee_id': doc.data().employee_id,
      //       'name': doc.data().name,
      //       'dept': doc.data().dept,
      //       'position': doc.data().position
      //     }
      //     this.employees.push(data)
      //   })
      // })
    }
  }
</script>