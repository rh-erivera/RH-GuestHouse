<template>
  <div class="container">
    <div>
      <h1>RH GUESTHOUSE</h1>
      <h2>DESIGN CONCEPTS</h2>
      <a href="/design1">Design 1 - Film</a>
      <a href="/design2">Design 2 - Scroll</a>
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container h1 {
  font-size: 30pt;
  font-weight: unset;
}
.container a {
  padding: 20px 0;
  color: #D5D5D5;
  text-decoration: none;
}
.container a:hover {
  color: #000;
}
.container a {
  transition: color 500ms ease-in;
  -webkit-transition: color 500ms ease-in;
}
</style>
