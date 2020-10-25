<template>
<!--Breadcrumbs for Browse plans page -->
  <div >
   

    <v-breadcrumbs :items="items" light style="color:#3588C4; font-family:Futura Std, sans-serif">
      <template v-slot:divider >
        <v-icon >mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Select State',
          disabled: true,
          href: 'http://localhost:3000/BSNL_REDESIGN/stateselection',
        },
        {
          text: 'Browse Plans',
          disabled: false,
          
        },
        {
          text: 'Confirmation Page',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>