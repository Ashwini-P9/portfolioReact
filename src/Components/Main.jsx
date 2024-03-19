  
  import React from "react";
 import { useEffect, useMemo, useState } from "react";
 import Particles, { initParticlesEngine } from "@tsparticles/react";
 // import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
 // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
 import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
 // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
 
 const Main = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        
        await loadSlim(engine);
        
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#fffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0000FF",
          },
          links: {
            color: "#0000FF",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }),
      [],
    );

    
    if (init) {
   return (
    <div className="max-h-screen"> 
    <Particles
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={options}
  />
  </div>
   );
    }
  return <></>;

   
 }
 
 export default Main

 
/*<div className='max-h-screen'> 
<Particles
id='tsparticles'
init={particlesInit}
loaded={particlesLoaded}
options={{
    backgroud:{
        color:{
            value:"#ffffff",
        },
    },
    fpsLimit:120,
    interactivity:{
        events:{
           onClick:{
            enable:false,
            mode:"push",
           },
           onHover:{
            enable:true,
            mode:"repulse",
           },
           resize:true,
        },
        modes:{
            push:{
                quantity:4,
            },
            repulse:{

                distance:200,
                duration:0.4,
            },
        },
    },
    particles:{
        color:{
            value:"#ea580c",
        },
        links:{
            color:"##ea580c",
            distance:150,
            enable:true,
            opacity:0.5,
            width:1,
        },
        move:{
            direction:"none",
            enable:true,
            outModes:{
                default:"bounce",
            },
            random:false,
            speed:6,
            straight:false,

        },
        number:{
            density:{
                enable:true,
                area:800,
            },
            value:80,
        },
        opacity:{
            value:0.5,
        },
        shape:{
            type:"square",
        },
        size:{
            value:{min:1 , max:5},
        },
    },
    detectRetina:true,
}}
/>
</div>*/