<!--
 * @Author: jianyun2020
 * @Date: 2021-04-15 15:25:25
 * @LastEditTime: 2021-04-16 17:08:16
 * @Description: Dashboard
 * @FilePath: \vue2-admin\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: {
    adminDashboard,
    editorDashboard
  },
  data () {
    return {
      currentRole: 'editorDashboard'
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  created () {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>