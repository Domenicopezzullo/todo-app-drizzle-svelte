<script lang="ts">
  import { enhance } from '$app/forms';
  export let data;
</script>

<div class="flex flex-col h-screen items-center p-8 bg-[#181818] text-white">
  <!-- Centered Form -->
  <div class="flex-grow flex items-center justify-center">
    <form use:enhance action="?/addTodo" method="POST" class="flex flex-row gap-2">
      <input class="border-2 p-1 text-white" type="text" name="title" placeholder="Enter todo" />
      <button type="submit" class="border-2 px-4">Add</button>
    </form>
  </div>

  <!-- Scrollable Todos at Bottom -->
  <div class="w-full max-h-[40vh] overflow-y-auto flex flex-col items-center">
    {#each data.todos as todo}
      <form
        use:enhance
        class="flex flex-row gap-4 items-center m-2 border-2 p-2 w-3/4 justify-between"
        action="?/deleteTodo"
        method="POST"
      >
        <input type="hidden" name="id" value={todo.id} />
        <h1 class="truncate">{todo.title}</h1>
        <button class="border-2 px-2 cursor-pointer" type="submit">X</button>
      </form>
    {/each}
  </div>
</div>
