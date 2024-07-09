<template>
  <div class="section-2-wrapper">
    <div class="sec-2-wrapper container">
      <div class="row text-sec-2-wrapper">
        <!--   <div class="col-lg-4 align">
          <div class="icon">
            <i class="fa-brands fa-php"></i>
          </div>
          <div>
            <h5>Financial Planning</h5>
            <p>Horem ipsum dolor consectetuer Lorem simply dummy orem commo.</p>
          </div>
        </div>
        <div class="col-lg-4 align">
          <div class="icon">
            <i class="fa-regular fa-file-image"></i>
          </div>
          <div>
            <h5>Quality Resourcing</h5>
            <p>When an unknown printer took a galley of type and scrambled it.</p>
          </div>
        </div>
        <div class="col-lg-4 align">
          <div class="icon">
            <i class="fa-solid fa-camera"></i>
          </div>
          <div>
            <h5>Business Services</h5>
            <p>It has survived not only five centuries but leap in typesetting.</p>
          </div>
        </div>
        <div class="col-lg-4 align">
          <div class="icon">
            <i class="fa-brands fa-accusoft"></i>
          </div>
          <div>
            <h5>Software And Research</h5>
            <p>It was popularised with the release of Letraset sheets sit amet.</p>
          </div>
        </div>
        <div class="col-lg-4 align">
          <div class="icon">
            <i class="fa-solid fa-globe"></i>
          </div>
          <div>
            <h5>Travel And Aviation</h5>
            <p>It is a long established fact that a reader will be distracted.</p>
          </div>
        </div>
        <div class="col-lg-4 align">
          <div class="icon">
            <i class="fa-solid fa-code"></i>
          </div>
          <div>
            <h5>Healthcare Services</h5>
            <p>A point of using lorem ipsum is that it has normal distribution.</p>
          </div>
        </div> -->

        <div
          v-for="items in secContent"
          class="col-lg-4 col-sm-6 col-12 align"
          :key="items"
        >
          <div class="icon">
            <i :class="items.icon"></i>
          </div>
          <div>
            <h5>{{ items.heading }}</h5>
            <p>{{ items.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sec-2-img-wrapper">
      <div class="container">
        <div class="row sec-yt-wrapper">
          <div class="col-md-6 col-sm-12 position-">
            <div class="yt-img">
              <img src="../assets/youtube.jpg" alt="" />
            </div>
            <div class="play-icon">
              <a href=""><i class="fa-solid fa-circle-play"></i></a>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 yt-txt-content">
            <h2>
              Right Solutions Give You A <br />
              Hassle Free Business
            </h2>
            <p>
            {{prevent}}
            </p>
            <ul>
              <li v-for="list in youtubeul">{{ list }}</li>
            </ul>
            <div class="inline-b">
              <div class="align-yt">
                <i class="fa-regular fa-envelope"></i>
                <div>
                  <p>Need More Help?</p>
                  <a href="">Ask us your question</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="number-cont">
          <div class="row gy-4 alignement-n">
            <div v-for="x in countNum" class="col-md-3 col-6" :key="x">
              <div>
                <h1>{{ x.num }}+</h1>
                <span>{{ x.title }}</span>
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
      secContent: [
        {
          icon: " fa-brands fa-php",
          heading: "Financial Planning",
          content: "Horem ipsum dolor consectetuer Lorem simply dummy orem commo.",
        },
        {
          icon: "fa-regular fa-file-image",
          heading: "Quality Resourcing",
          content: "When an unknown printer took a galley of type and scrambled it.",
        },
        {
          icon: "fa-solid fa-camera",
          heading: "Business Services",
          content: "It has survived not only five centuries but leap in typesetting.",
        },
        {
          icon: "fa-brands fa-accusoft",
          heading: "Software And Research",
          content: "It was popularised with the release of Letraset sheets sit amet.",
        },
        {
          icon: "fa-solid fa-globe",
          heading: "Travel And Aviation",
          content: "It is a long established fact that a reader will be distracted.",
        },
        {
          icon: "fa-solid fa-code",
          heading: "Healthcare Services",
          content: "A point of using lorem ipsum is that it has normal distribution.",
        },
      ],
      countNum: [
        { num: 40, title: "Projects" },
        { num: 200, title: "Clients" },
        { num: 457, title: "Members" },
        { num: 530, title: "Employee" },
      ],
      prevent:"This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic  so that the layout impression of the final publication is not compromised.",
      youtubeul:[
        'Beautiful and easy to understand animations',
        "Our Talented & Experienced Marketing Agency",
        "Theme advantages are pixel perfect design"
      ]
    };
  },
};
</script>

<style>
.sec-2-wrapper {
  position: relative;
  z-index: 2;
  margin-top: -100px;
  background-color: #fff;
  border-radius: 5px;
  padding: 50px 25px;
  box-shadow: 0 0 3px rgba(36, 39, 44, 0.15);
  margin-bottom: 100px;
}
.text-sec-2-wrapper {
  grid-row-gap: 30px;
}

.align {
  display: flex;
  gap: 15px;
}

.align p {
  color: #8492a6 !important;
  font-size: 15px;
}

.align h5 {
  font-weight: 600;
}

.icon i {
  color: #8cb369;
  border: 2px solid hsla(92, 33%, 56%, 0.1);
  border-radius: 5px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.yt-img img {
  max-width: 100%;
}

.position- {
  position: relative;
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 45%;
}
.play-icon a i {
  font-size: 80px;
  color: #fff;
}
.yt-txt-content h2 {
  margin-bottom: 35px;
  color: #000;
  font-weight: 600;
}

.yt-txt-content p,
ul {
  color: #8492a6 !important;
  margin-bottom: 20px;
}

.yt-txt-content ul li {
  padding: 10px 0;
}
.inline-b {
  display: inline-block;
}
.sec-yt-wrapper {
  align-items: center;
}
.align-yt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px 0;
  border-top: 1px solid #e2e2e2;
}
.align-yt i {
  font-size: 35px;
  color: #8cb369;
}
.align-yt p {
  color: #000 !important;
  margin-bottom: 0;
}
.align-yt a {
  font-weight: bold;
  color: #000;
  text-decoration: none;
}
.sec-2-img-wrapper {
  padding: 30px 0;
}
.number-cont {
  padding: 50px 0 50px;
}
.alignement-n {
  text-align: center;
  justify-content: center;
}
.alignement-n h1 {
  margin-bottom: 0;
}
</style>
