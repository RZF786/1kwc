import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewInvestor from '@/components/ViewInvestor'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/:investorID',
      name: 'view-investor',
      component: ViewInvestor
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    }
  ]
})