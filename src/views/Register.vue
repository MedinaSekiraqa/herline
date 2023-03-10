<template>
    <main class="register-area">
        <h1 class="color">Register new user</h1>
        <br>
        <form  class="register-form">
            <div class="form-group">
                <label for="name">Name </label>
                <input id="name" type="text"/>
            </div>
            <div class="form-group">
                <label for="email">Email </label>
                <input id="email" type="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password </label>                             
                <input id="password" type="password" required/>
            </div>
            <div class="controlls">
                <button>Register</button>
            </div>
        </form>
    </main>
</template>


<script>
    export default {
  
  name: 'Register',
 
  


}
</script>
<style>
form{
    padding-top: 50px;
    padding-bottom: 50px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap:1.25rem;
    background-color:whitesmoke;

}

h1{
    
    letter-spacing: -0.5px;
}
label{
    min-width: 120px;
    display:inline-block;
}
input{
    padding: .5rem .75rem;
    border-radius: 20px;
    border:none;

}
.controlls>button{
    color:antiquewhite;
    padding:0.10rem 0.75rem;
    text-transform: uppercase;
    background-color: blueviolet;
    border:none;
    font-weight: 800;
    letter-spacing: 2px;
    border-radius: 20px;

}


</style>