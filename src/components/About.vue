<template>
  <div>
    <section class="about" id="about">
      <div class="title white">
        <h2>About Me</h2>
        <p></p>
      </div>
      <div class="content">
        <div class="textBx">
          <pre>{{ aboutCtn }}</pre>
        </div>
        <div class="textBx">
          <!-- <img src="../assets/picTwo.jpg" /> -->
          <pre>{{ aboutWork }}</pre>
        </div> 
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  setup() {
    const aboutCtn = 
`Hi 我是周蔓君

台南人，畢業於逢甲大學，有8年前後端的開發經驗。
熟系HTML5、Javascript、CSS、React，能獨立進行開發以及切版的工作。

之前任職於CNC軟體控制公司，負責的工作是開發網頁式 CNC 控制器人機介面。
在開發的過程中不斷與團隊以及使用者溝通和確認，以避免出現 "以為" 跟 "想要" 的不同。
並且以最初開發的介面為基準，並根據不同訂單的客戶進行客製化的要求。

看著自己一步一步寫出來的介面，搭配著各種API，彷彿創造一個新的天地，因此得了極大的成就感。
也因此奠定自己想要成為一個獨當一面的全端工程師的期望。

目前短期的目標是希望能夠掌握目前各種前端的技能，並逐步加深對後端架構的了解，
期望未來可以成為獨當一面的全端工程師。
`;

  const aboutWork = `
  工作經歷:

  [ CNC控制器網頁式人機介面 ] 
    ‧ 開發網頁式 CNC 人機操作介面，取代 JAVA 介面。
    ‧ CNC 資訊顯示、控制選單以及操作介面‧
    ‧ CNC 程式編輯以及模擬系統‧
    ‧ 檔案上傳以及下載功能

    FrontEnd: #YUI Mojito #ReactJS #ThreeJS #PEGJS
    BackEnd: #NodeJS #Express    

  [ EtherCAT 控制器試算表格式人機介面 ]
    ‧ 表格式動態顯示及操作功能
    ‧ 雲端 FTP 下載更新功能
    ‧ 使用 WebSocket 與控制器溝通

    FrontEnd: #ReactJs #Redux #WebSocket #React Virtualized #Material UI    
    BackEnd: #Node #Express

  [ 雲端表單管理系統 ]
    ‧ 使用者的登入、新增、刪除以及權限修改
    ‧ 資料庫的查詢並且顯示表單，並提共下載成CSV檔案
    ‧ 上傳更新檔案至雲端
    ‧ 使用 GraphQL 方式與 Back End 的溝通
    ‧ 提供使用語言判斷，並切換語系

    FrontEnd: #ReactJs #Redux #GraphQL #Material UI #i18next
    BackEnd: #Rust #Postgresql     
  `;

    return {
      aboutCtn,
      aboutWork
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
    // justify-content: space-between;
    justify-content: center;
    margin-top: 40px;

    .textBx {
      min-width: 49%;
      width: 49%;
      p , pre {        
        color: #fff;
        white-space: pre-wrap;
        font-size: 1.3em;
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
