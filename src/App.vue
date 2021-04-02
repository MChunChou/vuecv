<template>    
  <div>    
    <Toggle />
    <Banner />
    <About />
    <Skills />
    <Projects />    
    <Contact />    
  </div>
</template>

<script>
import Toggle from './components/newToggle.vue';
import Banner from './components/Banner.vue';
import About from './components/About.vue';
// import Services from './components/Services.vue';
// import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',
  components: {
    Toggle,    
    Banner,
    About,    
    Contact,
    Skills,
    Projects,
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}

section {
  padding: 100px;
  min-height: 100vh;
}

p, pre {
  font-size: 1.1em;
  margin: 20px 0;
  font-weight: 300;
}

.btn {
  background: #00bcd4;
  color: #fff;
  padding: 10px 30px;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
}

.title {
  width: 100%;
  text-align: center;
}

.title h2 {
  position: relative;
  color: #00bcd4;
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: 1px;
}

.title p {
  max-width: 700px;
  display: inline-block;
}

.title h2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  width: 60px;
  height: 4px;
  background: #000;
}

.title.white h2,
.title.white p {
  color: #fff;
}

.title.white h2::before {
  background: #fff;
}

@media (max-width: 991px) {
  
  .sidebar  {
    width: 100%;
    padding: 40px;
  }

  .logoText {
    left:40px;    
  }

  .toggle {
    right: 40px;
  }

  .sci {
    left: 40px;;
  }

  section {
    padding: 40px;
  }

  .sidebar ul li a {
    font-size: 1.5em;
  }
}

@media (max-width: 500px){
  .services .content .servicesBx ,
  .work .content .workBx
  {
    padding: 30px 20px;
    max-width: 1010%;
    width: 100%;
    margin: 10px 0;
  }
}
</style>
