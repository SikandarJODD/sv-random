<script>
  import { count } from "./../../../store.js";
  import { page } from "$app/stores";
  console.log($page.params.blog);
  $: content = $page.params.blog;
</script>

<main>
  <h1>Hello {content} Post {$count}</h1>
  <button on:click={() => count.update((cnt) => cnt + 1)}> Add Num </button>
</main>

<style>
  main {
    padding: 0 5%;
  }
</style>
