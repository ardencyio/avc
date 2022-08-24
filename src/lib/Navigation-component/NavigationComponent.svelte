<script>
    export let visible ;
    import { fly } from 'svelte/transition';
    import menu from '../../assets/nav-menu.svg'
    $: {
        console.log(visible)
    }

    const links = ["Home", "About us", "What we look for", "Portfolio", "Contact"]

    const  pathModifier = (li) =>{
        if(li == "Home"){
            return "/"
        }else{
            return '/' + li.split(' ').join('')
        }
    }

</script>

{#if visible}
<div in:fly="{{ x: 200, duration: 1000 } }" out:fly="{{ x: -200, duration: 1000 } }" class="fixed h-1/2 md:h-screen w-full top-0 z-50 bg-bg-nav p-6" >
    <div class="flex justify-end">
        <button on:click={()=> visible =!visible} class="text-3xl">
            <img src={menu} alt="">
        </button>
    </div>

    <ul class="flex flex-col h-full w-full justify-center items-end gap-4">
        {#each links as link }
        <li >
          <a class='group text-right transition-all duration-300 ease-in-out font-Plus font-bold text-2xl md:text-7xl text-primary' href={pathModifier(link)}>
            <span class='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                {link}
            </span>
        </a>  
        </li>
        {/each}   
    </ul>
</div>    
{/if}

