<template>
    <div class="root bg-black">
        <section class="bucket2 reveal">
            <p class="pb-12" id="bucket2Line1" ref="bucket2Line1">We are not a hotel.</p>
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
        window.addEventListener('load', () => {
            ScrollReveal({ reset: true, duration: 1500 })
            ScrollReveal().reveal('.reveal', {afterReveal: this.highlight, afterReset: this.reset})
        })
    },
    methods: {
        highlight (el) {
            this.$refs.bucket2Line1.style.color = 'white';
            this.$refs.bucket2Line1.style.fontSize = '53.5pt';
            setTimeout(() => {
                this.$refs.bucket2Line1.style.fontSize = '53pt';
                this.$refs.bucket2Line1.style.color = '#363636';
                this.$refs.bucket2Line2.style.color = 'white';
                this.$refs.bucket2Line2.style.fontSize = '53.5pt';
            }, 2500)
            setTimeout(() => {
                this.$refs.bucket2Line3.style.color = 'white';
                this.$refs.bucket2Line3.style.fontSize = '53.5pt';
            }, 4500)
            setTimeout(() => {
                this.$refs.bucket2Line2.style.color = '#363636';
                this.$refs.bucket2Line2.style.fontSize = '53pt';
                this.$refs.bucket2Line3.style.color = '#363636';
                this.$refs.bucket2Line3.style.fontSize = '53pt';
                this.$refs.bucket2Line4.style.color = 'white';
                this.$refs.bucket2Line4.style.fontSize = '53.5pt';
            }, 7000)
            setTimeout(() => {
                this.$refs.bucket2Line5.style.color = 'white';
                this.$refs.bucket2Line5.style.fontSize = '53.5pt';
            }, 9500)
            setTimeout(() => {
                this.$refs.bucket2Line4.style.color = '#363636';
                this.$refs.bucket2Line4.style.fontSize = '53pt';
                this.$refs.bucket2Line5.style.color = '#363636';
                this.$refs.bucket2Line5.style.fontSize = '53pt';
            }, 12000)
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
    padding: 5% 5%;
    height: 732px;
    display: flex;
    justify-content: center;
    scroll-snap-align: center;
}
p {
    color: #363636;
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 53pt;
    line-height: 42pt;
    text-transform: uppercase;
    transition: color 300ms linear, font-size 300ms linear;
    -webkit-transition: color 300ms linear, font-size 300ms linear;
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