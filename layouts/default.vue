<template>
  <!--Your App Starts Here -->
  
  <v-app id="inspire">
    
    <!--Header -->
    
     
       <v-app-bar color="white" light fixed app height="120px">
         <v-row
    
  >

    <!--Hamburger menu dropdown for sm and xs screens -->


    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          width="60px"
          height="60px"
          v-bind="attrs"
          v-on="on"
          class="hidden-md-and-up"
          justify="start"
          @click.stop="drawer = !drawer"
          
         
          
        >
          menu
        </v-btn>
      </template>

      <v-expansion-panels accordion >
    <v-expansion-panel
    v-model="drawer"
      v-for="(item,i) in 5"
      :key="i"

    >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
      <v-btn text> View plans </v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>









    </v-menu>
    <div class="mx-4 hidden-sm-and-down"></div>
    </v-row>

    <!--Logo files have two different sizes for small and extra small screens -->
       <v-row 
       
       >
       <img src="bsnllogo.png" style="width: 180px; padding-left: 50px ; padding-right: 50px;" class=" pl-ml-16 hidden-xs-only">
       <img src="bsnllogo.png" style="width: 150px; padding-left: 50px ; padding-right: 50px;" class=" pl-ml-16 hidden-sm-and-up">
        </v-row >
       <!-- Component Example -->
        <v-row  justify="start" class="  col-md-7">
       <tabs/>
       </v-row>

       <!--Search bar and other buttons-->


      <v-row  justify="end" class="  col-md-2 col-xs-1 col-sm-2">
       <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            class="hidden-xs-only"
            label="Search"
           
          ></v-text-field>

         

          
          </v-row>

          <v-row  justify="end" class="col-md-2 col-xs-1 col-sm-4 hidden-xs-only">
          <v-col  justify="end">
           <v-btn text small color="primary">career</v-btn>
           <v-btn text small color="primary">corporate</v-btn>
               </v-col>
           <v-col>
           <v-btn text small color="primary">Sign up</v-btn>
           <v-btn text small color="primary">Log in</v-btn>
           </v-col>
           
           </v-row>
      
     
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
  
    <v-row
        class="primary  py-4 text-center white--text"
        cols="4"
      >
       
      <v-col>
      <v-tab value="recent">
      <span>HELP</span>
      </v-tab>
      </v-col>
      
      
       <v-col>
      <v-tab value="recent">
     SITEMAP
      </v-tab>
       </v-col>
        <v-col>
      <v-tab value="recent">
      PREPAID
      </v-tab>
       </v-col>
        <v-col>
      <v-tab value="recent">
      <span>POSTPAID</span>
      </v-tab>
       </v-col>
        <v-col>
      <v-tab value="recent">
      <span>FIBER AND WIFI</span>
      </v-tab>
       </v-col>
        <v-col>
      <v-tab>
      <span>CUSTOMIZE NUMBER</span>
      </v-tab>
      </v-col>
      </v-row>
      </v-col>
    </v-footer>
    
     
      <footer/>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {panel:'PREPAID', button: 'Recharge', button1:'Prepaid to Postpaid',button2:'Roaming',button3: 'International Roaming', button4:'Upgrade',button5:'View Plans '},
          {panel:'POSTPAID', button: 'Pay Bills', button1:'Roaming',button2:'International Roaming', button3: 'View Plans' },
          {panel:'FIBER & WIFI', button: 'Why Bharat Fiber?', button1:'Check Locality',button2:'View Plans' },
          {panel:'CUSTOMIZE NUMBER', button: 'Vanity Numbers?', button1:'Fancy Numbers',button2:'Choose Mobile Number'},
          
        ],
      }
    },
  }
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