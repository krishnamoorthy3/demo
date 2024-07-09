<template>
  <div class="sec-4-wrapper">
    <div class="container">
      <div class="sec-4-text">
        <h1>Our Works & Projects</h1>
        <p>
          Launch your campaign and benefit from our expertise on designing and managing
          <br />
          conversion centered bootstrap v5 html page.
        </p>
      </div>
      <div class="row row-gap-4">
        <div v-for="urls in galleryImg" class="col-lg-3 col-md-4 col-sm-6" :key="urls">
          <div class="bs-wrap-hs">
            <div class="bg-color-img">
              <div>
                <img :src="urls.url" alt="" />
              </div>
              <div class="bgcolor-wrap-h"></div>
              <div class="content-img">
                <a :href="urls.link">{{ urls.title }}</a>
                <p>{{ urls.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      galleryImg: [
        {
          url: "/src/assets/gallery-1.jpg",
          title: "Mockup Collection",
          content: "Branding",
          link:'#',
        },
        {
          url: "/src/assets/gallery-2.jpg",
          title: "Mockup Collection",
          content: "Designing",
          link:'#',
        },
        {
          url: "/src/assets/gallery-3.jpg",
          title: "Abstract Image",
          content: "Abstract",
          link:'#',
        },
        {
          url: "/src/assets/gallery-4.jpg",
          title: "Yellow Bg with Books",
          content: "Books",
          link:'#',
        },
        {
          url: "/src/assets/gallery-5.jpg",
          title: "Company V-card",
          content: "V-card",
          link:'#',
        },
        {
          url: "/src/assets/gallery-6.jpg",
          title: "Mockup box with paints",
          content: "Photography",
          link:'#',
        },
        {
          url: "/src/assets/gallery-7.jpg",
          title: "Coffee cup",
          content: "Cups",
          link:'#',
        },
        {
          url: "/src/assets/gallery-8.jpg",
          title: "Pen and article",
          content: "Article",
          link:'#',
        },
      ],
    };
  },
};
</script>
<style>
.sec-4-wrapper {
  padding: 80px 0;
}
.sec-4-text {
  text-align: center;
}
.sec-4-text h1 {
  color: #000;
}
.sec-4-text p {
  margin-top: 15px;
  color: #8492a6;
  margin-bottom: 25px;
}

.bg-color-img img {
  width: 100%;
  border-radius: 10px;
}

.bg-color-img {
  position: relative;
}
.bgcolor-wrap-h, .content-img{
  display: none;
}
.bg-color-img:hover .bgcolor-wrap-h,.bg-color-img:hover .content-img {
  display: block;
}
.bgcolor-wrap-h{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 95;
  top: 0%;
  background-color: #1a191985;
  border-radius: 10px;
}
.content-img{
  position: absolute;
  z-index: 99;
  bottom: 0%;
  color: #ececec;
  left: 9%;
}
.content-img a{
  font-weight: 500;
  font-size:19px ;
  text-decoration: none;
  color: #fff;
}
.content-img a:hover{
  color: #8cb369;
}
.content-img p{
  font-size:18px ;
}


</style>
