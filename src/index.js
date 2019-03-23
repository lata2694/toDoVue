import vue from 'vue'
import AppComponent from './component/AppComponent.vue'

new vue({
    render: h => h(AppComponent)
}).$mount('#app')