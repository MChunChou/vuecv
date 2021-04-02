<template>
  <section class="contact" id="contact">
    <div class="title white">
      <h2>Contact Me</h2>
      <p></p>
    </div>
    <div class="contactBx">
      <div class="row">
        <div class="col50">
          <img src="../assets/cellphone.png" />
          <h3>Tel:</h3>
        </div>
        <div class="col50">
          <h3>0972303633</h3>
        </div>
      </div>
      <div class="row">
        <div class="col50">
          <img src="../assets/email.png" />
          <h3>Email</h3>
        </div>
        <div class="col50">
          <h3>mchunchou89@gmail.com.tw</h3>
        </div>
      </div>
    </div>
    <div class="contactForm">
      <div class="row">
        <div class="col50">
          <input
            type="text"
            name="firstName"
            placeholder="姓"
            v-model="emailData.firstName"
          />
        </div>
        <div class="col50">
          <input
            type="text"
            name="lastName"
            placeholder="名"
            v-model="emailData.lastName"
          />
        </div>
      </div>
      <div class="row">
        <div class="col50">
          <input
            type="text"
            name="email"
            placeholder="Email"
            v-model="emailData.email"
          />
        </div>
        <div class="col50">
          <input
            type="text"
            name="mobile"
            placeholder="電話"
            v-model="emailData.mobile"
          />
        </div>
      </div>
      <div class="row">
        <div class="col100">
          <textarea name="msg" placeholder="訊息" v-model="emailData.msg" />
        </div>
      </div>
      <div class="row">
        <div class="col100">
          <input type="submit" value="Send" @click="mail" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

import mailHelper from "mailHelper";
import { reactive, watch } from "vue";

export default {
  name: "Contact",
  setup() {
    const emailData = reactive({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      msg: "",
    });

    watch(emailData, (data, preData) => {});

    return {
      mail: function () {
        const { firstName, lastName, email, mobile, msg } = emailData;
        console.log(firstName, lastName, email, mobile, msg);

        const content = `Name: ${firstName} ${lastName}
        Email: ${email}
        Mobile: ${mobile}
        Msg: ${msg}`;

        mailHelper(content);
      },
      emailData,
    };
  },
};
</script>
<style lang="scss">
.contact {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .contactBx {
    position: relative;
    color: white;
    width: 700px;
    padding: 15px 0;
    background: #111;
    border: rgba#111 solid 3px;
    border-radius: 30px;

    .row .col50 {
      display: flex;
    }

    h3 {
      position: relative;
      height: 100%;
      margin: 0 10px;
      font-size: 0.9em;
    }

    img {
      position: relative;
      width: 20px;
      height: 100%;
      filter: invert(1);
      object-fit: cover;
    }
  }

  .contactForm {
    position: relative;
    width: 700px;
    margin-top: 50px;
  }

  .row {
    position: relative;
    width: 100%;
    display: flex;

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: none;
      outline: none;
      background: #111;
      color: white;
      font-size: 16px;
      resize: none;
    }

    input[type="submit"] {
      background: #00bcd4;
      color: white;
      padding: 10px 30px;
      display: inline-block;
      font-weight: 500;
      letter-spacing: 2px;
      cursor: pointer;
      max-width: 150px;
    }
  }

  textarea {
    height: 100px;
  }
  .col50 {
    width: 50%;
    margin: 10px;
  }

  .col100 {
    width: 100%;
    margin: 10px;
    text-align: center;
  }
}

@media (max-width: 991px) {
  .contact .contactForm {
    display: none;
  }

  .contact .contactBx {
    width: 90%;    
    font-size: 1.5em;
    background: black;    
  }  

  .contactForm .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .contact .contactForm .row .col50 {
    width: 100%;
  }
}
</style>