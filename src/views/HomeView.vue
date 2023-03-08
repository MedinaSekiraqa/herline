<template>
  <div class="fillimi">
    <div class="col2">
          <h1>Give yourself new clothes!</h1>
         <p class="paragraph">LIFE IS SHORT <br>Make every outfit count</p>
         <a href="product.php" class="btn">Explore Now &#8594;</a>
     </div>
    <div class="pic">
        <img src="../assets/pink.jpg" width=300px>
    </div>
   </div>

   <h2 class="title">Latest Products</h2>
                  <div class="col-4">
                    <div class="prd1">
                        <img src="../assets/pic6.jpg" height="260px">
                        <h4>Pink Polka Dot Dress</h4>
                        
                    </div>
                    <div class="prd1">
                        <img src="../assets/pic6.jpg" height="260px">
                        <h4>V-neck Mini Dress</h4>
                        
                   </div>
                   <div class="prd1">
                        <img src="../assets/pic7.jpg" height="260px">
                         <h4>Bottom Ruffle Dress</h4>
                       
                  </div>
                   <div class="prd1"> 
                       <img src="../assets/pic8.jpg" height="260px">
                        <h4>Shirt Dress</h4>
                        
                </div>
            </div>
         
            <div class="col-5">
                <div class="prd1">
                     <img src="../assets/heels1.jpg" height="260px" width="180">
                     <h4>Hot Pink Block Sandals</h4>
                    
                </div>
               <div class="prd1">
                    <img src="../assets/heels2.jpg" height="260px" width="180">
                    <h4>Block Heeled Sandals</h4>
                   
               </div>
              <div class="prd1">
                    <img src="../assets/heels3.jpg" height="260px" width="180">
                    <h4>Baby Pink Lace Up Stiletto</h4>
                   
              </div>
               <div class="prd1"> 
                   <img src="../assets/heels4.jpg" height="260px" width="200">
                   <h4>Pink Lace Up Square Toe Heels</h4>
               
            </div>
            </div>
      

</template>
  



<script>


export default {
  name: 'HomeView',
 
}
</script>

<style>
  .fillimi{
    display: flex;
    flex-direction:row ;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top:70px ;
    
    }
.col2{
        flex-basis:50%;
        min-width: 300px;
      
    } 
.pic img{
         max-width:100%;
         padding:50px 0;
         box-shadow:0rem 2rem 6rem rgb(160, 56, 74) ;
    }
h1{
    color:rgb(229, 149, 176);
    font-size: 50px;
    font-family:  'Poppins', sans-serif;
    line-height: 50px;
    margin-left: 3%;
    letter-spacing: 2px;
}

.col-4{
  display: flex;
  flex-direction: row;
  margin-left: 15%;
  padding:10px;
  min-width:200px;
  font-size:small;
  font-family: 'Poppins', sans-serif;
  color: rgb(54, 53, 53);
 

}
.title{
  text-align:center;
  margin-top: 10%;
  margin-right:8%;
  position: relative;
  line-height:60px;
  color: #555;
}
.title::after{
  content:'';
  background:#ff523b;
  width:80px;
  height:5px;
  border-radius:5px;
  position: absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);

}
.prd1{
  margin:15px;

  color:rgb(150, 119, 140);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
}
.prd1:hover{
  transform: translateY(-5px);
}
.col-5{
  display: flex;
  margin:6px;
  padding:10px;
  min-width:200px;
  margin-bottom:5%;
  margin-left:15%;
  font-size:small;
  font-family: 'Poppins', sans-serif;
  color: rgb(54, 53, 53);
 }

</style>