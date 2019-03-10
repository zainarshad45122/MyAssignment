<template>
  <div id="app" class="container">
      <router-view :myTasks="Tasks"> </router-view>
   </div>
</template>

<script>
 import {eventBus} from './main.js';
import {editEventBus} from './main.js';
export default {
  name: 'app',
  data () {
    return {
      Tasks: [
        {title: 'Task1' , description: 'This is Task No.1', startDate: '2-9-2019', endDate:'3-9-2019' },
         {title: 'Task2' , description: 'This is Task No.2', startDate: '2-9-2019', endDate:'3-9-2019' },
          {title: 'Task3' , description: 'This is Task No.3', startDate: '2-9-2019', endDate:'3-9-2019' },
           {title: 'Task4' , description: 'This is Task No.4', startDate: '2-9-2019', endDate:'3-9-2019' }
      ],
    }
  },
   created : function()
   {
     eventBus.$on('taskAdded' , (data) => 
     {
      this.Tasks.push(data);   
     this.$router.push('/');
     }
     );
     editEventBus.$on('taskAdded' , (data) => {
     this.Tasks[data.id].title= data.title;
     this.Tasks[data.id].description= data.description;
     this.Tasks[data.id].startDate=data.startDate;
     this.Tasks[data.id].endDate=data.endDate;
     this.$router.push('/');
     }
     );
   },
}
</script>

