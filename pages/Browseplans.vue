<template>
<v-container>
    <v-row class="pr-16">
      <browsebread/> 
      </v-row>
    
     <spacer></spacer>
     <!-- guide for the user to understand where he/she is -->
      <h1 style="color:#3588C4; font-family:Futura Std, sans-serif" class="font-weight-medium pa-sm-2"> Prepaid > View Plans > Browse Plans </h1>

      <!-- name of the state selected -->
      <h3 style="color:#707070; font-family:Futura Std, sans-serif" class="font-weight-light pa-sm-2"> Bihar </h3>
      <br/>
     
     <!-- Stack the columns on mobile by making one full-width and the other half-width -->
     
      <!--Buttons for plan  categories: DATA, popular plans top-up and roaming -->
     
      <v-row class="pl-4">

          <v-card
        class="col-md-2  col-sm-7 pt-2"
        light
        color="#A5F2EA"
        height="300px">
        
          <v-list color="#A5F2EA" 

        >
          <v-list-item-group
            v-model="model">
          <!-- for loop used for writing DATA, popular plans top-up and roaming -->              
         <v-list-item
          v-for="(item, i) in items"
          :key="i">
          
       
          <v-list-item-content>
                 
                    <v-list-item-title v-text="item.text" style="color:#707070; font-family:Futura Book, sans-serif" class="font-weight-medium pa-sm-2"></v-list-item-title></button>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      
 <!--Data iterator: Search and Sort by options-->

        <v-col>
          
            <v-data-iterator
      :items="items"
   
      :page="page"
      :search="search"
      
      :sort-desc="sortDesc"
      hide-default-footer>
      
      <template v-slot:header>
        <v-toolbar
          
          color="primary"
           width="860px"
           height="60px"
           rounded>
       
        <v-text-field
            v-model="search"
            clearable
            flat
            
            hide-details
           rounded
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

      <!--Accordions for plan display -->

      <!--Accordion 1 -->
           
    <v-expansion-panels accordion light style="height: 145px">
      <v-expansion-panel>

      <!-- display content of accordian -->

        <v-expansion-panel-header style="color:#0161B0;" class="d-flex justify-space-around caption"   >
        
        <div class="d-flex justify-space-between caption" >
        <div class="grey--text" style="font-size:20px">
                      Rs. 16/-  </div>
                   
         <div class="grey--text " style="font-size:20px">
                      1 day
                    </div>

                    <div
                      class="grey--text " style="font-size:20px"> 1 GB/day</div></div>

          </v-expansion-panel-header>
   <v-expansion-panel-content >
   <div class="d-flex justify-space-between caption">
        
                    <div class="font-weight-medium">
                      DATAtsunami
                    </div>
                    
                 <div class="font-weight-medium">
                    (Calendar days) Validity  
                </div>
                      
                      <div class="font-weight-medium">
                      Unlimited Data speed reduced to 40 Kbps after 2GB/day 
                        </div>

                        <!-- BUY button -->
                <v-btn width="80px" color="#DB1920" height="30px" @click="check; $router.push('confirmationpage')" > BUY </v-btn>
                 </div> 
                  </v-expansion-panel-content>
                 </v-expansion-panel>
                 </v-expansion-panels>
                 <br>


                <!--Accordion 2-->


           <v-expansion-panels accordion light style="height: 145px">
      <v-expansion-panel>

         <!-- display content of accordian -->
        <v-expansion-panel-header style="color:#0161B0;" class="d-flex justify-space-around caption"   >
        
        <div class="d-flex justify-space-between caption">

                    <div class="grey--text" style="font-size:20px">
                      Rs. 57/-
                    </div>

                    
                    <div class="grey--text " style="font-size:20px">
                      10 days
                    </div>

                    <div
                      class="grey--text " style="font-size:20px">
                     1.5 GB/day</div>

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
                        Unlimited Data speed reduced to 40 Kbps after 2GB/day 

                         </div>
                         <!-- BUY button -->
                    <v-btn width="80px" color="#DB1920" height="30px" @click="check; $router.push('confirmationpage')" > BUY </v-btn>
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

                    <div class="grey--text" style="font-size:20px">
                      Rs. 97/-
                    </div>

                    
                    <div class="grey--text " style="font-size:20px">
                      30 days
                    </div>

                    <div
                      class="grey--text " style="font-size:20px"
                     
                    >
                     1.5 GB/day</div>

         </div>        
         </v-expansion-panel-header>
    
        <v-expansion-panel-content >
        <div class="d-flex justify-space-between caption">
        
                    <div class="font-weight-medium">
                      DATAtsunami
                    </div>
                   <div
                      class="font-weight-medium"> (Calendar days) Validity   
                   </div>
                   <div
                      class="font-weight-medium">
                        Unlimited Data speed reduced to 40 Kbps after 2GB/day 
                       </div>

                       <!-- BUY button -->
         <v-btn width="80px" color="#DB1920" height="30px" @click="check; $router.push('confirmationpage')" > BUY </v-btn>
                    
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
          disabled: 'false',
          href: 'Browseplans_DATA', 
          
          
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
                         

                    
                     

                    
                    
        
            
                    
                   
                      
                    
            

                  
                    
                 
  
          
        



                
                    
        
        
     
                  
                    
                  

                  

                    
                
                  
                   