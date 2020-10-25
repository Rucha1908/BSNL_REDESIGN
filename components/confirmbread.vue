<template>
  <div >
   <!--Breadcrumbs for Confirmation page -->

    <v-breadcrumbs :items="items" light style="color:#3588C4; font-family:Futura Std, sans-serif" >
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
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Browse Plans',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Confirmation Page',
          disabled: false,
          
        },
      ],
    }),
  }
</script>