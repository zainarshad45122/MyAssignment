<template>

  <div>
    <a id="topheading" class="btn btn-primary"> Task Assignment</a>

    <b-list-group>
        <b-list-group-item v-for="(task,i) in myTasks">
            {{i}} . <b>Task title :</b>
            <router-link :to="`/View-Task/${i}/${task.title}/${task.description}/${task.startDate}/${task.endDate}`">
               {{task.title}}
            </router-link>
          <button id="deletebtn" class="btn btn-danger" @click="remove(i)"> Delete</button>
      </b-list-group-item>
    </b-list-group>

          <router-link :to="`/Add-Task`" class="btn btn-warning addBtn">
              Add New Task
            </router-link>
  </div>
</template>

<script>
  export default {
     props : 
     { 
       myTasks : 
        {
          type: Array,
          required: true
        }
     },

      methods : {
          remove(x){
               this.$delete(this.myTasks, x);
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
  float: right;
}

.addBtn{
  margin-top:5%;
}

</style>
