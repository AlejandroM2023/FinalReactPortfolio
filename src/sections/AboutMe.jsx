

const AboutMe = () => {

    return <div id='about' className=' pt-48 px-12 '>
        <h2 className='hero_tag text-white' >About Me</h2>
        <div className='flex lg:flex-row flex-col-reverse items-center text-white'>
            <div>
            <p>
            My name is Alejandro Meza and I am a Full Stack and C++ Developer. Back in 2021 I took my first programming class at the University of Texas at Austin as an Economics major and I fell in love love right away. Fast forward to today, and I've had the privilege to follow my passion and complete an Associate in Computer Programming and a Full Stack Developer Bootcamp at the University of Texas at Austin.
            </p>
            <br/>
            <p>
                Most of my coursework was done in C++ but I got a taste for web development in an intermediate web programming class. This made me hungry for more, which led me to the UTA Bootcamp where I used my strong fundamentals in programming and previous related coursework in databases and web development to strengthen and learn popular web technologies like React, Express, Node, MongoDB, and more.
            </p>
            <br/>
            <p>
                I love to learn and push myself to produce my best work and something I can be proud of. I work hard every day to complete my Bachelor's in Computer Science someday and at the same time find a space where I can apply myself and continue to grow inside and outside the field. Outside of work, I like to play guitar, skateboard, play soccer, and spend time with my family.
            </p>
            </div>

            <img className='object-scale-down size-1/2 md:size-1/3' src='../../public/portait.jpg'/>
        </div>
    </div>
}

export default AboutMe;