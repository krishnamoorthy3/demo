<template>
  <section class="sec-6">
    <div class="sec-pad-wrapper">
      <div class="container">
        <div class="sec-wrap-text">
          <h1>Our Mind Power</h1>
          <p>
            Launch your campaign and benefit from our expertise on designing and managing
            <br />
            conversion centered bootstrap v5 html page.
          </p>
        </div>

        <div class="row gy-5">
          <div v-for="(teams,index) in teamUrl" class="col-md-6 col-lg-3" :key="index">
            <div class=" shadow">
              <img class="img-team-s" :src="teams.urls" alt="img" />
              <div class="pad">
                <h4>{{ teams.title }}</h4>
                <p>{{ teams.descrip }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-100">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="work-align">Work Process</h1>
            <p class="work-align">
              Launch your campaign and benefit from our expertise on designing and
              managing conversion centered bootstrap v5 html page.
            </p>
            <div class="row">
              <div class="col-12  s-clas-alig" v-for="s in workProcess" :key="s">
                <div>
                  <p class="rounded"> {{ s.sno }}</p>
                </div>
                <div >
                  <h3><a href="">{{s.title}}</a></h3>
                  <p>
                    {{s.content}}
                  </p>
                </div>
                
              </div>
            </div>
           
          </div>
          <div class="col-lg-6">
          <div class="img-fluid-responsive position-relative">
               <div class="sec-6-bg-lap-img" style="overflow: hidden;">
                <img :src="bgsec6img" alt="">
               </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      teamUrl: [
        { urls: '/src/assets/team_1.jpg', title: "Cristino Murphy", descrip: "Management" }, 
        { urls: "/src/assets/team-2.jpg", title: "Leosy Clony", descrip: "Management" },
        { urls: "/src/assets/team-3.jpg", title: "Amanda Lair", descrip: "Management" },
        { urls: "/src/assets/team-4.jpg", title: "Calvin Carlo", descrip: "Management" },
      ],
      bgsec6img : '/src/assets/sec-6-bg.png',
      workProcess : [
        {
          title:'Concept',
          content:'This prevents repetitive impairing the overall facilitates the comparison.',
          sno:1
        },
        {
          title:'Development',
          content:'This prevents repetitive impairing the overall facilitates the comparison.',
          sno:2
        },
        {
          title:'Live Demo',
          content:'This prevents repetitive impairing the overall facilitates the comparison.',
          sno:3
        },
      ],
    };
  },
};
</script>
<style>
.sec-6 {
  background-color: #fff;
}
.img-team-s{
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.sec-wrap-text{
  margin-bottom: 50px;
}
.sect-wrap{
  position: relative;
}
.background-st-hover{
  background-color: #24272ca1 ;
  position: absolute;
  top: 0%;
  width: 100%;
  z-index: 999;
}
.shadow {
    box-shadow: 0 0 3px rgba(36,39,44,.15); 
    border-radius: 8px;
}
.pad{
  padding: 15px 0px;
  text-align: center;
}
.pad{
  color: #000;
}
.mt-100{
  margin-top: 100px;
  color: #24272c;
}
.mt-100 p{
  color: #8492a6;
  font-size: 16px;
}
.s-clas-alig h3 a{
  color: #24272c;
  text-decoration: none;
  font-weight: 500;
}
.s-clas-alig h3 a:hover{
  color: #8cb369;
}
.s-clas-alig{
  margin-top: 30px;
  display: flex;
  gap: 20px;
 
}
.rounded{
  height: 38px;
  width: 38px;
  border:2px solid hsl(92deg 33% 56% / 10%);
  border-radius: 50% !important;
  color: #8cb369;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
