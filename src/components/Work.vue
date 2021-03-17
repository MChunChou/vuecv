<template>
    <div>
      <section class="work" id="work">
      <div class="title">
        <h2>Recent Work</h2>
        <p>
          Hillle cotanumatill abc . Allick Htck to fill lidk . 23s1f23s. sdfavs.         
        </p>
      </div>
      <div class="content">
        <div class="workBx">          
          <div class="imgBx">
            <img src="../assets/test.jpg"/>
          </div>
          <div class="textBx">
            <h3>Project 01</h3>
          </div>
        </div>
        <div class="workBx">          
          <div class="imgBx">
            <img src="../assets/test.jpg"/>
          </div>
          <div class="textBx">
            <h3>Project 01</h3>
          </div>
        </div>
        <div class="workBx">          
          <div class="imgBx">
            <img src="../assets/test.jpg"/>
          </div>
          <div class="textBx">
            <h3>Project 01</h3>
          </div>
        </div>
        <div class="workBx">          
          <div class="imgBx">
            <img src="../assets/test.jpg"/>
          </div>
          <div class="textBx">
            <h3>Project 01</h3>
          </div>
        </div>
        <div class="workBx">          
          <div class="imgBx">
            <img src="../assets/test.jpg"/>
          </div>
          <div class="textBx">
            <h3>Project 01</h3>
          </div>
        </div>
        
      </div>
    </section>
    </div>
</template>
<script>
export default {
    name: "Word"
}
</script>
<style lang="scss">
.work .content {
  display: flex; 
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.work .content .workBx {
  position: relative;
  width: 265px;
  height: 265px;
  margin: 10px;
  transition: 0.5s;
  text-align: center;
}

.work .content .workBx .imgBx,
.work .content .workBx .textBx
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:  100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.work .content .workBx .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:  100%;
  object-fit: cover;
}

.work .content .workBx .textBx {
  background: #000;
  opacity: 0;
  transition: 0.5s;
}

.work .content .workBx:hover .textBx {
  opacity: 1;
}

.work .content .workBx .textBx  h3{
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1em;
}

    @media (max-width: 991px) {
    }
</style>