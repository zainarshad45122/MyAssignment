import TaskHome from './TaskHome.vue'
import AddTask from './AddTask.vue'
import ViewTask from './ViewTask.vue'

export const routes = [
    {path: '' , component: TaskHome},
    {path: '/Add-Task' , component: AddTask},
    {path: '/View-Task/:id/:title/:description/:startDate/:endDate', 
    name: 'View',
    props: true,
    component: ViewTask},

]