<script>
import team from '../../assets/team-1.svg'
import member2 from '../../assets/member-2.svg'
import member3 from '../../assets/member-3.svg'
import member4 from '../../assets/member-4.svg'

import twitter from '../../assets/twitter-light.svg'
import linkedin from '../../assets/linkedin-light.svg'
</script>

<div>
    <p>Ardency Team.</p>
    <div class="flex flex-col md:flex-row justify-around border-t border-white">
        <div>
            <img src={team} alt="">
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
            <img src={member2} alt="">
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
            <img src={member3} alt="">
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
            <img src={member4} alt="">
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
