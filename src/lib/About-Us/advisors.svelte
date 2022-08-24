<script>
import advisor1 from '../../assets/advisor-1.svg'
import advisor2 from '../../assets/advisor-2.svg'
import advisor3 from '../../assets/advisor-3.svg'
import advisor4 from '../../assets/advisor-4.svg'
import twitter from '../../assets/twitter-light.svg'
import linkedin from '../../assets/linkedin-light.svg'
</script>

<div class="">
    <p>Our Advisors.</p>
    <div class="flex flex-col md:flex-row justify-around border-t border-white">
        <div>
            <img src={advisor1} alt="">
            <p class="text-center">John Demuren</p>
            <div class="flex justify-center">
                <a href="#">
                    <img src={twitter} alt="">
                </a>
                <a href="#">
                    <img src={linkedin} alt="">
                </a>
            </div>
        </div>
        <div>
            <img src={advisor2} alt="">
            <p class="text-center">Dekinle Silver</p>
            <div class="flex justify-center">
                <a href="#">
                    <img src={twitter} alt="">
                </a>
                <a href="#">
                    <img src={linkedin} alt="">
                </a>
            </div>
        </div>
        <div>
            <img src={advisor3} alt="">
            <p class="text-center">Lolade Johnson</p>
            <div class="flex justify-center">
                <a href="#">
                    <img src={twitter} alt="">
                </a>
                <a href="#">
                    <img src={linkedin} alt="">
                </a>
            </div>
        </div>
        <div>
            <img src={advisor4} alt="">
            <p class="text-center">Johnson Jones</p>
            <div class="flex justify-center">
                <a href="#">
                    <img src={twitter} alt="">
                </a>
                <a href="#">
                    <img src={linkedin} alt="">
                </a>
            </div>
        </div>
    </div>
</div>