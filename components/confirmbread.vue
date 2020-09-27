<template>
  <div >
   <!--Breadcrumbs for Confirmation page -->

    <v-breadcrumbs :items="items" light >
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
          disabled: false,
          href: 'breadcrumbs_link_1',
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