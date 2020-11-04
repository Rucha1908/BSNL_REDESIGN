<template>


  <!--Horizontal menu tab is visible only in md and above screens -->
  <v-row
     
  >

  <v-col>
    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text small
          color="primary"
          class="mt-4 hidden-sm-and-down" 
          v-bind="attrs"
          v-on="on"
          width="200px" 
          >
         <h3>PREPAID </h3>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-tab > Recharge</v-tab>
           <v-tab @click="check; $router.push('stateselection')"> View Plans</v-tab>
            <v-tab> Upgrade to postpaid</v-tab>
             <v-tab> International Roaming</v-tab>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>
    <v-col>

    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text small
          color="primary"
          class="mt-4 hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
           width="200px"
        >
          <h3>POSTPAID</h3>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</v-col>
<v-col>
    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text small
          color="primary"
          class="mt-4 hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
           width="200px"
        >
           <h3>FIBER AND WIFI </h3>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>
    <v-col>

    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text small
          color="primary"
          class="mt-4 hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
          width="200px"
        >
          <h3>CUSTOMIZE NUMBER </h3>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>

    
    </v-row>
  
</template>

