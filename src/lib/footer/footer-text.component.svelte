<script>
    export let type = false;

    import linkedin from '../../assets/linkedin.logo.svg';
    import ig from '../../assets/ig.logo.svg';
    import twitter from '../../assets/twitter.logo.svg';

</script>

<div  class="w-9/12 text-primary mx-auto py-8 flex justify-between" class:type={type}>
    <div class="text-sm space-y-4">
        <p class="font-bold text-xl font-comfortaa">ardency</p>
        <p class="font-Plus max-w-[208px]">We help you become a better startup, with better outcomes.</p>
        <p class="font-Plus font-semibold">All right reserved © Ardency 2022</p>
    </div>
    <div class="w-[360px] font-Plus text-primary" class:type={type}>
        <div class="flex justify-between py-3 border-t border-bd">
            <p>Email</p>
            <p class="font-bold">hello@audency.vc</p>
        </div>
        <div class="flex justify-between py-3 border-t border-bd">
            <p>Location</p>
            <p class="font-bold">London | Nigeria | Mauritius</p>
        </div>
        <div class="flex justify-between py-3 border-t border-bd">
            <p>Socials</p>
            <div class="flex gap-4">
                <img src={twitter} alt="">
                <img src={linkedin} alt="">
                <img src={ig} alt="">
            </div>
        </div>
    </div>
</div>