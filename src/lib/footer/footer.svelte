<script>
    import bg from '../../assets/footer.map.svg';
    import FooterText from './footer-text.component.svelte';
</script>

<div class="relative h-[360px] bg-bg-nav">
     <img class="absolute top-0 z-0 object-cover w-full" src={bg} alt="">
    
    <div class="absolute h-full w-full flex justify-center items-center">
        <FooterText />
    </div>
</div>