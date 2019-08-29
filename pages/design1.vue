<template>
    <div class="root" id="root" ref="root"></div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$refs.root.style.backgroundImage = 'url(/slide2.jpg)';
        }, 2000)
        setTimeout(() => {
            this.$refs.root.style.backgroundImage = 'url(/slide3.jpg)';
        }, 4000)
        setTimeout(() => {
            this.$refs.root.style.backgroundImage = 'url(/slide4.jpg)';
        }, 7000)
    }
}
</script>

<style>
.root {
    background-image: url('/slide1.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;
    animation: fadeIn 500ms linear;
    transition: all 500ms linear;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>