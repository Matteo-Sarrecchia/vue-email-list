const {createApp} = Vue;

createApp ({
    data () {
        return {
            listEmail: [],
            emailUser: "",
        }
    },
    mounted() {
        for (i = 0; i < 10; i++){
           axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then (
            risultato => {
                    console.log(risultato.data.response)
                    this.emailUser = risultato.data.response
                    this.listEmail.push(this.emailUser)
                    
                } 
            ) 
        }
        console.log(this.listEmail)
        
    }
}).mount("#app")