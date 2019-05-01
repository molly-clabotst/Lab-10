import Router from 'vue-router'

// bringing in components
import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'

// connecting the components with the paths
export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/detail/:state',
            name:'detail',
            component: StateDetail
        }
    ]
})