<template>
  <div
    class="toggle"
    v-bind:class="{ scroll: scrollFlag, active: active }"   
    @mouseleave="active=false" 
    @click="active=!active"      
  >
    <div class="sidebar">
      <ul>
        <li><a href="#home" @click="handleToggle">Home</a></li>
        <li><a href="#about" @click="handleToggle">About</a></li>
        <li><a href="#skills" @click="handleToggle">Skills</a></li>
        <li><a href="#projects" @click="handleToggle">Projects</a></li>
        <li><a href="#contact" @click="handleToggle">Contack</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeUnmount, onMounted } from "vue";

export default {
  setup() {
    const windowWidth = document.documentElement.clientWidth;
    const scrollFlag = ref(windowWidth < 500 ? true : false);
    const active = ref(windowWidth < 500 ? false : true);

    onMounted(() => {
      if (windowWidth > 500) {
        const windowHeight = document.documentElement.clientHeight;

        window.addEventListener("scroll", () => {
          let scrollTop = document.documentElement.scrollTop;
          if (scrollTop > windowHeight - 1) {
            scrollFlag.value = true;
            active.value = false;
          } else {
            scrollFlag.value = false;
          }
        });
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", () => {
        scrollFlag.value = false;
      });
    });

    const handleToggle = () => {      
      setTimeout(()=>active.value = false, 150);      
    };
    

    return {
      active,
      scrollFlag,
      handleToggle
    };
  },
};
</script>
<style lang="scss">
$old-rose: rgba(170, 118, 124, 1);
$paradise-pink: rgba(239, 71, 111, 1);
$onyx: rgba(53, 57, 60, 1);
$linen: rgba(240, 231, 216, 1);
$cerulean-frost: rgba(89, 152, 197, 1);

.toggle {
  position: absolute;
  height: 100%;
  background: $onyx;
  color: black;
  width: calc(100% / 2.618);
  z-index: 1001;
  transition: left 0.5s;
  border-radius: 0 250px 250px 0;

  &:after {
    content: "";
    position: absolute;
    width: 45px;
    height: 45px;
    right: 0;
    top: 50%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0);
  }

  .sidebar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    width: 100%;
    height: 100%;

    ul {
      display: flex;
      text-align: center;
      flex-direction: column;
      li {
        list-style: none;
        padding: 6px;
        a {
          text-decoration: none;
          color: $linen;
          font-size: 2em;
          margin: 10px 0;
          font-weight: 300;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        a:hover {
          color: $cerulean-frost;
        }
      }
    }
  }
}

.toggle.scroll {
  left: calc((-1 * 100% / 2.618) + 50px);
  background: rgba(0, 0, 0, 0);
  position: fixed;

  &:after {
    background: #000 url("../assets/menu.png");
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.toggle.scroll .sidebar {
  display: none;
}

.toggle.scroll.active {
  background: $onyx;
  width: calc(100% / 2.618);
  left: 0;

  .sidebar {
    display: flex;
  }

  &:after {
    background: rgba(0, 0, 0, 0);
  }
}

@media (max-width: 991px) {
  .toggle {
    left: calc(-1 * 80% + 50px);
    background: rgba(0, 0, 0, 0);
    width: 80%;

    &:after {
      background: #000 url("../assets/menu.png");
      background-size: 30px;
      background-position: center;
      background-repeat: no-repeat;
    }

    &.scroll {
      left: calc(-1 * 80% + 50px);

      &.active {
        background: $onyx;
        left: 0;
        width: 80%;

        .sidebar {
          display: flex;
        }

        &:after {
          background: rgba(0, 0, 0, 0);
        }
      }
    }

    &.active {
      background: $onyx;
      left: 0;
      width: 80%;

      .sidebar {
        display: flex;
      }

      &:after {
        background: rgba(0, 0, 0, 0);
      }
    }
  }
}

@media (max-width: 500px) {
  .toggle {
    // display: none;

    left: calc(-1 * 100% + 50px);

    width: 100%;

    
    &::after {      
      top: calc(100% - 41px);    
    }

    &.scroll {
      left: calc(-1 * 100% + 50px);
      top: calc(-1 * 100%  + 49px);

      &.active {
        width: 100%;
        top: 0;
      }
    }

    &.active {
      width: 100%;
    }
  }
}

@media print {
  .toggle {
    display: none;
  }
}
</style>
