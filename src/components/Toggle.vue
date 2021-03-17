<template> 
  <div>
    <div class="toggle" v-bind:class="{ active: toggle }" v-on:click="handleToggle"></div>
    <div class="sidebar" v-bind:class="{ active: toggle }">
      <ul>
        <li><a href="#home" v-on:click="handleToggle">Home</a></li>
        <li><a href="#about" v-on:click="handleToggle">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work" v-on:click="handleToggle">Work</a></li>
        <li><a href="#contact" v-on:click="handleToggle">Contack</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style>
.toggle {
  position: fixed;
  top: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  background: #000 url("../assets/menu.png");
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 1000;
}

.toggle.active {
  background: #000 url("../assets/close.png");
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
}

section {
  padding: 100px;
  min-height: 100vh;
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 500px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
}

.logoText {
  position: absolute;
  top: 40px;
  left: 100px;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #333;
  color: #fff;
  padding: 0 5px;
}

p {
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

.sidebar {
  position: fixed;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 40px;
  z-index: 100;
  right: -100%;
}

.sidebar.active {
  right: 0;
}

.sidebar ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sidebar ul li {
  list-style: none;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  margin: 10px 0;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sidebar ul li a:hover {
  color: #00bcd4;
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
