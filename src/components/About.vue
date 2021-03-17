<template>
  <div>
    <section class="about" id="about">
      <div class="title white">
        <h2>About Me</h2>
        <p></p>
      </div>
      <div class="content">
        <div class="textBx">
          <p>
            {{ aboutCtn }}
          </p>
        </div>
        <div class="imgBx">
          <img src="../assets/test.jpg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  setup() {
    const aboutCtn = `畢業於逢甲大學，在學校中畢業專題選擇使用 JAVA 開發以圖形辨識的方法來辨識鋼琴樂譜並且依據此樂譜來撥放出 midi 音樂，在專題製作中雖然經歷很多的挫折跟失敗，但也讓我學習到如何去思考並且解決問題。     
     畢業後的工作，進入一間 CNC 軟體開發的公司。主要負責的工作是 CNC 控制器的操作人機介面，使用 Web 方式取代掉原本使用 JAVA 開發的介面。開發語言使用 NodeJS 做為後端並與控制器溝通，前端畫面則使用 YUI Mojito 開發，後來改用 ReactJS。
     之後接到另一個工作是負責雲端管理系統，內容包含登入、查詢、顯示、上傳、新增、刪除的功能，使用 ReactJS 開發前端，並使用 Rust 開發後端，資料庫則是使用PostgreSQL。
     短期內目標試希望能夠完整掌握目前各項前端技能，並且深入了解後端架構，期望未來可以成為獨當一面的全端工程師。`;
    return {
      aboutCtn,
    };
  },
};
</script>

<style lang="scss">
$gray: #333;
$lightblue: #00bcd4;
$black: #000;

.about {
  background: $black;

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .textBx {
      min-width: 49%;
      width: 49%;
      p {
        color: #fff;
      }
    }

    .imgBx {
      margin-left: 40px;

      img {
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 991px) {
  .about .content {
    flex-direction: column;
    margin-top: 0;

    .textBx {
      min-width: 100%;
      width: 100%;
    }
  }

  .about .contentBx .imgBx {
    margin-left: 0;
  }
}
</style>
