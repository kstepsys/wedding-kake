<template>
  <div id="app">
    <nav>
      <h1>Kamilė & Kęstutis</h1>
      <button class="hamburger" @click="toggleMenu">☰</button>
      <div :class="['nav-links', { open: isMenuOpen }]">
        <a href="#welcome" @click="closeMenu">Welcome</a>
        <a href="#story" @click="closeMenu">Our Story</a>
        <a href="#location" @click="closeMenu">Location</a>
        <a href="#rsvp" @click="closeMenu">RSVP</a>
      </div>
    </nav>

    <main class="sections">
      <section id="welcome">
        <div class="main-story">
          <h1>Kamilė & Kęstutis</h1>
          <p>Davai atvarykit</p>
          <h2>September 19, 2025</h2>
          <img :src="require('@/assets/IMG_1109.jpg')" alt="Newlyweds">
          <p>Hehe</p>
        </div>
      </section>

      <section id="story">
        <h2>Our Story</h2>
        <p>A glimpse into our journey together — full of memories, smiles, and love.</p>
        <div class="gallery">
          <img v-for="(img, index) in imageList" :key="index" :src="img" :alt="`Gallery image ${index + 1}`" />
        </div>
      </section>

      <section id="location">
        <h2>Location</h2>
        <p>Here's where it all happens. Lakeside in Ohrid — full of charm, love, and celebration.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.5538657031675!2d25.309692976796363!3d54.699878072595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9698b234654f%3A0xa0b3079079931a62!2sMIESTO%20LABORATORIJA%20-%20bendruomen%C4%97s%20edukacijos%20centras!5e0!3m2!1slt!2slt!4v1743979662958!5m2!1slt!2slt"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section id="rsvp">
        <h2>RSVP</h2>
        <form @submit.prevent="submitRSVP">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="form.name" required>

          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required>

          <label for="attendance">Will you attend?</label>
          <select id="attendance" v-model="form.isGoingToAttend" required>
            <option value="">-- Select --</option>
            <option value="yes">Yes!</option>
            <option value="maybe">Maybe</option>
            <option value="no">Can't make it</option>
          </select>

          <label for="guests">Guests with you?</label>
          <input type="number" id="guests" v-model="form.guestNumber" min="0" max="10">

          <label for="food">Meal Preference</label>
          <select id="food" v-model="form.food">
            <option value="">-- Select --</option>
            <option value="meat">Meat</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="other">Other</option>
          </select>

          <label for="notes">Notes / Allergies</label>
          <textarea id="notes" v-model="form.notes" rows="4"></textarea>

          <!-- <div class="g-recaptcha" data-sitekey="6LfPUQwrAAAAAMow6AnKInj4nfbTSmzAYA3fQbY8"></div> -->
          <button type="submit">Send RSVP</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isMenuOpen: false,
      imageList: [],
      form: {
        name: '',
        email: '',
        food: '',
        isGoingToAttend: '',
        guestNumber: 0,
        notes: '',
      },
    }
  },
  created() {
    const images = require.context('@/assets/gallery', false, /\.(png|jpe?g|svg)$/)
    this.imageList = images.keys().map(file => images(file))
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    async submitRSVP() {
      // const token = window.grecaptcha.getResponse();

      // if (!token) {
      //   alert('Please complete the reCAPTCHA');
      //   return;
      // }

      try {
        const payload = {
          name: this.form.name,
          email: this.form.email,
          food: this.form.food,
          isGoingToAttend: this.form.isGoingToAttend === 'yes',
          guestNumber: parseInt(this.form.guestNumber),
          notes: this.form.notes,
        };

        await axios.post('https://api-kb43n3zbtq-uc.a.run.app/rsvp', payload);

        alert('RSVP submitted successfully!');
        this.form = {
          name: '',
          email: '',
          isGoingToAttend: '',
          guestNumber: 0,
          food: '',
          notes: '',
        };
      } catch (error) {
        console.error('RSVP submission failed:', error);
        alert('Something went wrong. Please try again later.');
      }
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background: #fdf9f3;
  scroll-behavior: smooth;
  height: 100%;
  overflow: auto;
}

#app {
  display: block;
}

/* NAVIGATION */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

nav h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: #b47979;
  margin-bottom: 2rem;
}

.nav-links a {
  display: block;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  margin: 1rem 0;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #b47979;
}

/* SECTIONS */
.sections {
  margin-left: 200px;
  overflow-y: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
  height: 100vh;
  padding: 6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdf9f3;
  box-sizing: border-box;
}

/* MOBILE STYLES */
@media (max-width: 768px) {
  nav {
    position: fixed;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  nav h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  .hamburger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    display: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 50;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }

  .sections {
    margin-left: 0;
    margin-top: 60px;
    height: auto;
    scroll-snap-type: none;
  }

  section {
    height: auto;
    min-height: 100vh;
    padding: 3rem 1.5rem;
  }
}

/* FORM AND OTHER ELEMENTS */
form {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: calc(100vw - 2px); /* full width minus 1px on each side */
  box-sizing: border-box;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}

button {
  background-color: #b47979;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #b47979;
  margin-bottom: 1rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 900px;
  width: 100%;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;
}

iframe {
  border: none;
  border-radius: 1rem;
  width: 80%;
  height: 400px;
  display: block;
  margin: 2rem auto;
}

.main-story img {
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  margin: 2rem 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 900px;
  width: 100%;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;
}

input,
select,
textarea {
  font-size: 16px;
}
</style>
