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
        <hr>
      <div v-for="c in investor.contracts" :key="c.index">
        {{c.contractNum}} <br>
        {{c.plan}} <br>
        {{c.contractAmt}} <br>
        {{c.maturityDate | moment("DD-MMM-YYYY")}} <br>
        {{c.maturityPayout}} <br>
        {{c.contractAmt}} <br>

        <hr>
        <div>
          <h5>Payout Plan</h5>
        </div>
        <div v-for="pplan in c.payoutPlan" :key="pplan.index">
          {{pplan.planPayoutDate | moment("DD-MMM-YYYY")}} <br>
          {{pplan.planPayoutAmt}} <br>
          <hr>
        </div>

        <div>
          <h5>Payout Actuals</h5>
        </div>
        <div v-for="pactual in c.payoutActual" :key="pactual.index">
          <span>Payout Date: </span>{{pactual.actualPayoutDate | moment("DD-MMM-YYYY")}}
          <span>Payout Amount: </span>{{pactual.actualPayoutAmt}} <br>
          <span>Cheque Number: </span>{{pactual.chequeNum}} <br>
          <span>Payment Status: </span>{{pactual.status}} <br>
          <hr>
        </div>

      </div>
      
      
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
  // import db from './firebaseInit'
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
          investorID: '008',
          name: 'Arthur Aztech',
          address: {
            blk: '1',
            street: 'Desert Road',
            unit: 'B1-01',
            country: 'Afghanistan',
            postcode: '1007900'
          },
          contracts: [
            {
              contractNum: "2000001493",
              plan: "Titanium 60 Series 2",
              contractAmt: 6000,
              maturityDate: new Date('8/14/2018'),
              maturityPayout: 6210,
              payoutPlan : [
                { 
                  planPayoutDate: new Date('3/1/2018'),
                  planPayoutAmt: 1000
                },
                { 
                  planPayoutDate: new Date('4/4/2018'),
                  planPayoutAmt: 1000
                },
                { 
                  planPayoutDate: new Date('5/5/2018'),
                  planPayoutAmt: 1000
                },
                { 
                  planPayoutDate: new Date('6/6/2018'),
                  planPayoutAmt: 1000
                },
                { 
                  planPayoutDate: new Date('7/7/2018'),
                  planPayoutAmt: 1000
                },
                { 
                  planPayoutDate: new Date('8/8/2018'),
                  planPayoutAmt: 1000
                },
              ],
              payoutActual : [
                { 
                  actualPayoutDate: new Date('3/3/2018'),
                  actualPayoutAmt: 1000,
                  chequeNum: "20031",
                  status: "cleared"
                },
                { 
                  actualPayoutDate: new Date('4/4/2018'),
                  actualPayoutAmt: 1000,
                  chequeNum: "20041",
                  status: "cleared"
                }
              ]

            }
          ]
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