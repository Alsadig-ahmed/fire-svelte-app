<script>
  import { feedback } from "./store/data";
</script>

<main>
  {#each $feedback as fb}
    <div>
      <h1>{fb.rating}</h1>
      <h1>{fb.text}</h1>
      <h1>{fb.id}</h1>
    </div>
  {/each}
</main>

<style>
</style>
