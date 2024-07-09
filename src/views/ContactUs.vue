<template>
    <section id="Contactus" class="sec-8">
    <div class="sec-pad-wrapper">
      <div class="container">
        <div class="sec-wrap-text">
          <h1>Get In Touch !</h1>
          <p>
            Launch your campaign and benefit from our expertise on designing and managing
            <br />
            conversion centered bootstrap v5 html page.
          </p>
        </div>
      </div>
      <div  class="container">
        <div class="row g-4 align-items-center">
            <div class="col-lg-5 col-md-6">
                <div v-for="con in contactForm" :key="con" class="contf-wrap">
                    <div>
                      <i :class="con.icon "></i>  
                    </div>
                    <div>
                        <h5>{{ con.title }}</h5>
                        <a href="con.contact">{{ con.contact }}</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-6 form-wrap">
              <div class="contact-form-wrap p-4">
                <div class="row gy-5">
                  <div class="col-md-6 col-12">
                    <div class="mb-4">
                      <input name="name" id="name" type="text" class="form-control" placeholder="Name :">
                    </div>
                  </div>
                  <div class="col-md-6 col-12 margin-cont">
                    <div class="mb-4">
                      <input name="email" id="email" type="email" class="form-control" placeholder="Email :">
                    </div>
                  </div>
                  <div class="col-12 mt-0">
                    <div class="mb-4">
                      <input name="subject" id="subject" class="form-control" placeholder="Subject :">
                    </div>
                  </div>
                  <div class="col-12 mt-0">
                    <div class="mb-4">
                      <textarea  name="message" id="message" type="text-area" rows="4" class="form-control" placeholder="Message :"></textarea>
                    </div>
                  </div>
                  <div class="col-12 mt-0">
                    <div class="mb-4 text-end">
                      <button class="button custom"><a class="nav-link" href="#">Send Message</a></button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
    export default{
        data(){
            return{
              visible:true,
              contactForm:[
                    {icon:'fa-regular fa-phone', title:'Phone', contact:'+91-93-8000-0029'},
                    {icon:'fa-regular fa-envelope ', title:'Email', contact:'krishna@example.com'},
                    {icon:'fa-regular fa-location-pin ', title:'Location', contact:'C/54 HBR Layout, Bangalore'},
                ],
            }
        }
    }
</script>
<style scoped>
.sec-8{
    background-color: #fff;
}
.contf-wrap{
    margin-top: 20px;
}
.contf-wrap a{
    color: #8492a6!important;
    text-decoration: none;
}
.contact-form-wrap{
  box-shadow: 0 0 3px rgba(36, 39, 44, .15) !important;
  border-radius: 10px;
}
.form-control:focus{
  border-color: #8cb369;
  box-shadow: none;
}
.contf-wrap{
  display: flex;
  gap: 20px;
  align-items: center;
}
.contf-wrap div i::before{
  font-weight: 600;
  font-size: 20px;
}
</style>