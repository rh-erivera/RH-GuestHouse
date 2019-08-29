<template>
    <div class="root bg-black">
        <section class="bucket2 reveal">
            <p class="pb-12" id="bucket2Line1" ref="bucket2Line1">We are not a hotel.</p>
            <p id="bucket2Line2" ref="bucket2Line2">This is our house,</p>
            <p class="pb-12" id="bucket2Line3" ref="bucket2Line3">AND you are our guest.</p>
            <p id="bucket2Line4" ref="bucket2Line4">Everything is designed </p>
            <p id="bucket2Line5" ref="bucket2Line5">for privacy & comfort.</p>
        </section>
        <section class="bucket1">
            <img class="w-1/2" src="/RH-GH-Logo.png" alt="RH, The Guest House, At 55 Gans">
        </section>
    </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
    mounted() {
        window.addEventListener('load', () => {
            ScrollReveal({ reset: true, duration: 1500 })
            ScrollReveal().reveal('.reveal', {afterReveal: this.highlight, afterReset: this.reset})
        })
    },
    methods: {
        highlight (el) {
            this.$refs.bucket2Line1.style.color = 'white';
            setTimeout(() => {
                this.$refs.bucket2Line1.style.color = '#363636';
                this.$refs.bucket2Line2.style.color = 'white';
            }, 2500)
            setTimeout(() => {
                this.$refs.bucket2Line3.style.color = 'white';
            }, 3500)
            setTimeout(() => {
                this.$refs.bucket2Line2.style.color = '#363636';
                this.$refs.bucket2Line3.style.color = '#363636';
                this.$refs.bucket2Line4.style.color = 'white';
            }, 6000)
            setTimeout(() => {
                this.$refs.bucket2Line5.style.color = 'white';
            }, 7000)
            setTimeout(() => {
                this.$refs.bucket2Line4.style.color = '#363636';
                this.$refs.bucket2Line5.style.color = '#363636';
            }, 9500)
        },
        // reset (el) {
        //     this.$refs.bucket2Line4.style.color = '#363636';
        //     this.$refs.bucket2Line5.style.color = '#363636';
        // }
    }
}
</script>

<style>
section {
    height: 100vh;
    padding: 0 5%;
    display: flex;
    justify-content: center;
    scroll-snap-align: center;
}
p {
    color: #363636;
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 69.99pt;
    line-height: 59pt;
    text-transform: uppercase;
    transition: color 300ms linear;
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
</style>