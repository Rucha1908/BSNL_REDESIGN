<template>
<!--Breadcrumbs for State Selection page -->
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
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Browse Plans',
          disabled: true,
          href: 'http://localhost:3000/BSNL_REDESIGN/browseplans',
        },
        {
          text: 'Confirmation Page',
          disabled: true,
          href: 'http://localhost:3000/BSNL_REDESIGN/confirmationpage',
        },
      ],
    }),
  }
</script>