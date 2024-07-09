<template>
    <section class="section-9">
        <div class="sec-9">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-md-3">
                        <a href="">
                            <img src="/src/assets/download.png" alt="">
                        </a>
                        <p class="mt-4">Start working with Motos that can provide everything you need to generate
                            awareness, drive traffic, connect.</p>
                        <div class="footer-content">
                            <i class="fa-regular fa-clock ft-clock"></i>
                            <div>
                                <p class="mb-0">
                                    Mon - Sat :
                                </p>
                                <span class="text-white">10:00 AM To 07:30 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h5 class="text-white">Our Services</h5>
                        <ul class="ftr-ul p-0 mt-4">
                            <li v-for="text in ourservice" class="mb-1">
                                <a href="">
                                    <i class="fa-solid fa-greater-than me-2"></i>
                                    {{ text }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h5 class="text-white">Get In Touch</h5>
                        <div class="ftr-contect mt-4">
                            <div v-for="foot in footercon" :key="foot" class="mt-3">
                                <p>{{ foot.title }} <a href="foot.contact">{{ foot.contact }}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h5 class="text-white">Newsletter</h5>
                        <p class="mt-4">Sign up and receive the latest tips via email.</p>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="foot-subscribe mb-3">
                                        <label class="form-label">Write your email <span class="text-danger">*</span></label>
                                        <input type="email" name="email" id="emailsubscribe" class="form-control ft-inpt" placeholder="Your email : " required=""></div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="d-grid">
                                        <input type="submit" id="submitsubscribe" name="send" class="btn btn-ft" value="Subscribe">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </div>
        <div class="footer-r-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-12">
                        <p>&copy; Developed  by Krishna Moorthy M</p>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="ftr-i-wrap">
                            <div v-for="icons in footericon" :key="icons" class="footer-inner">
                                <a>
                                    <i :class="icons.icon" :title="icons.title"></i>
                                </a>
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
            ourservice: [' Financial Planning', 'Software and Research', 'Business Services', 'Quality Resourcing', 'Travel and Aviation'],
            footercon: [
                { contact: 'C/54 HBR Layout, Bangalore' },
                { title: 'Phone :', contact: '+91-93-8000-0029' },
                { title: 'Email :', contact: 'krishna@example.com' },
            ],
            footericon:[
                {icon:'fa-solid fa-cart-shopping', title:'Buy Now'},
                {icon:'fa-brands fa-dribbble', title:'Dribbble'},
                {icon:'fa-brands fa-behance', title:'Behance'},
                {icon:'fa-brands fa-linkedin', title:'Linkedin'},
                {icon:'fa-brands fa-facebook-f', title:'Facebook'},
                {icon:'fa-brands fa-instagram', title:'Instagram'},
                {icon:'fa-brands fa-square-twitter', title:'Twitter'},
                {icon:'fa-regular fa-envelope', title:'Envelope'},
                {icon:'fa-regular fa-file', title:'File'},
            ]
        }
    }
}
</script>

<style scoped>
.section-9{
    background-color: #202942;
    color: #adb5bd;
}
.footer-r-2{
    border-top: 1px solid #cecccc;
    padding: 20px 0;
}
.ft-hrt{
    color: #fff;
}
.ftr-i-wrap{
    display: flex;
    gap: 5px;
    justify-content: space-evenly;
}
.footer-inner a{
    border: 1px solid #283353;
    border-radius: 7px;
    padding: 5px 7px;
    font-size:12px ;
}
.footer-inner a:hover{
    background-color: #8cb369;
    color: #fff;
}
.ft-inpt{
    background-color: #27314f;
    border: none;
    color: #fff;
}
.ft-inpt:focus{
    border: none;
    box-shadow: none;
}
</style>