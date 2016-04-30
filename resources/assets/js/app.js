import Vue from 'vue'
import store from './Vuex/store'
import App from './Components/App.vue'

// make sure to set this synchronously immediately after loading Vue
Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        app: App,
        display: require('./Components/Display.vue'),
        increment: require('./Components/Increment.vue')
    },
    store
});
