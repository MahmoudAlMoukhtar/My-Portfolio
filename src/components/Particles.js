import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {loadFull} from "tsparticles";
import {useCallback, useMemo} from "react";
const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
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
          mdoes: {
            repulse: {
              distance: 50,
            },
            push: {
              quantity: 40,
            },
          },
        },
      },
      particles: {
        links: {
          color: "#ffffff",
          distance: 100,
          enable: false,
          opacity: 0.2,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: {min: 1, max: 3},
        },
        opacity: {
          value: {min: 0.2, max: 0.7},
        },
        size: {
          value: {min: 1, max: 3},
        },
      },
    };
  });

  const particlesInit = useCallback(engine => {
    loadSlim(engine);
  });
  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
