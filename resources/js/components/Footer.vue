<template>
  <footer class="container py-5">
    <div class="row">
      <div class="col-12 col-md">
        <small class="d-block mb-3 text-muted">© 2017-{{ year }}, COMLIBRA ELECTRONIC CO., LTD.</small>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  name: "Footer",
};
</script>
