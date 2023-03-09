<script>
  import { count } from "./../../store.js";
  import { dataRoutes } from "./../../store.js";
  $: dynRoutes = $dataRoutes;
  $: console.log(dynRoutes);
  let blogname = "";
  let addPath = () => {
    console.log("working");
    dataRoutes.update((routes) => {
      console.log(routes);
      return [...routes, { name: blogname, path: `/blog/${blogname}` }];
    });
    console.log(dataRoutes);
  };
</script>

<h1>Blog Posts {$count}</h1>
<label for="blogid">
  Blog Name:

  <input type="text" name="blogid" id="blogid" bind:value={blogname} />
  <button on:click={addPath}>Add Path</button>
</label>
<section>
  <ul>
    {#each $dataRoutes as item}
      <li><a href={item.path}>{item.name}</a></li>
    {/each}
  </ul>
</section>

<style>
  label {
    margin: 30px;
  }
  button {
    display: block;
    padding: 5px 10px;
    background: transparent;
    border: 2px solid white;
    margin: 20px;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>
