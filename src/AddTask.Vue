<template>
    <div class="container">
        <a id="topheading" class="btn btn-primary"> Add New Task</a>
        <div class="row">
            <div class="col-md-6">
                <form>
                <label><b>Enter Task Name : </b></label>
                <input type="text" class="form-control" v-model="title"/>
                 <label> <b>Enter Task Description : </b></label>
                <input type="text" class="form-control" v-model="description" />
                  <label><b> Enter Task Start Date : </b></label>
                <input type="text" class="form-control" v-model="startDate" />
                  <label> <b> Enter Task End Date : </b></label>
                <input type="text" class="form-control" v-model="endDate" />
                <hr>
                <button class="btn btn-warning" @click.prevent="createNew"> Add Task </button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
 import {eventBus} from './main.js';
  export default {
      data : function()
      {
          return {
              title: '',
              description: '',
              startDate: '',
              endDate: ''
          }
      },
      methods : {
          createNew(){
            
             let replaceStartDate=this.startDate.replace(/\//g, '-');
             let replaceEndDate=this.endDate.replace(/\//g, '-');
              eventBus.$emit('taskAdded', 
              {
                title:this.title, 
                description:this.description, 
                startDate:replaceStartDate, 
                endDate:replaceEndDate
              }
              
              );
              this.title= '';
              this.description='';
              this.startDate='';
              this.endDate='';
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

#deletebtn {
  float: right
}
</style>
