const config = {
  params: {
    particles: {
      number: {
        value: 40,
        density: {
          enable: false,
          value_area: 100
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "polygon": {
            "nb_sides": 10
          },
        "modes": {
          "grab": {
            "distance": 1000,
            "line_linked": {
              "opacity": 1
            }
          },
          "repulse": {
            "distance": 600,
            "duration": 0.4
          }
        }
      },
      "move": {
        "enable": true,
        "speed": 1,
        "random": true,
        "direction": "none",
        "bounce": true,
        "out_mode": "bounce",
        "attract": {
          "enable": true,
          "rotateX": 5,
          "rotateY": 5
        }
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "#fff",
          blur: 5
        }
      }
    }
  },
  style: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top:0,
    left:0,
    zIndex:-1
  }
};

export default config;
