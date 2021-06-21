<template>
  <div class="home">
    <connection-box></connection-box>
  </div>
</template>

<script>
// @ is an alias to /src
import ConnectionBox from '../components/ConnectionBox.vue'

export default {
  name: 'Home',
  components: {
    ConnectionBox
  }
}
</script>
