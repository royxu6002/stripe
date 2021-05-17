<template>
    <div>
    <Header v-if="!$route.meta.header" />
    <router-view></router-view>
    <Footer v-if="!$route.meta.footer" />
    </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
    name: "App",
    components: {
        Header,
        Footer
    }
}
</script>
<style scoped>


</style>
