import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false 

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  Routes,
  mode: 'history'
})

// Vue.directive("rainbow", {
//   bind(el){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

// Vue.directive("theme",{
//   bind(el,binding){
//     if(binding.value=='wide'){
//       el.style.maxWidth = "1200px";
//     }
//     else if(binding.value=='narrow'){
//       el.style.maxWidth = "560px";
//     }
//     if(binding.arg == 'column'){
//       el.style.background = '#ddd';
//       el.style.padding = "20px"
//     }
//   }
// })

// Vue.filter("toUpperCase",function(val){
//   return val.toUpperCase();
// })

// Vue.filter("slice", function(val){
//   return val.slice(0,100) + " . . .";
// })

new Vue({ 
  render: h => h(App),
  router
}).$mount('#app') 
