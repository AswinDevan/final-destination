<template>
  <div class="container-fluid text-center">
   <div class="row">
    <div class="col-md-3 offset-md-1 mt-md-4 col-sm-5 offset-sm-1 mt-sm-2 col-xs-12 d-flex align-items-stretch" id="column" v-for="(detail,index) in details" :key="detail.id">
      <div class="card" style="border:1px solid black">
        <div class="card-header bg-dark text-light">
          <h4>{{detail.title}}</h4>
        </div>
        <div class="card-body">
          <img width="100%" :src="require(`@/assets/${detail.imgurl}`)" alt="Card Img">
          <p style="margin-top:10px" class="text-center">{{detail.info}}</p>
        </div>
        <div class="card-footer">
           <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="change(index)">Share</button>
           &nbsp;
           <button class="btn btn-secondary" @click="redir(index)">Explore</button>
        </div>
      </div>
      <br>
    </div>
   </div>
        <app-modal>
          <h5 slot="header" class="modal-title" id="exampleModalLabel">{{justname}}</h5>
          <img :src="require(`@/assets/${filename}`)" alt="Logo" width="100%">
          <p>{{about}}</p>
          <div slot="footer">
            <div v-if="visible">
              <button type="button" class="btn btn-primary" @click="visible=false">Share</button>
              &nbsp;
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            <div v-else>
               <h5 class="text-success d-inline">Destination shared</h5> &nbsp;
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </app-modal>
    </div>
</template>

<script>
import Router from '../route/index'
export default {
  name:'contentFile',
  data:function(){
    return{
        details:[],
        filename:'TajMahal.jpg',
        about:'',
        justname:'',
        visible:true,
    }
  },
  methods:{
    change(i){
      this.visible=true;
       this.filename=this.details[i].imgurl;
       this.about=this.details[i].info;
       this.justname=this.details[i].title;
    },
    redir(i){
      Router.push({name:'cardDetails',params:{id:i}})
    },
  },
  created(){
    this.$http.get("../details.json").then(function(res){
      this.details=res.data;
    });
  }
}
</script>

<style scoped>

@media screen and (min-width: 577px ) and (max-width:767px){
  .row{
    position: relative;
    right: 32px;
  }
}

@media screen and (min-width:768px) {
  .row{
    position: relative;
    right: 4.166vw;
  }
}

</style>