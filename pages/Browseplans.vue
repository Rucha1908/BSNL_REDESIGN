<template>
<v-container>
    
   <browsebread/> 
    
     <spacer></spacer>
     
      <h1 > Prepaid > View Plans > Select your state </h1>
      <br /><br />
     
     




      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <!--Buttons for plan  categories -->
      <v-row>



        <v-col class=" cols-6 col-md-2 col-xs-1 col-sm-1  hidden-sm-and-down" >
          <v-btn outline block class="primary" style="width: 80px ; height: 70px"> POPULAR PLANS </v-btn><br>

          <v-btn outline block class="primary" style="width: 80px ; height: 70px"> DATA </v-btn><br>
          <v-btn outline block class="primary" style="width: 80px ; height: 70px"> TALKTIME </v-btn><br>
          <v-btn outline block class="primary" style="width: 80px ; height: 70px"> GENERAL TOPUP </v-btn>




         
        </v-col>

       <!--Hidden menu dropdown for extra small screens only -->


        <v-col class="pl-3"
    
  >
    <v-menu transition="slide-x-transition" class="pl-4">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          width="260px"
          height="60px"
          v-bind="attrs"
          v-on="on"
          class="hidden-md-and-up"
          justify="start"
          padding-left="20px"
          @click.stop="drawer = !drawer"
          
         
          
        >
          Select Plan Categories
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>

        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>
    </v-menu>

    <!--Data iterator -->


        

        <v-col class=" col-md-9 col-xs-3" >
          
            <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      
      :sort-desc="sortDesc"
      hide-default-footer
      class="pl-n1"
      
    >
      <template v-slot:header class="pl-n5">
        <v-toolbar
          light
          color="white"
           width="560px"
        
          
        >
          <v-text-field
            v-model="search"
            clearable
            flat
        
            hide-details
           
            label="Search"
          ></v-text-field>
          <template >
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
             
              hide-details
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

      <!--Accordion -->

           <br>
           
            <v-row  xs= "2" sm="4" >
           
              <v-expansion-panels accordion class="pl-3" light>

                <v-expansion-panel  style="height: 170px " v-for="(item,i) in 5" :key="i">

                  <v-expansion-panel-header  >Item</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
            </v-col>
          



        </v-col>
      </v-row>


      </v-card>
      </v-col>
      </v-row>
   
  </v-container>
</template>

 