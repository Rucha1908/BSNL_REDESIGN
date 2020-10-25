<template>

  <div>
   <confirmbread/>
  
   <!--green confirmation box -->
  <v-row>
       

  <v-col align="center" 
  class="mx-auto pt-16 mt-16" width="250px" height="250px">
      </v-col>

     </v-row>
    <v-alert
    :value="alert"
      class="mx-auto"
      width="350px"
      height="250px"
      
      fill
      prominent     
      type="success"
      color="green"
    >
      <v-row>
        <v-col  align="left"><h1>Congratulations! <br> Recharge completed</h1> <h3> Enjoy your plan </h3>
        </v-col>   
      
      
            
      <v-col align="left">
        
        </v-col>
       
      </v-row>
    </v-alert>
    </v-row>
 </div>
</template>
   