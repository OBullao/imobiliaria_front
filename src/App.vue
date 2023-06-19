<template>
 
  <router-view/>
</template>

<style lang="scss">

*{
  background-color: #4a4a4a;
}

// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0080ff;
}


</style>
