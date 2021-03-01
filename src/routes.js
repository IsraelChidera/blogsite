import showBlog from './components/showBlog.vue'
import addBlog from './components/addBlog.vue'

export default [
    {path: '/', name: 'home', component: showBlog},
    {path: '/add', name: 'add', component: addBlog}
]