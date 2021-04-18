<template>
    <div class="container-fluid">
       <div class="col-md-6 offset-md-3 col-sm-12 col-xs-12" @click="formreset()">
            <div class="card" style="width:100%;height:100%">
                <div class="card-header">
                     <h3>About {{details[id].title}}</h3>
                </div>
                <div class="card-body">
                      <img :src="require(`@/assets/${details[id].imgurl}`)" alt="Logo" width="100%">
                </div>
                <div class="card-footer">
                       <p>{{details[id].info}}</p>
                       <br>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates pariatur aperiam cumque fugiat! Unde sit officiis ullam iusto nemo laboriosam sint dolore, delectus et eveniet adipisci ut animi temporibus beatae.</p>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos quidem dolorum voluptatibus eum facere quas veniam ratione, at iste numquam recusandae autem magni reprehenderit modi animi alias non repudiandae?</p>
                       <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="changevis(true)">Add</button>
                </div>
            </div>
        </div>


        <app-modal>
          <h4 slot="header">Destination Form - {{details[id].title}}</h4>
          <div v-if="formvis">
         <ValidationObserver v-slot="{handleSubmit,invalid}">
           <form @submit.prevent="handleSubmit(end)" autocomplete="off">
              <div class="form-group">
                  <label for="username" class="control-label">Enter your name<span class="error">*</span></label>
                  <ValidationProvider name="User Name" rules="nameRequired" v-slot="{errors}">
                    <input type="text" class="form-control" name="username" v-model="name">
                    <span class="error">{{errors[0]}}</span>
                  </ValidationProvider>
              </div>
              <div class="form-group">
                  <label for="count" class="control-label">Enter number of tickets<span class="error">*</span></label>
                  <ValidationProvider name="tickets" rules="countRequired|positive" v-slot="{errors}">
                    <input type="number" class="form-control" name="count" v-model="tickets">
                    <span class="error">{{errors[0]}}</span>
                  </ValidationProvider>
              </div>
              <div class="form-group">
                  <label for="userdate" class="control-label">Enter date<span class="error">*</span></label>
                  <ValidationProvider name="User Date" rules="dateRequired|dateLate" v-slot="{errors}">
                    <input type="date" class="form-control" name="userdate" v-model="date">
                    <span class="error">{{errors[0]}}</span>
                    <span class="error">{{errors[1]}}</span>
                  </ValidationProvider>
              </div>
              <div class="form-group">
                  <label for="typeoftravel" class="control-label d-block">Choice of Travel<span class="error">*</span></label>
                  <ValidationProvider name="Travel Type" rules="choicereq" v-slot="{errors}">
                    <select name="typeoftravel" class="form-control" v-model="choice">
                      <option value="Car">Ship</option>
                      <option value="Train">Train</option>
                      <option value="Aeroplane">Flight</option>
                    </select>
                    <span class="error">{{errors[0]}}</span>
                  </ValidationProvider>
              </div>
              <div class="form-group">
                    <label for="textArea" class="label-control">Tell us more:</label>
                    <textarea class="form-control" name="textArea" v-model="textarea" rows="3"></textarea>
              </div>
                    <input type="submit" :disabled="invalid" value="Submit">
           </form>
         </ValidationObserver>
         </div>
         <div v-else class="text-center">
               <p>The details are submitted as follows:</p>
               <p>Name:{{name}}</p>
               <p>Date of Journey:{{date}}</p>
               <p>Tickets booked:{{tickets}}</p>
               <p>Mode of Journey:{{choice}}</p>
               <p>Additional info provided (if any):{{textarea}}</p>
         </div>
          <span class="success" slot="footer">{{successMessage}}</span>
          <div v-if="!formvis" slot="footer">
               <button class="btn btn-primary" data-dismiss="modal" @click="formreset()">Close</button>
          </div>
        </app-modal>
    </div>
</template>
<script>
import {extend} from 'vee-validate';
import {required} from 'vee-validate/dist/rules'

extend("dateLate",data=>{
  var todayTime = new Date();
    var month = todayTime .getMonth() + 1
    var day = todayTime .getDate();
    var year = todayTime .getFullYear();
    if(Number(day)<10){
      day="0"+day;
    }
    if(Number(month)<10){
      month="0"+month;
    }
    let todayDate= year + "-" + month + "-" +day ;
  if(data>todayDate){
    return true;
  }return "Date should not be less than or equal to today"
});

extend("dateRequired",{
  ...required,
  message:"Date required"
});

extend("nameRequired",{
  ...required,
  message:"Name required"
})

extend("choicereq",{
  ...required,
  message:"Choice is required"
})

extend("countRequired",{
  ...required,
  message:"Value is required for this field"
})

extend("positive",value=>{
  if(value>0){
    return true;
  } return "Tickets can't be zero or negative"
})
export default {
    name:'cardDetails',
    data:function(){
      return{
          details:[],
          id:0,
          date:'',
          name:'',
          tickets:'',
          successMessage:'',
          choice:'',
          textarea:'',
          formvis:true,
      }
    },
  methods:{
     end(){
       this.successMessage=this.name+" has successfully submitted";
       this.formvis=false;
     },
     formreset(){
       this.date=null;
       this.name=null;
       this.tickets=null;
       this.textarea=null;
       this.choice=null;
       this.successMessage=null;
     },
     changevis(val){
       this.formvis=val;
     }
  },
    created(){
      this.$http.get("../details.json").then(function(res){
      this.details=res.data;
    });
  },mounted(){
      this.id=this.$route.params.id;
  }
}
</script>

<style scoped>
.success{
  color:green;
}
.error{
  color:red;
}
</style>