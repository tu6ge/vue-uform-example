<script setup>
// init form values
const formValues = {
  username: "",
  password: "",
};

// handler form submit event
function doLogin(data) {
  alert(JSON.stringify(data, null, 2));
}
</script>
<template>
  <u-form :values="formValues" @submit="doLogin">
    <u-field
      name="username"
      label="Username"
      validation="required"
      v-slot="{ value, update }"
    >
      <input f-model />
    </u-field>
    <u-field
      name="password"
      label="Password"
      validation="required"
      v-slot="{ value, update }"
    >
      <input type="password" f-model />
    </u-field>
    <u-submit>Login</u-submit>
    <!-- or -->
    <u-submit custom v-slot="{ submit }">
      <button type="button" :style="{color:'blue'}" @click="submit">Login</button>
    </u-submit>
  </u-form>
</template>