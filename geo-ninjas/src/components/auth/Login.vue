<template>
    <div class="login container">
        <form action="" class="card-panel">
        <h2 class="center deep-purple-text">Login</h2>
        <div class="field">
                <label for="email">Email: </label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <router-link :to="{ name: 'Signup'}"><p class="sign">Don't have an account? Signup here!</p></router-link>
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
            
            <div class="field center">
                <button @click.prevent="login" class="btn deep-purple">Login</button>
            </div>
        </form>
    </div>

</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data(){
        return{
            email: null,
            password: null,
            feedback: null,
        }
    },
    methods: {
        login(){
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred => {
                   console.log(cred.user)
                   this.$router.push({ name: 'Gmap'}) 
                }).catch( err => {
                    this.feedback= err.message
                })
                
                this.feedback = null    
            } else {
                this.feedback = "Plis fill in both fields"
            }
        }

    }
    
}
</script>

<style>

.login{
    max-width: 400px;
    margin-top: 60px;
}

.login h2{
    font-size: 2.4em;
}

.login .field{
    margin-bottom: 16px;
}

.sign {
    font-size: 0.8em;
}

</style>