<template>
    <section id="Index">
      <div >
          <div :class="img">
              <div class="bg-color">
                <div class="container" style="white-space: pre-wrap;">
                  <div class="row">
                    <div class="title-content">
                      <h1 >
                        {{ title }} 
                      </h1>
                      <p>
                      {{content}}
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
    </section>
      
</template>

<script>

  export default{
    
    data(){
    
      return{
          i:0,
          title:`Business Planning, Strategies\n and Execution`,
          content:'Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
          img:"background-img",
          headermain: [
          {
            title:`Business Planning, Strategies and \n  Execution`,
            content: 'Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
            class  :"background-img"         
          },
          {
            title:" International Business \n Opportunities",
            content: 'Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
            class  :"background-img-2"         
          },
          {
            title:" Financial Projections And \n AnalysisMarketing",
            content: 'Launch your campaign and benefit from our expertise on designing \n and managing conversion centered bootstrap v5 html page.',
            class  :"background-img-3"         
          }, 
        
        ] 
      }
      
    }
    ,
    created() {
    setInterval(this.writeText, 1000); // Call writeText method every 1000ms (1 second)
  },
  
  methods: {
      writeText() {                                   
        this.title = this.headermain[this.i].title;
        this.content = this.headermain[this.i].content;
        this.img = this.headermain[this.i].class;
        this.i++;
        if(this.i>=this.headermain.length){
        this.i=0;
        }    
  }
  } 
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