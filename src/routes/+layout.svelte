<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<slot />

<style>
  ul {
    display: flex;
    background: #00000040;
    margin: 0;
    padding: 0px 10%;
  }
  li {
    list-style: none;
    margin: 15px 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: aqua;
  }
  :global(html) {
    background: #001d3d;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
