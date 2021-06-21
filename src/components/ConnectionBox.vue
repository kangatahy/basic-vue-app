<template lang="">
    <div>
            <div v-if="!isConnected">
                <input type="text" v-model="login" >
                <input type="password" v-model="password" >
                <input type= "button" @click="verification" value="Connexion">
                <transition name="slide-fade">
                    <p v-if="failedLogin">Mauvais Login ou mot de passe</p>
                </transition>
            </div>

            <div v-else >
                <h1>Salut {{login}}</h1>
                <input type="button" @click="deconnexion" value="Déconnexion">
            </div>

    </div>
</template>

<script>
export default {
  name: "ConnectionBox",
  data() {
    return {
      login: "",
      password: "",
      isConnected: false,
      failedLogin: false,
    };
  },
  methods: {
    verification: function () {
      if (this.login == "khelvin" && this.password == "khelvin") {
        this.isConnected = true;
        this.$cookie.set("logged-in", "true", 1);
        this.failedLogin = false
        console.log("je suis connecté");
      } else {
        return this.failedLogin = true;
      }
    },
    deconnexion: function () {
      this.isConnected = false;
      this.$cookie.delete("logged-in");
    },
  },
};
</script>

<style lang="fr">
    
</style>