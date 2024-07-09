<template>
  <section class="sec-5">
    <div class="sec-pad-wrapper">
      <div class="container">
        <div class="sec-wrap-text">
          <h1>Pricing Plans</h1>
          <p>
            Launch your campaign and benefit from our expertise on designing and managing
            <br />
            conversion centered bootstrap v5 html page.
          </p>
        </div>
        <div class="row pt-5 gy-5">
          <div v-for="price in priceSec" class="col-md-6 col-lg-3 price-sec" :key="price">
            <div class="price-border">
              <div class="p-4 border-bottom-price">
                <h4>{{ price.title }}</h4>
                <p>{{ price.content }}</p>
                <h2>{{ price.price }}<span>/mo</span></h2>
                <div class="button"><a href="">Buy Now</a></div>
              </div>
              <div class="p-4">
                <h5>Features:</h5>
                <ul class="price-ul">
                  <li>{{ price.domain }} Domains</li>
                  <li>{{ price.file }} GB File upload</li>
                  <li>{{ price.storage }} GB Secure storage</li>
                  <li>Unlimited bandwidth</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col credit">
            <p>Note: <span>*</span>No credit card required</p>
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
      priceSec: [
        {
          title: "FREE",
          content: "For individuals looking for a simple Startups solution",
          price: "$0",
          domain: 1,
          file: 1,
          storage: 1,
        },
        {
          title: "STARTUPS",
          content: "For individuals looking for a simple Startups solution",
          price: "$9",
          domain: 1,
          file: 1,
          storage: 1,
        },
        {
          title: "BUSINESS",
          content: "For individuals looking for a simple Startups solution",
          price: "$39",
          domain: 1,
          file: 1,
          storage: 1,
        },
        {
          title: "PREMIUM",
          content: "For individuals looking for a simple Startups solution",
          price: "$99",
          domain: 50,
          file: 10,
          storage: 200,
        },
      ],
    };
  },
};
</script>

<style scoped>
.sec-5 {
  background-color: #f0f2f7;
}
.price-sec {
  padding: 0 20px;
  color: #000;
}
.price-border {
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(36, 39, 44, 0.15);
}
.button {
  text-align: center;
  margin-left: 0 !important;
}
.border-bottom-price {
  border-bottom: 1px solid #e9ecef;
}
.border-bottom-price h4 {
  margin-bottom: 20px;
  font-size: 17px;
}
.border-bottom-price h2 {
  margin: 15px 0 20px;
}
.border-bottom-price h2 span {
  color: #8492a6;
  font-size: 17px;
}
.border-bottom-price p {
  color: #8492a6;
}
.price-border h5 {
  font-size: 16px;
}
.price-ul li {
  margin: 10px 0;
}

.credit {
  color: #8492a6;
  text-align: center;
  margin: 20px 0;
}
.credit p span {
  color: #ff0000;
  font-weight: bold;
}
</style>
