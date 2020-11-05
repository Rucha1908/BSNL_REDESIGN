<template>
  <!--Your App Starts Here -->
  
  <v-app id="inspire">
    
    <!--Header -->
    
     
       <v-app-bar color="white" light fixed app height="120px">
       <v-row>
       <v-col>
       <!--Logo files have two different sizes for small and extra small screens -->

       <img src="bsnllogo.png" style= "width: 180px; padding-left: 50px ; padding-right: 50px;" class="hidden-xs-only">
       </v-col>
       <v-col>
       <img src="bsnllogo.png" style= "width: 150px; padding-right: 90px ; padding-left: 50px;" class="hidden-sm-and-up pr-9 ">
        </v-col>
        </v-row>
        
         <v-row>
    
<!--Hamburger menu dropdown for sm and xs screens (an accordian has been used show show sub tabs) ) -->

<v-menu transition="slide-x-transition" light>
      <template v-slot:activator="{ on, attrs }">

      <!--menu btn -->
      <v-row justify="end">
        <v-btn
          color="#0160B0"
          width="60px"
          height="60px"
          v-bind="attrs"
          v-on="on"
          class="hidden-md-and-up white--text"
          style="font-family:Futura Md Bt, sans-serif"
          justify="e"
          @click.stop="drawer = !drawer"
          >
          
        <v-icon>
            mdi-menu 
            </v-icon>
        </v-btn>
        </v-row>
      </template>
       
      
     
      <v-expansion-panels accordion >
    <v-expansion-panel
    v-model="drawer"
      v-for="(item,i) in 1"
      :key="i"
      

    >

    <v-expansion-panel-header style="font-family:Futura Md Bt, sans-serif" class="blue--text">PREPAID</v-expansion-panel-header>
     <v-expansion-panel-content>
     <v-tab style="font-family:Futura Std, sans-serif"  > Recharge </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Prepaid to postpaid </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Roaming </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> International Roaming </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif" > Upgrade </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> View plans </v-tab>
      </v-expansion-panel-content>

      <v-expansion-panel-header style="font-family:Futura Md Bt, sans-serif" class="blue--text">POSTPAID</v-expansion-panel-header>
       <v-expansion-panel-content>
      <v-tab style="font-family:Futura Std, sans-serif"> Pay bills </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Roaming </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> View plans </v-tab>
   </v-expansion-panel-content>

      <v-expansion-panel-header style="font-family:Futura Md Bt, sans-serif" class="blue--text">FIBER AND WIFI</v-expansion-panel-header>
       <v-expansion-panel-content>
      <v-tab style="font-family:Futura Std, sans-serif"> Bharat Fiber </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Broadband </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Wi-Fi Max</v-tab>
 </v-expansion-panel-content>
  
      <v-expansion-panel-header style="font-family:Futura Md Bt, sans-serif" class="blue--text">CUSTOMIZENUMBERS</v-expansion-panel-header>
       <v-expansion-panel-content>
      <v-tab style="font-family:Futura Std, sans-serif"> Vanity Numbers </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Fancy Numbers </v-tab>
      <v-tab style="font-family:Futura Std, sans-serif"> Choose your Mobile Number (CYMN))</v-tab>
       </v-expansion-panel-content>
     
    </v-expansion-panel>
  </v-expansion-panels>


 </v-menu>
    <div class="mx-4 hidden-sm-and-down"></div>
    </v-row>

<!-- tabs for the main desktop layout -->
    <v-row  justify="start" class="  col-md-7">
       <tabs/>
       </v-row>

<!--Search bar and chips-->


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

     <v-footer style="color:#0160B0"
    color="black"
    padless
    
  >
  
    <v-row
        class="primary  py-4 text-center white--text"
        cols="4"
      >
       
      <v-col>
      <v-tab value="recent">
      <span style="font-family:Futura Std, sans-serif">HELP</span>
      </v-tab>
      </v-col>
      
      
       <v-col>
      <v-tab value="recent" style="font-family:Futura Std, sans-serif">
     SITEMAP
      </v-tab>
       </v-col>
        <v-col>
      <v-tab value="recent" style="font-family:Futura Std, sans-serif">
      PREPAID
      </v-tab>
       </v-col>
        <v-col>
      <v-tab value="recent">
      <span style="font-family:Futura Std, sans-serif">POSTPAID</span>
      </v-tab>
       </v-col>
        <v-col>
      <v-tab value="recent">
      <span style="font-family:Futura Std, sans-serif">FIBER AND WIFI</span>
      </v-tab>
       </v-col>
        <v-col>
      <v-tab>
      <span style="font-family:Futura Std, sans-serif">CUSTOMIZE NUMBER</span>
      </v-tab>
      </v-col>
      </v-row>
    </v-footer>
    
     
      <footer/>

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