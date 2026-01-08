<template>
  <q-scroll-area class="w-full px-2 q-gutter-y-md" style="height: 250px; max-width: 480px">
    <div v-for="n in 0" :key="n" class="q-py-sm mb-3"></div>

    <!-- Transportation Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="pink-1" text-color="pink" icon="directions_car" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Transportation</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>
        <q-linear-progress
          :value="500 / 1000"
          color="pink"
          rounded-full
          size="18px"
          class="q-mb-sm rounded-full"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$500.00</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$1000.00</span>
          </div>
        </q-linear-progress>

        <div class="row items-center text-positive text-caption">
          <q-icon name="check_circle" class="q-mr-xs" />
          Your food spending still on track
        </div>
      </q-card-section>
    </q-card>

    <!-- Education Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm mt-2">
          <q-avatar color="purple-1" text-color="purple" icon="school" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Education</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="purple"
          rounded
          size="18px"
          class="q-mb-sm rounded-full"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$1500.00</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$2000.00</span>
          </div>
        </q-linear-progress>

        <div class="row items-center text-negative text-caption">
          <q-icon name="error" class="q-mr-xs" />
          You are almost exceeding your budget
        </div>
      </q-card-section>
    </q-card>

    <!-- Medicine Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="red-1" text-color="red-5" icon="medical_services" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Medicine</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="red-5"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$2.680</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$4.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>

    <!-- Office Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="orange-1" text-color="orange-8" icon="work" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Office</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="orange-8"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$2.680</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$4.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>

    <!-- House Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="purple-1" text-color="purple-4" icon="house" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">House</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="purple-4"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$2.680</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$4.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>

    <!-- Salary Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="blue-1" text-color="blue-9" icon="savings" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Salary</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="blue-9"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$5.000</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$10.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>

    <!-- Restaurant Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="orange-1" text-color="orange-8" icon="restaurant" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Restaurant</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="orange-8"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$2.680</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$4.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>

    <!-- Cloth Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="purple-2" text-color="purple-7" icon="checkroom" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Cloth</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="purple-7"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$2.680</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$4.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>

    <!-- Fuel Card -->
    <q-card flat bordered class="budget-card">
      <q-card-section>
        <div class="row items-center q-mb-sm">
          <q-avatar color="green-1" text-color="green-7" icon="local_gas_station" />
          <div class="q-ml-sm">
            <div class="text-weight-bold">Fuel</div>
            <div class="text-caption text-grey">$20 Per day</div>
          </div>
        </div>

        <q-linear-progress
          :value="1500 / 2000"
          color="green-7"
          rounded
          size="18px"
          class="q-mb-sm rounded-full gap-2"
        >
          <div class="absolute-full flex text-white text-caption q-pl-sm">$665</div>
          <div class="row justify-between text-caption text-semibold text-grey q-pr-sm">
            <span></span>
            <span>$1.000</span>
          </div>
        </q-linear-progress>
      </q-card-section>
    </q-card>
  </q-scroll-area>
</template>

<script setup>
//
</script>
