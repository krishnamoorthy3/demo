<script>

</script>
<template>
    <section id="Index">
      <div>
        <div v-for="home in headermain" :key="home">
          <div :class="home.class">
              <div class="bg-color">
                <div class="container" style="white-space: pre-wrap;">
                  <div class="row">
                    <div class="title-content">
                      <h1 >
                        {{ home.title }} 
                      </h1>
                      <p>
                      {{home.content}}
                      </p>
                      <div class="button">
                        <a href="">Get Started</a>
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
          headermain: [
          {
            title:`Business Planning, Strategies and \n  Execution`,
            content: 'Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
            class  :"background-img"         
          },
          {
            title:" International Business \n Opportunities",
            content: '  Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
            class  :"background-img-2"         
          },
          {
            title:" Financial Projections And \n AnalysisMarketing",
            content: '  Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
            
            class  :"background-img-3"      
          }, 
        
        ] 
      }
      
    }
    ,
  

  }

</script>

<style>
.background-img {
  background: url(../assets/bg-1.jpg) center center;
}
.background-img-2 {
  background: url(../assets/bg-2.jpg) center center;
}
.background-img-3 {
  background: url(../assets/bg-3.jpg) center center;
}
.title-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  text-align: center;
}
.bg-color {
  background-color: rgba(22, 28, 45, 0.75);
}
.title-content h1 {
  font-size: 55px;
  margin-bottom: 25px;
}
.title-content p {
  font-size: 18px;
  color: hsla(0, 0%, 100%, 0.5);
  margin-bottom: 25px;
}

</style>
<script>


</script>