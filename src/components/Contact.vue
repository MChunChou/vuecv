<template>
    <section class="contact" id="contact">
      <div class="title white">
        <h2>Contact Me</h2>
        <p>
        </p>
      </div>
      <div class="contactForm">
        <div class="row">
          <div class="col50">
            <input type="text" name="" placeholder="First Name"/>            
          </div>
          <div class="col50">
            <input type="text" name="" placeholder="Last Name"/>            
          </div>
        </div>
        <div class="row">
          <div class="col50">
            <input type="text" name="" placeholder="Email"/>            
          </div>
          <div class="col50">
            <input type="text" name="" placeholder="Mobile No."/>            
          </div>
        </div>
        <div class="row">
          <div class="col100">
            <textarea placeholder="Message"/>            
          </div>          
        </div>
        <div class="row">
          <div class="col100">
            <input type="submit" value="Send"/>            
          </div>          
        </div>
      </div>
    </section>    
</template>

<script>
export default {
    name: "Contact"
}
</script>
<style lang="scss">    
.contact {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
}

.contact .contactForm {
  position: relative;
  width: 700px;
  margin-top: 20px;  
}

.contact .contactForm .row{ 
  width:  100%;
  display: flex;
}

.contact .contactForm .row .col50 {
  width: 50%;
  margin: 10px;
}

.contact .contactForm .row .col100 {
  width: 100%;
  margin: 10px;
  text-align: center;
}

.contact .contactForm .row input ,
.contact .contactForm .row textarea {
  width: 100%;
  padding: 10px;
  border:none;
  outline: none;
  background: #111;
  color: white;
  font-size: 16px;
  resize: none;

}

.contact .contactForm .row textarea {
  height: 100px;
}

.contact .contactForm .row input[type="submit"] {
  background: #00bcd4;
  color: #ffffff;
  padding:  10px 30px;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  max-width: 150px;
}

@media (max-width: 991px) {
    
  .contact .contactForm {
    width: 100%;
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