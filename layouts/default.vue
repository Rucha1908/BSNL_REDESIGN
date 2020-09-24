<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    
       
       <v-app-bar color="white" light fixed app height="160px">
       <img src="bsnllogo.png" style="width: 120px; padding-right: 30px;">
        
       <!-- Component Example -->
     
      <tabs/>
      
     
    </v-app-bar>
    

    <!-- Body -->
    <subtab/>
    <v-content light>
     
    
      <nuxt /> 
      
    </v-content>
    
    
   
    
    
    <!-- Footer -->
 

<script>
export default {
  name: "Header",
 
};
</script>
     <v-footer
    color="primary"
    padless
  >
  
    <v-col
        class="primary  py-4 text-center white--text"
        cols="4"
      >
       
      </v-col>
    
      <v-tab value="recent">
      <span>HELP</span>
      </v-tab>
      
      
  
      <v-tab value="recent">
     SITEMAP
      </v-tab>
      <v-tab value="recent">
      PREPAID
      </v-tab>
      <v-tab value="recent">
      <span>POSTPAID</span>
      </v-tab>
      <v-tab value="recent">
      <span>FIBER AND WIFI</span>
      </v-tab>
      <v-tab>
      <span>CUSTOMIZE NUMBER</span>
      </v-tab>
      </v-col>
      </v-col>
    </v-footer>
    
     
      <footer/>
    </v-footer>

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 20px solid;
  }

   #inspire {
    background-color: white;
    color:black; 
  }
</style>