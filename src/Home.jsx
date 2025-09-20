
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function Home() {
   const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm(
      "service_gzx142t",
      "template_8mj0z5b",
      e.target,
      "ItFVIGY6f1BhOfGNr"
    ).then(
      (result) => {
        window.alert("Message sent successfully!");
      },
      (error) => {
        console.error(error.text)
        window.alert("Failed to send message, please try again.");
      }
    );
  };

  
  useEffect(() => {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.color = color;
        this.speed = Math.random() * 5 + 2;
        this.angle = Math.random() * 2 * Math.PI;
        this.life = 100;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + 0.6;
        this.life -= 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function explode(x, y) {
      const colors = ["#00ff00", "#FF6666", "#f6fa05", "#5A0FC8",'#FF69B4'];
      for (let i = 0; i < 40; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    // Fireworks every 1.5s randomly anywhere in the background
    setInterval(() => {
      explode(Math.random() * canvas.width, Math.random() * canvas.height / 1.2);
    }, 1500);

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <div className="app">
      <canvas id="fireworks"></canvas>

      <section className="hero">
        <img src="./src/assets/Profile-pic.jpg" alt="My Photo" className="profile-pic floating" />
        <h1 className="title">Pascale_XR</h1>
        <p className="subtitle">FULL STACK DEVELOPER</p>
      </section>

      <section className="section about card">
        <h2 className="card-title">About Me</h2>
        <p>
          
         I'm a full stack web developer with a passion for building robust, scalable,
          and user friendly applications. From frontend design to backend development, 
          I enjoy tackling every aspect of web development to deliver seamless digital
          experiences. With expertise spanning both client side and server side technologies,
          I craft websites and applications that are not only visually appealing but
         also highly functional.
          As a full stack developer, I thrive on solving complex problems and optimizing performance.
           I'm always looking to expand my skill set and stay up-to-date with the latest trends and
            technologies in web development.
        </p>
      </section>

      <section className="section skills">
        <h2 className="card-title">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">Python</div>
           <div className="skill-card">Django</div>
        </div>
      </section>

       <section className="Project-Show">
        <h2 className="card-title">Project</h2>
        <div className="Project">
          <div className="Project">Qoute Generator</div>
          <div className="Project">E-commerce</div>
          <div className="Project">#</div>
          <div className="Project">#</div>
           <div className="Project">#</div>
        </div>
      </section>



      <section className="section contact">
        <h2 className="card-title">Contact Me</h2>
        <form   className="contact-form"  >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>
          </div>

          <button onClick={sendEmail} type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Home;