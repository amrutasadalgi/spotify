<template>
  <section class="navbar">
    <article>
      <div class="navBtnBlock">
        <v-btn icon dark><v-icon>fa-solid fa-chevron-left</v-icon></v-btn>
        <v-btn icon dark><v-icon>fa-solid fa-chevron-right</v-icon></v-btn>
      </div>
      <div class="authBlock">
        <button>Upgrade</button>
        <div class="userAuth">
          <v-img
            src="https://images.unsplash.com/photo-1653257340129-148be674836c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465"
            width="30"
            height="30"
            class="rounded-circle"
          ></v-img>
          <h5>Mary Jane</h5>
          <v-icon dark class="pr-2"> fa-solid fa-caret-down </v-icon>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 6vh;
  background: rgba(17, 17, 17, 0.89);
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar article {
  width: 95%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.authBlock {
  display: flex;
  align-items: center;
  gap: 20px;
}
.authBlock button {
  padding: 4px 16px;
  border: 1px solid #777;
  border-radius: 20px;
  background: transparent;
  color: #eee;
  transition: all 0.2s linear;
}
.authBlock button:hover {
  border: 1px solid #eee;
  transform: scale(1.01);
}
.userAuth {
  /* border: 1px solid white; */
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #eee;
  padding: 2px 3px;
  font-weight: 100;
}
.userAuth:hover {
  background: #999;
}
</style>
