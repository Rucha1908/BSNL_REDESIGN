<template>
<v-container>
    <div class="mt-5">
      <h4> Prepaid / View plans / Select your state / Browse plans / Confirmation </h4>
    </div>
     <br /><br /><br /><br /><br /><br />
    <div class="ml-8 pl-8">
      <h1> Prepaid> View Plans> Select your state </h1>
      <br /><br />





      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>



        <v-col cols="6" md="4" xs= "2" class="pr-8">
          <v-btn outline block class="primary" style="width: 100px ; height: 70px"> POPULAR PLANS </v-btn><br>

          <v-btn outline block class="primary" style="width: 100px ; height: 70px"> DATA </v-btn><br>
          <v-btn outline block class="primary" style="width: 100px ; height: 70px"> TALKTIME </v-btn><br>
          <v-btn outline block class="primary" style="width: 100px ; height: 70px"> GENERAL TOPUP </v-btn>




          </v-card>
        </v-col>




        <v-col cols="6" md="4" xs="2" class="pr-8 ">
          
            <v-row class="primary" style="width: 600px ; height: 70px">
              <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon
                label="Sort by"></v-select>
            </v-row>



            <v-row  md="16" xs="1" style="width: 1000px ; height: 800px" v-for="(item,i) in " :key="i" >

              <v-expansion-panels accordion md="16" xs="18">

                <v-expansion-panel v-for="(item,i) in 8" :key="i" md="16" xs="8">

                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          



        </v-col>
      </v-row>


      </v-card>
      </v-col>
      </v-row>
    </div>
  </v-container>
</template>
