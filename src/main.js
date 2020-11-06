import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

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

    class User{
      constructor(id){
        this.id=id;
      }
    }

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.$store.dispatch('isLoginedAction',new User(user.uid))
      }
    })

    
    this.$store.dispatch('intializeMessages')
    

    

      // Initialize Firebase
      // firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    
  }
}).$mount('#app');
