<script>
    import {feedback} from './store/data'
</script>
{#each $feedback as fb}
    <h1>{fb.id}</h1>
{/each}
<style>
    
</style>
