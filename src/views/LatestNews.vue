<template>
     <section class="sec-7">
    <div class="sec-pad-wrapper">
      <div class="container">
        <div class="sec-wrap-text">
          <h1>Latest News</h1>
          <p>
            Launch your campaign and benefit from our expertise on designing and managing
            <br />
            conversion centered bootstrap v5 html page.
          </p>
        </div>

        <div class="row gy-5">
          <div v-for="(teams,index) in teamUrl" class="col-lg-4 col-md-6 " :key="index">
            <div class="sec-7-wrap shadow">
              <img class="" :src="teams.urls" alt="img" width="100%" />
              <div class="">
                <h4><a href="">{{ teams.title }}</a></h4>
                <p>{{ teams.descrip }}</p>
                <h6><a href="">Read More </a></h6>
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
                teamUrl: [
                            { urls: '/src/assets/aa-1.jpg', title: "Building Your Corporate Identity", descrip: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century." }, 
                            { urls: "/src/assets/aa2.jpg", title: "The Dark Side of Overnight Success", descrip: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century." },
                            { urls: "/src/assets/aa3.jpg", title: "The Right Hand of Business IT World", descrip: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century." },
                        ]
            }
        }
    }
</script>

<style>
.sec-7{
    background-color: #f8f9fc;
}
.sec-7-wrap div {
    padding: 15px 20px;
}
.sec-7-wrap h4 a , .sec-7-wrap h6 a  {
  color: #24272c;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
}
 .sec-7-wrap h4 a:hover, .sec-7-wrap h6 a:hover{
  color: #8cb369;
}
.sec-7-wrap p{
    color: #8492a6;
}
.sec-7-wrap img{
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>