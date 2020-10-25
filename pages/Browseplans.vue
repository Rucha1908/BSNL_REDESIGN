<template>
<v-container>
    
    <browsebread/> 
    
     <spacer></spacer>
     
      <h1 style="color:#3588C4; font-family:Futura Std, sans-serif" class="font-weight-bold pa-sm-2"> Prepaid > View Plans > Select your state </h1>
      <br /><br />
     
     <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <!--Buttons for plan  categories -->
     
      <v-row>

          <v-card
        class="col-md-3 col-xs-5 col-sm-7"
        light
        color="#A5F2EA"
        width="700px"
        height="230px"
        
      >
        <v-list >
          <v-list-item-group
            v-model="model"
            
            color="#707070"
        
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          
        >
          <v-list-item-content>
                 
                    <v-list-item-title v-text="item.text"></v-list-item-title></button>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      
 <!--Data iterator -->

        <v-col>
          
            <v-data-iterator
      :items="items"
   
      :page="page"
      :search="search"
      
      :sort-desc="sortDesc"
      hide-default-footer
      
      
    >
      <template v-slot:header>
        <v-toolbar
          
          color="#A5F2EA"
           width="860px"
           height="60px"
           rounded
        
          
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            
            hide-details
           
            label ="Search"
          ></v-text-field>
          <template >
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
             solo-inverted
              
              hide-details
              prepend-inner-icon="mdi-magnify"
              :items="keys"
              
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              
              </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>
      </v-data-iterator> 

      <br>

      <!--Accordions -->

      <!--Accordion 1 -->
           
    <v-expansion-panels accordion light style="height: 145px">
      <v-expansion-panel>

        <v-expansion-panel-header style="color:#0161B0;" class="d-flex justify-space-around caption"   >
        
        <div class="d-flex justify-space-between caption">

                    <div class="grey--text">
                      Rs. 16/-
                    </div>

                    
                    <div class="grey--text ">
                      1 day
                    </div>

                    <div
                      class="grey--text "
                     
                    >
                     1 GB/day</div>

                    </div>
        
            </v-expansion-panel-header>
    
        <v-expansion-panel-content >


                <div class="d-flex justify-space-between caption">
        
                    
                    <div class="font-weight-medium">
                      DATAtsunami
                    </div>
                    
                 <div
                      class="font-weight-medium">
                    (Calendar days) Validity  
                </div>
                      
                      <div
                      class="font-weight-medium">
                        Unlimited Data speed reduced to 40 Kbps after 2GB/day 
                        </div>
                
                  
               
                      
                    
            

                  
                    
                 
                  </div>
          
        </v-expansion-panel-content>


                  

      </v-expansion-panel>
    </v-expansion-panels>
           <br>
               <!--Accordion 2-->

           <v-expansion-panels accordion light style="height: 145px">
      <v-expansion-panel>

        <v-expansion-panel-header style="color:#0161B0;" class="d-flex justify-space-around caption"   >
        
        <div class="d-flex justify-space-between caption">

                    <div class="grey--text">
                      Rs. 16/-
                    </div>

                    
                    <div class="grey--text ">
                      1 day
                    </div>

                    <div
                      class="grey--text "
                     
                    >
                     1 GB/day</div>

                    </div>
        
        
        
        
        
        
        
         </v-expansion-panel-header>
    
        <v-expansion-panel-content >


                <div class="d-flex justify-space-between caption">
        
                    
                    <div class="font-weight-medium">
                      DATAtsunami
                    </div>
                    
                  

                  

                    <div
                      class="font-weight-medium"> (Calendar days) validity
 
                 </div>
                      
                      <div
                      class="font-weight-medium">
                        Unlimited Data speed reduced to 40 Kbps 
after 2GB/day 
                
                  
                    </div>
                      
                    
            

                  
                    
                 
                  </div>
          
        </v-expansion-panel-content>


                  

      </v-expansion-panel>
    </v-expansion-panels>
           <br>
           
           
               <!--Accordion 3-->

             <v-expansion-panels accordion light style="height: 145px">
      <v-expansion-panel>

        <v-expansion-panel-header style="color:#0161B0;" class="d-flex justify-space-around caption"   >
        
        <div class="d-flex justify-space-between caption">

                    <div class="grey--text">
                      Rs. 16/-
                    </div>

                    
                    <div class="grey--text ">
                      1 day
                    </div>

                    <div
                      class="grey--text "
                     
                    >
                     1 GB/day</div>

                    </div>
        
        
        
        
        
        
        
         </v-expansion-panel-header>
    
        <v-expansion-panel-content >


                <div class="d-flex justify-space-between caption">
        
                    
                    <div class="font-weight-medium">
                      DATAtsunami
                    </div>
                    
                  

                  

                    <div
                      class="font-weight-medium">
(Calendar days)
Validity                  </div>
                      
                      <div
                      class="font-weight-medium">
                        Unlimited Data speed reduced to 40 Kbps 
after 2GB/day 
                
                  
                    </div>
                      
                    
            

                  
                    
                 
                  </div>
          
        </v-expansion-panel-content>


                  

      </v-expansion-panel>
    </v-expansion-panels>
           

            </v-col>
          



        </v-col>
  


      </v-card>
      </v-col>
      </v-row>
   
  </v-container>
</template>

<script>
  export default {
    data: () => ({
        
        keys: [
          'Price low to high',
          'Price high to low',
          'Data high to low',
          'Data low to high',
          
        ],
      items: [
        {
          
          text: 'Popular Plans',
          
          
        },
        {
          text: 'DATA',
        },
        {
          text: 'Talktime',
        },
         {
          text: 'General Top-up',
        },
      ],
   
    }),
  }
   
  
</script>

<style >

</style>