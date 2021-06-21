<template lang="">
    <div>
            <div v-if="!isConnected">
                <input type="text" v-model="login" >
                <input type="password" v-model="password" >
                <input type= "button" @click="verification" value="Connexion">
            </div>

            <div v-else >
                <h1>Salut {{login}}</h1>
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
    };
  },
  methods: {
    verification: function () {
      if (this.login == "khelvin" && this.password == "khelvin") {
        this.isConnected = true;
        this.$cookie.set("logged-in", "true", 1);
        console.log("je suis connecté");
      }
    },
  },
};
</script>

<style lang="fr">
</style>