<template></template>

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
  beforeCreate() {
    mgr.signinRedirect();
  }
};
</script>

