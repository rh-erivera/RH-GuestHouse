<template>
    <div class="root bg-black">
        <section class="bucket2 reveal">
            <p class="pb-12" id="bucket2Line1" ref="bucket2Line1" style="opacity: 1;">We are not a hotel.</p>
            <p id="bucket2Line2" ref="bucket2Line2">This is our house,</p>
            <p id="bucket2Line3" ref="bucket2Line3">AND you are our guest.</p>
            <p id="bucket2Line4" ref="bucket2Line4">Everything is designed</p>
            <p id="bucket2Line5" ref="bucket2Line5">for privacy & comfort.</p>
        </section>
        <!-- <section class="bucket1">
            <img class="w-1/2" src="/RH-GH-Logo.png" alt="RH, The Guest House, At 55 Gans">
        </section> -->
    </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
    mounted() {
        // window.addEventListener('load', () => {
        //     ScrollReveal({ reset: true, duration: 1500 })
        //     ScrollReveal().reveal('.reveal', {afterReveal: this.highlight, afterReset: this.reset})
        // })
        setTimeout(() => {
            this.$refs.bucket2Line1.style.color = '#212121';
            this.$refs.bucket2Line2.style.opacity = '1';
        }, 1000)
        setTimeout(() => {
            this.$refs.bucket2Line3.style.opacity = '1';
        }, 2000)
        setTimeout(() => {
            this.$refs.bucket2Line2.style.color = '#212121';
            this.$refs.bucket2Line3.style.color = '#212121';
            this.$refs.bucket2Line4.style.opacity = '1';
        }, 3500)
        setTimeout(() => {
            this.$refs.bucket2Line5.style.opacity = '1';
        }, 4500)
        setTimeout(() => {
            this.$refs.bucket2Line4.style.color = '#212121';
            this.$refs.bucket2Line5.style.color = '#212121';
        }, 5500)
    }
}
</script>

<style>
section {
    padding: 5% 5%;
    height: 732px;
    display: flex;
    justify-content: center;
    scroll-snap-align: center;
}
p {
    /* color: #212121; */
    color: white;
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 54pt;
    line-height: 42pt;
    text-transform: uppercase;
    transition: all 300ms linear;
    /* -webkit-transition: color 300ms linear, font-size 300ms linear; */
    opacity: 0;
}
.root {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
}
.bucket1 {
    align-items: center;
}
.bucket2 {
    flex-direction: column;
}
#bucket2Line1 {
    animation: fadeIn 500ms linear;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>