<template>
    <hr>
    <footer class="footer">
        <img src="../assets/logo.png" width="155px" height="90px" alt="logo">
        <div class="footer-menu">
            <a href="HomeView.vue">About</a>
            <a href="HomeView.vue">FAQ</a>
            <a href="HomeView.vue">Size Guide</a>
            <a href="HomeView.vue">Shipping</a>
            <a href="HomeView.vue">Payment</a>
        </div>

        <div class="socialNetworks">
            <img src="../assets/twitter.png" alt="">
            <img src="../assets/facebook.png" alt="">
            <img src="../assets/instagram.png" alt="">
            <img src="../assets/linkedin.png" alt="">
        </div>
        <div class="references">
            <a href="HomeView.vue">@HerLine. All rights reserved</a>
            <a href="HomeView.vue">ER | PJ | AK | Privacy Policy</a>
        </div>
    </footer>

</template>

<script>
export default {
  
  name: 'Footer',
  


}

</script>

<style>

html, body {
    margin:0px;
    height:100%;
    width: 100%;
  }
.footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    min-height: 200px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: rgb(165, 119, 119);
}

.footer-menu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    font-family: Comic Sans MS, Comic Sans, cursive;
    width: 60%;
    margin-top: 20px;
    margin-bottom: 10px;
    
}

.footer-menu a {
    color: rgb(55, 47, 48);
    font-weight: bold;
    font-size: 23px;
    text-decoration: none;
}

.footer-menu a:hover{
    text-decoration: underline;
}

.socialNetworks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.socialNetworks img{
    height: 40px;
    width: 40px;
    cursor: pointer;
}

.references{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 15px;
    

}

.references a{
    text-decoration: none;
    color: rgb(51, 51, 51);
    font-size: 15px;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 35% ;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    

}

.references a:hover{
    text-decoration: underline;
}

@media only screen and (max-width:600px){
    .footer-menu , .socialNetworks{
        display: flex;
        flex-direction: column;
    }
}

</style>