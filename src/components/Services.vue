<template>
  <div>
    <section class="services" id="services">
      <div class="title">
        <h2>Our Services</h2>
        <p>Hillle cotanumatill abc . Allick Htck to fill lidk . 23s1f23s. sdfavs.</p>
      </div>
      <div class="content">
        <div class="servicesBx">
          <img src="../assets/icon1.png" />
          <h2>Web Design</h2>
          <p>Hillle cotanumatill abc . Allick Htck to fill lidk . 23s1f23s. sdfavs.</p>
        </div>
        <div class="servicesBx">
          <img src="../assets/icon1.png" />
          <h2>Web Design</h2>
          <p>Hillle cotanumatill abc . Allick Htck to fill lidk . 23s1f23s. sdfavs.</p>
        </div>
        <div class="servicesBx">
          <img src="../assets/icon1.png" />
          <h2>Web Design</h2>
          <p>Hillle cotanumatill abc . Allick Htck to fill lidk . 23s1f23s. sdfavs.</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Services",
};
</script>
<style lang="scss">
.services {
  .content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    .servicesBx {
      padding: 40px 20px;
      max-width: 340px;
      margin: 20px;
      transition: 0.5s;
      text-align: center;
      background: #f5f5f5;

      img {
        max-width: 80px;
        transition: 0.5s;
      }

      h2 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
        transition: 0.5s;
      }

      p {
        margin: 0;
        transition: 0.5s;
      }
    }

    .servicesBx:hover {
      background: black;

      img {
        filter: invert(1);
      }

      h2,
      p {
        color: #fff;
      }
    }
  }
}

@media (max-width: 991px) {
  .services .content .servicesBx {
    padding: 30px 20px;
    max-width: 340px;
    margin: 10px;
  }
}
</style>
