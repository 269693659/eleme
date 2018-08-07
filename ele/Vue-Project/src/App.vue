<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppHeader from "@/components/common/home/AppHeader";
import AppNav from "@/components/common/home/AppNav";
export default {
  name: "App",
  components: {
    AppHeader,
    AppNav
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  padding: 44px 0;
  box-sizing: border-box;
}
</style>
