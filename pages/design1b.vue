<template>
    <div class="root" id="root" ref="root"></div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$refs.root.style.backgroundImage = 'url(/design1b/slide2.jpg)';
        }, 2000)
        setTimeout(() => {
            this.$refs.root.style.backgroundImage = 'url(/design1b/slide3.jpg)';
        }, 2750)
        // setTimeout(() => {
        //     this.$refs.root.style.backgroundImage = 'url(/design1b/slide4.jpg)';
        // }, 6500)
    }
}
</script>

<style>
.root {
    background-image: url('/design1b/slide1.jpg');
    background-position: center;
    background-size: cover;
    height: 732px;
    animation: fadeIn 500ms linear;
    transition: all 500ms linear;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>