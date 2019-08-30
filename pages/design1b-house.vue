<template>
    <div class="root" id="root" ref="root">
        <div class="menu">
            <a href="/design1b-experience">THE EXPERIENCE</a><span>/</span>
            <a href="/design1b-rooms">ROOMS & RESIDENCE</a><span>/</span>
            <a href="/design1b-kitchen">THE KITCHEN</a><span>/</span>
            <a class="active" href="/design1b-house">HOUSE RULES</a><span>/</span>
            <a href="/design1b-inquiry">INQUIRY</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.root {
    background-image: url('/design1b/house.jpg');
    background-position: center;
    background-size: cover;
    height: 732px;
    animation: fadeIn 500ms linear;
    transition: all 500ms linear;
}
.menu {
    position: absolute;
    top: 23%;
    width: 100%;
    text-align: center;
    font-family: 'CaslonRH-Thin';
    font-size: 7pt;
    letter-spacing: .12em;
    line-height: 16pt;
    color: white;
}
.menu span {
    padding: 0 10px;
}
.active {
    color: #959595;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>