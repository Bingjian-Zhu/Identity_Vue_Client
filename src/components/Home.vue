<template>
  <div>
    <button @click="api">调用API</button>
    <button @click="logout">退出登录</button>
    <pre>{{res}}</pre>
  </div>
</template>

<script>
import Oidc from "oidc-client";

var config = {
  authority: "http://localhost:5000",
  client_id: "js",
  redirect_uri: "http://localhost:5003/CallBack",
  response_type: "id_token token",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:5003/"
};
var mgr = new Oidc.UserManager(config);
export default {
  name: "Home",
  data() {
    return {
      res: "My Home"
    };
  },

  methods: {
    api() {
var that=this;
      mgr.getUser().then(function(user) {
        var url = "http://localhost:5001/identity";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
           that.res = (xhr.status, JSON.parse(xhr.responseText))
        };
        xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
        xhr.send();
      });
    },
    logout() {
      mgr.signoutRedirect();
    }
  },
  mounted() {
    var that=this;
    mgr.getUser().then(function(user) {
      if (user) {
        // this.res = ("User logged in", user.profile);
        that.res = ("User logged in", user.profile);
      } else {
         that.res = ("User not logged in");
      }
    });
  }
};
</script>

<style scoped>
</style>
