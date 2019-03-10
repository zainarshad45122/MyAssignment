<template>
    <div>
         <a id="topheading" class="btn btn-primary Button"> Task Details </a>

        <div class="row">
            <div class="col-md-6">
                    <b-list-group>
                        <b-list-group-item>
                        <b>Title : </b>  {{title}}
                        </b-list-group-item>
                    <b-list-group-item>
                        <b>Description : </b>  {{description}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <b>Start Date : </b>  {{startDate}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <b>End Date : </b>  {{endDate}}
                    </b-list-group-item>

                    </b-list-group> 
            </div>
            <div class="col-md-6" v-if="show">
                 <form>
                <label><b>Enter Task Name : </b></label>
                <input type="text" class="form-control" v-model="title"/>
                 <label> <b>Enter Task Description : </b></label>
                <input type="text" class="form-control" v-model="description" />
                  <label><b> Enter Task Start Date : </b></label>
                <input type="date" class="form-control" v-model="startDate" />
                  <label> <b> Enter Task End Date : </b></label>
                <input type="date" class="form-control" v-model="endDate" />
                <hr>
                <button class="btn btn-warning Button" @click.prevent="createNew"> Update Task</button>
                </form>
            </div>
        </div>


    <button class="btn btn-success Button" @click="show=!show">Edit Task</button>
 
   
  </div>
        
    
</template>





<script>
  import {editEventBus} from './main.js';
  export default {
       name: 'View',
    data() {
        return {
            id:this.$route.params.id,
            title: this.$route.params.title,
            description: this.$route.params.description,
            startDate: this.$route.params.startDate,
            endDate: this.$route.params.endDate,
            show: false
        }
    },

      methods : {
          createNew(){
            if(this.title==""
                || this.description==""
                || this.startDate==""
                || this.endDate==""
            )
            {
                alert("Please fill all form fields");
                return false;
            }
             let replaceStartDate=this.startDate.replace(/\//g, '-');
             let replaceEndDate=this.endDate.replace(/\//g, '-');
              editEventBus.$emit('taskAdded', 
              {
                id: this.id,
                title:this.title, 
                description:this.description, 
                startDate:replaceStartDate, 
                endDate:replaceEndDate
              }
              
              );
          }
      }
    

  }
</script>

<style scope>
#topheading  {
    color: white;
    margin-left: 40%;
    margin-bottom: 5%;
    margin-top: 5%;
   
}

.Button{
  margin-top: 5%;
}
</style>