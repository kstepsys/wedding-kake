<template>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kamilė & Kęstutis Wedding</title>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

</head>

<body>
  <nav>
    <h1>Kamilė & Kęstutis</h1>
    <a href="#welcome">Welcome</a>
    <a href="#story">Our Story</a>
    <a href="#location">Location</a>
    <a href="#rsvp">RSVP</a>
  </nav>
  <div class="sections" id="sections">
    <div class="cat-strip"></div>

    <section id="welcome">
      <div class="main-story">
        <h1>Kamilė & Kęstutis</h1>
        <p>Please join us for our wedding celebration on</p>
        <h2>September 19, 2025</h2>
        <img :src="require('@/assets/IMG_1109.jpg')" alt="Newlyweds">
        <p>
          Sandra and Valentino met in 2009 during senior year of high school, during an Intro to Photography class. Students were assigned a project that required them to shoot architectural buildings throughout San Francisco. One afternoon, they ran into each other on the street — they were photographing the same building, just from different vantage points! — and decided to shoot together. The afternoon turned to evening and ended with ice cream, where they talked until the shop closed. And the rest, as they say, is history.
        </p>
        <p>
          They're so excited to start the next phase of their lives together and can't wait to celebrate with you in August!
        </p>
      </div>
    </section>

    <section id="story">
      <h2>Our Story</h2>
      <p>A glimpse into our journey together — full of memories, smiles, and love.</p>
      <div class="gallery">
        <img src="IMG_1631.jpg" alt="1">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="2">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="3">
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" alt="4">
      </div>
    </section>
    
    <section id="location">
      <h2>Location</h2>
      <p>Here's where it all happens. Lakeside in Ohrid — full of charm, love, and celebration.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.5538657031675!2d25.309692976796363!3d54.699878072595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9698b234654f%3A0xa0b3079079931a62!2sMIESTO%20LABORATORIJA%20-%20bendruomen%C4%97s%20edukacijos%20centras!5e0!3m2!1slt!2slt!4v1743936487020!5m2!1slt!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    
    <section id="rsvp">
      <h2>RSVP</h2>
      <form>
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required>
    
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    
        <label for="attendance">Will you attend?</label>
        <select id="attendance" name="attendance" required>
          <option value="">-- Select --</option>
          <option value="yes">Yes!</option>
          <option value="maybe">Maybe</option>
          <option value="no">Can't make it</option>
        </select>
    
        <label for="guests">Guests with you?</label>
        <input type="number" id="guests" name="guests" min="0" max="10">
    
        <label for="food">Meal Preference</label>
        <select id="food" name="food">
          <option value="">-- Select --</option>
          <option value="meat">Meat</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="other">Other</option>
        </select>
    
        <label for="notes">Notes / Allergies</label>
        <textarea id="notes" name="notes" rows="4"></textarea>
    
        <button type="submit">Send RSVP</button>
      </form>
    </section>
    
  </div>
</body>
</html>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  height: 100%;
  background: #fdf9f3;
  overflow: hidden;
}

body {
  display: block;
}

nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  background-color: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
}

.sections {
  margin-left: 200px; /* same as nav width */
  overflow-y: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;
  position: relative;
}

nav h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: #b47979;
  margin-bottom: 2rem;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  margin: 1rem 0;
  font-size: 1rem;
}

.cat-strip {
  position: fixed;
  top: 0;
  left: 200px;
  right: 0;
  height: 40px;
  z-index: 5;
  /* background-image: url('image.svg'); */
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-position: center top;
}

section {
  scroll-snap-align: start;
  height: 100vh;
  padding: 6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fdf9f3;
  z-index: 2;
}

h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #b47979;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  max-width: 700px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 2rem;
}

#countdown {
  font-size: 1.3rem;
  color: #b47979;
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 900px;
  width: 100%;
  margin-top: 2rem;
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

form {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 2rem auto;
}

label {
  font-weight: 600;
  display: block;
  margin-top: 1rem;
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

.main-story {
  max-width: 800px;
  text-align: center;
  padding: 2rem;
}

.main-story h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: #b47979;
}

.main-story img {
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  body {
    flex-direction: column;
  }

  nav {
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: space-around;
  }

  .sections {
    width: 100%;
  }

  .cat-strip {
    left: 0;
  }

  section {
    padding: 3rem 1.5rem;
  }
}
</style>
