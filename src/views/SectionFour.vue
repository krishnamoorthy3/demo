
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

import galleryImg1 from '../assets/gallery-1.jpg';
import galleryImg2 from '../assets/gallery-2.jpg';
import galleryImg3 from '../assets/gallery-3.jpg';
import galleryImg4 from '../assets/gallery-4.jpg';
import galleryImg5 from '../assets/gallery-5.jpg';
import galleryImg6 from '../assets/gallery-6.jpg';
import galleryImg7 from '../assets/gallery-7.jpg';
import galleryImg8 from '../assets/gallery-8.jpg';




export default {
  data() {
    return {
      galleryImg: [
        {
          url: galleryImg1,
          title: "Mockup Collection",
          content: "Branding",
          link:'#',
        },
        {
          url: galleryImg2,
          title: "Mockup Collection",
          content: "Designing",
          link:'#',
        },
        {
          url: galleryImg3,
          title: "Abstract Image",
          content: "Abstract",
          link:'#',
        },
        {
          url: galleryImg4,
          title: "Yellow Bg with Books",
          content: "Books",
          link:'#',
        },
        {
          url: galleryImg5,
          title: "Company V-card",
          content: "V-card",
          link:'#',
        },
        {
          url: galleryImg6,
          title: "Mockup box with paints",
          content: "Photography",
          link:'#',
        },
        {
          url: galleryImg7,
          title: "Coffee cup",
          content: "Cups",
          link:'#',
        },
        {
          url: galleryImg8,
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
