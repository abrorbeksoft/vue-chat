import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created(){

    firebase.initializeApp({
        apiKey: "AIzaSyBTB3GD7IInFF5ic1ivWWPVyhttUo4h6y0",
        authDomain: "simple-base-85e42.firebaseapp.com",
        databaseURL: "https://simple-base-85e42.firebaseio.com",
        projectId: "simple-base-85e42",
        storageBucket: "simple-base-85e42.appspot.com",
        messagingSenderId: "703352671672",
        appId: "1:703352671672:web:c6678dec737fa09809d34d",
        measurementId: "G-DXM572TEFM"
    });

      // Initialize Firebase
      // firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    
  }
}).$mount('#app');
