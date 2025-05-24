<template>
  <v-container class="py-10">
    <v-card class="pa-6" elevation="4">
      <h1 class="text-h5 mb-4">Impressum</h1>

      <p>
        <strong>Name:</strong> Marcus Moser<br />

        <!-- Tooltip für E-Mail -->
        <strong>E-Mail:</strong>
        <v-tooltip location="top">
          <template #activator="{ props }">
            <span v-bind="props" class="text-primary">
              marcus.moser@mail.de
            </span>
          </template>
          <span>Du kannst mir gerne schreiben!</span>
        </v-tooltip>
      </p>

      <p class="text-body-2 text-grey-darken-1">
        Diese Website ist ein rein privates, nicht kommerzielles Projekt und dient ausschließlich experimentellen und persönlichen Lernzwecken.
        Es erfolgt weder eine geschäftsmäßige Nutzung noch eine Gewinnerzielungsabsicht.<br /><br />
        Gemäß § 5 TMG besteht daher keine Pflicht zur Angabe eines Impressums.
      </p>
    </v-card>
  </v-container>
</template>
