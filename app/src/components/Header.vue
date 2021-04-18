<template>
  <div class="container-fluid fixed-top">
    <nav class="navbar navbar-expand bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <span class="navbar-brand">
              <img src="../assets/logo.png" width="30" height="30" alt="Logo">
          </span>
        </li>
        <li class="nav-item" @click="closeNav()">
          <router-link name="viewDetails" to="/home" class="nav-link">Home</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
                <button type="button" class="btn btn-secondary btn-circle" @click="openNav()">
                    AD
                </button>
        </li>
      </ul>
    </nav>
          <div id="mySidepanel" class="sidepanel">
             <button class="closebtn" type="button" @click="closeNav()">
          <span aria-hidden="true">&times;</span></button>
             <a href="#">Dashboard</a>
             <a href="#">Personal Data</a>
             <a href="#">Official Data</a>
             <a href="#">Lex</a>
          </div>
  </div>
</template>

<script>
export default {
  name: "headFile",
  methods:{
 openNav() {
   var wid = screen.width;
   if(wid>="768"){
       document.getElementById("mySidepanel").style.left = "80vw";
   }
   else{
     document.getElementById("mySidepanel").style.left = "60vw";
   }
},
closeNav(){
  document.getElementById("mySidepanel").style.left = "100vw";
}
  }
};
</script>

<style scoped>
.container-fluid{
  padding: 0px 0px 0px 0px;
}
.btn.btn-circle{
            width: 30px;
            height: 30px;
            padding: 6px 0px;
            border-radius: 15px;
            font-size: 8px;
            text-align: center;
        }

.navbar{
  padding-top: 10px;
  padding-bottom: 10px;
  max-height: 40px;
}

.sidepanel a:hover {
  color: black;
}

.sidepanel a {
  padding: 0.5em 0.5em 0.5em 0.5em;
  font-size: 1.25em;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel .closebtn {
  position: absolute;
  background-color: aliceblue;
  top: 0;
  right: 0.5em;
  font-size: 2em;
  border: 0;
}

.sidepanel {
  height: 100vh;
  width: 20vw; 
  position: fixed; 
  z-index: 1; 
  top: 40px;
  left: 100vw;
  background-color: aliceblue; 
  overflow-x: hidden; 
  padding-top: 60px; 
  transition: 0.5s; 
}

@media screen and (max-width:767px) {
  .sidepanel {
  width: 40vw; 
}

}

</style>