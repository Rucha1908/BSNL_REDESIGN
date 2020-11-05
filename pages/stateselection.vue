<template>
 <v-container>
  <div class="mt-5">
     <statebread/>
    </div>
     
    <div >
      <h1 style="color:#3588C4; font-family:Futura Std, sans-serif" class="font-weight-bold pa-sm-2"> Prepaid > View Plans > Select your state </h1>
      <br /><br /> </div>


      <!--Card for state selection -->

<v-card  class="cols-8 col-md-9 col-xs-1 " light  width="850px" height="140px" >

    
    <v-row>
          <v-autocomplete
            v-model="value"
            :items="items"
            
            label= "Choose your State"
            class="change-font pa-3 "
            
            height="100px">
            
           
           </v-autocomplete>
         
           
        </v-col>
         
        
        
           
           <v-btn height="100px"  style="color: primary; font-family:Futura Std, sans-serif" class=" font-weight-bold hidden-xs-only "  @click="$router.push('Browseplans')"> go </v-btn>
           <v-btn height="60px"  style="color: primary; font-family:Futura Std, sans-serif" class="font-weight-bold  hidden-sm-and-up col-md-9 col-xs-1  " @click="$router.push('Browseplans')"> go </v-btn>
           <button @click="$router.push('Browseplans')" > </button>
           </v-row>
           </v-card>
                   <br>
           <br>
           <br>
           <br>
            <br>
           <br>
           <br>
           


        <v-card class="pa-auto" tile >

        </v-card>
      </v-col>
      <v-col md="3" class="ml-md-auto">

      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

       <script>
  export default {
    data: () => (
    {
        fontSize: 30  
       

      ,items: ['Andaman and Nicobar Islands',
,'Andhra Pradesh',
,'Arunachal Pradesh',
,'Assam',
,'Bihar',
,'Chandigarh',
,'Chhattisgarh',
,'Dadra and Nagar Haveli',
,'Daman and Diu',
,'Delhi',
,'Goa',
,'Gujarat',
,'Haryana',
,'Himachal Pradesh',
,'Jammu and Kashmir',
,'Jharkhand',
,'Karnataka',
,'Kerala',
,'Lakshadweep',
,'Madhya Pradesh',
,'Maharashtra',
,'Manipur',
,'Meghalaya',
,'Mizoram',
,'Nagaland',
,'Odisha',
,'Puducherry',
,'Punjab',
,'Rajasthan',
,'Sikkim',
,'Tamil Nadu',
,'Tripura',
,'Uttar Pradesh',
,'Uttarakhand',
,'West Bengal',],
     
    }),
  }
</script>
<style lang="css" scoped>
  .change-font{
    font-size: 30px;
  }
</style>
