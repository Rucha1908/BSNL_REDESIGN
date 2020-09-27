<template>
 <v-container>
  <div class="mt-5">
     <statebread/>
    </div>
     
    <div >
      <h1> Prepaid > View Plans > Select your state </h1>
      <br /><br /> </div>


      <!--Card for state selection -->

<v-card  class="cols-6 col-md-6 col-xs-1" light  width="850px">
    
 <v-col cols="12" color="white" >            
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
           
            filled
            label= "Choose your State"
            class="change-font"
            
            height="100px"
           
           
          ></v-autocomplete>
        </v-col>
        
        </v-card>


        <v-card class="pa-auto" tile>

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
