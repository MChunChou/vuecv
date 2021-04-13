<template>
  <section class="projects" id="projects">
    <div class="title">
      <h2>My Projects</h2>
      <p></p>
    </div>
    <div class="content">
      <div class="projectBx">
        <div class="name">
          <img src="../assets/projects/project1.jpg" />
          <h2>檔案上傳介面</h2>
          <p></p>
        </div>
        <div class="describe">
          <pre>
使用 ReactJS 開發提供上傳檔案的介面 
          Note: 連結網頁沒有 server 支援, 使用 JS 模擬 servere</pre
          >
          <a href="https://mchunchou.github.io/simulateUpload/" target="_blank"
            >Go ></a
          >
        </div>
      </div>
      <div class="projectBx">
        <div class="name">
          <img src="../assets/projects/project2.jpg" />
          <h2>gmcode 模擬</h2>
          <p></p>
        </div>
        <div class="describe">
          <pre>輸入 GMcode 並以此產生路徑模擬 </pre>
          <a href="https://mchunchou.github.io/NcEmulator/" target="_blank"
            >Go ></a
          >
        </div>
      </div>
      <div class="projectBx">
        <div class="name">
          <img src="../assets/projects/project3.jpg" />
          <h2>古蹟資料列表</h2>
          <p></p>
        </div>
        <div class="describe">
          <pre>嘗試使用 React Native 抓取 API 並加以顯示</pre>
          <!-- <a href="https://github.com/MChunChou" target="_blank">Go ></a> -->
        </div>
      </div>
      <div class="projectBx">
        <div class="name">
          <img src="../assets/projects/project4.jpg" />
          <h2>鋼琴樂譜辨識及播放系統</h2>
          <p></p>
        </div>
        <div class="describe">
          <pre>
使用 JAVA 開發對於鋼琴樂譜的影像辨識系統
透過分析音符的位置判斷在使用 midi 播放</pre
          >
          <!-- <a href="https://github.com/MChunChou" target="_blank">Go ></a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  setup() {
    const projectsData = [
      {
        name: "",
        des: ``,
        url: "",
      },
      {
        name: "",
        des: ``,
        url: "",
      },
    ];
    console.log(projectsData);
    return {};
  },
};
</script>

<style lang="scss">
$old-rose: rgba(170, 118, 124, 1);
$paradise-pink: rgba(239, 71, 111, 1);
$onyx: rgba(53, 57, 60, 1);
$linen: rgb(243, 241, 235);
$cerulean-frost: rgba(89, 152, 197, 1);

.projects {
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    .projectBx {
      padding: 40px 20px;
      margin: 20px;
      text-align: center;
      background: $linen;
      transition: 0.5s;
      width: 20%;
      min-width: 350px;

      .name {
        img {
          position: relative;
          max-width: 300px;
          max-height: 300px;
          transition: 0.5s;
          object-fit: cover;
        }

        h2 {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 600;
        }
      }

      .describe {
        display: grid;
        grid-template-rows: 3fr 1fr;
        position: relative;
        padding: 0px 20px;
        left: -50%;
        transition: 0.5s;
        align-items: center;
        p,
        pre,
        a {
          display: none;
        }

        a {
          text-decoration: none;
        }
      }

      &:hover {
        display: grid;
        width: 100%;
        background: black;
        grid-template-columns: 1fr 2fr;
        transition: 0.5s;
        transition-property: width;
        color: $linen;

        .describe {
          left: 0;

          p,
          pre,
          a {
            display: block;
            color: $linen;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .projects {
    .content {
      .projectBx {
        position: relative;
        padding: 10px;
        margin: 5px;
        min-width: 100%;
        min-height: 350px;
        .name {
          img {
            width: 90%;
            object-fit: contain;
          }
        }

        .describe {
          padding: 0;
          width: 100%;
          left: 0;
          color: black;

          p,
          pre,
          a {
            margin: 0;
            display: block;
            color: black;
            white-space: break-spaces;
          }
        }

        &:hover {
          display: block;
          background: $linen;
          color: black;
           .describe {
            p,
            pre,
            a {
              color: black;
            }
          }
        }
      }
    }
  }
}
</style>