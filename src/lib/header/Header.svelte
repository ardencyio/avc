<script>
    import menu from '../../assets/menu.svg'
    import logo from '../../assets/logo.svg'
    import NavigationComponent from '../Navigation-component/NavigationComponent.svelte'


    let visible = false;

    const handleVisibility = () =>{
        visible = !visible
    }
</script>

<NavigationComponent visible = {visible} />

<div class="fixed w-screen top-0 z-40">

    <div class="w-11/12 mx-auto flex justify-between py-4">
    
        <img src={logo} alt="ardency logo">
        <div on:click={handleVisibility}>
            <img src={menu} alt="menu bar">
        </div>
        
    </div>
</div>



