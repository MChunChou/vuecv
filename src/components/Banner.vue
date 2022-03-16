<template>
  
    <section class="banner" id="home">
      <div class="imgSidebar">
        <img src="../assets/picOne.jpg" />
      </div> 
      <div class="contentBx">       
        <div>
          <h4><span>Hello</span> I'm</h4>
          <h2>周 蔓 君</h2>
          <h4>I'm a Front End Web Developer.</h4>
          <p></p>
        </div>
      </div>
    </section>
  
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style lang="scss">

$old-rose: rgba(170, 118, 124, 1);
$paradise-pink: rgba(239, 71, 111, 1);
$onyx: rgba(53, 57, 60, 1);
$linen: rgba(240, 231, 216, 1);
$cerulean-frost: rgba(89, 152, 197, 1);

$gray : #333;
$lightblue : #00bcd4;

.banner {
  position: relative;
  display: grid;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    background: $onyx;
    width: calc(100% / 2.618);
    border-radius: 0 250px 250px 0;
    left: 0;
    top: 0;
  }

  .imgSidebar, .contentBx {
    position: absolute;
    top: 0;    
  }

  .imgSidebar {             
    width: calc(100% / 2.618 * 1.618);
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;

    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 125px;
      // object-position: 0 -31px;
    }
  }

  .contentBx {    
    right: 0;
    width: calc(100% / 2.618 * 1.618);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    padding-top: 150px;

    h4 {
      font-size: 1.5em;
      color: #333;
      font-weight: 300;

      span {
        font-size: 1.5em;
        color: $cerulean-frost;
        font-weight: 700;
      }
    }

    h2 {
      font-family:  DFKai-SB, STKaiti, Avenir, Helvetica, Arial, sans-serif;
      color: $gray;
      font-size: 3em;
      line-height: 1em;
    }    
  }
} 

@media(max-width: 991px){
  .banner {
    &:before {
      display: none
    }
    .imgSidebar {
      width: 100%;
    }

    .contentBx {
      width: 100%;
      padding: 40px;
      padding-top: 80px; 
    }    
  }
}

@media(max-width: 500px) {
  .banner {
      .contentBx {
        padding: 40px 63px;
        padding-top: 188px;
      }
  }
}

@media print {
 .banner {
    &:before {
      display: none
    }

    .imgSidebar {    
      width: 100%;
    }

    .contentBx {
      width: 100%;
      padding: 40px;
      padding-top: 80px; 
    }    
  }
}
</style>
