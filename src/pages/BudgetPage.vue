<template>
  <q-page
    class="max-w-[480px] mx-auto w-full p-1 gap-y-2 flex items-center justify-center min-h-screen bg-cover bg-center"
    style="
      background-image:
        linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
        url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
    "
  >
    <q-header
      bordered
      class="max-w-[480px] mx-auto w-full justify-around items-center shadow-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-primary fixed bottom text-white"
    >
      <q-toolbar class="min-h-[40px] px-2 py-0">
        <q-btn flat round dense icon="arrow_back" class="text-white" />
        <q-toolbar-title class="text-center"> Budget </q-toolbar-title>
        <q-btn flat round dense icon="calendar_month" class="text-white" />
      </q-toolbar>
      <!-- CONTENT -->
      <div class="bg-gradient-to-r from-purple-500 to-indigo-500 w-full">
        <div class="text-center q-mt-md">
          <div class="text-h3 text-weight-bold">$4,167<span class="text-subtitle1">.56</span></div>
          <div class="text-subtitle2">June</div>

          <!-- Fake Chart -->
          <div class="q-mt-md">
            <svg viewBox="0 0 300 80" width="100%" height="100">
              <polyline
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                points="0,50 20,40 40,60 60,45 80,55 100,35 120,30 140,45 160,50 180,40 200,55 220,45 240,30 260,35 280,50 300,70"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- CONTENT -->
    </q-header>
    <!-- Tabs -->
    <q-tabs
      v-model="tab"
      dense
      class="bg-white w-full rounded-xl shadow text-grey justify-align gap-y-3 mb-1"
      active-color="primary"
      indicator-color="primary"
    >
      <q-tab name="categories" label="CATEGORIES" />
      <q-tab name="merchants" label="MERCHANTS" />
    </q-tabs>

    <q-separator />

    <div class="q-gutter-md w-full">
      <q-scroll-area style="height: 250px; max-width: 480px">
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
    </div>
  </q-page>
</template>

<script setup>
// Static UI only (can be converted to props / API later)
import { ref } from 'vue'

const tab = ref('categories')
</script>

<style scoped>
.budget-card {
  border-radius: 16px;
}
</style>
