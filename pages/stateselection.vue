<template>
 <v-container>
  <div class="mt-5">
      <h4> Prepaid / View plans / Select your state / Browse plans / Confirmation </h4>
    </div>
     <br /><br /><br /><br /><br /><br/>
    <div class="pl-16 ml-16">
      <h1> Prepaid> View Plans> Select your state </h1>
      <br /><br /> </div>


      <v-row>
      <v-col class="pl-16 ml-16"> <v-card height="300px" width="1500px">
        <v-card-title class="headline font-weight-regular blue-grey white--text">Choose your state</v-card-title>
        <v-card-text>
          <v-subheader>Where do you live?</v-subheader>
          <v-autocomplete v-model="model" :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
            :items="states" :readonly="!isEditing" :label="`State — ${isEditing ? 'Editable' : ''}`" persistent-hint
            prepend-icon="mdi-city">
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
                <v-icon :key="`icon-${isEditing}`" :color="isEditing ? 'success' : 'info'"
                  @click="isEditing = !isEditing" v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'">
                </v-icon>
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </v-card-text>
      </v-card>


        <script>
          export default {
            data() {
              return {
                isEditing: false,
                model: null,
                states: [
                  'Andhra Pradesh', 'Assam', 'Arunachal Pradesh', 'Bihar',
                  'Chattisgarh', 'California', 'Colorado', 'Connecticut',
                  'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                  'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                  'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                  'Missouri', 'Montana', 'Nebraska', 'Nevada',
                  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                  'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                  'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                  'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
                ],
              }
            },
          }

        </script>

        <v-card class="pa-auto" tile>

        </v-card>
      </v-col>
      <v-col md="3" class="ml-md-auto">

      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
