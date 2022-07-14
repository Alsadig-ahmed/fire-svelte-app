<script>
  import { db } from "./firebase";
  import { collection, getDocs } from "firebase/firestore";
  import { logEvent } from "firebase/analytics";
  import { run } from "svelte/internal";
  //   import { feedback } from "./store/data";
  $: stat = false;
  $: k = [{}];
  async function iffe() {
    const querySnapshot = await getDocs(collection(db, "feedbacks"));
    console.log({ ds: querySnapshot });
    querySnapshot.forEach((doc) => {
      k.push({
        id: doc.id,
        rating: doc.data().rating,
        text: doc.data().text,
      });
    });
    return (stat = true);
  }
</script>

<main>
  {#await iffe()}
    promise is pending
    {stat}
  {:then gd}
    {stat}
    promise was fulfilled
    {#if stat}
   <h1>{k.length} </h1> 
      {#each k as fb}
        <div>
          <h1>{fb.rating}</h1>
          <h1>{fb.text}</h1>
          <h1>{fb.id}</h1>
        </div>
      {/each}
    {/if}
  {:catch error}
    promise was rejected
  {/await}
</main>

<style>
</style>
