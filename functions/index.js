const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Needed for verifying reCAPTCHA

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// 🔐 reCAPTCHA Secret Key
const RECAPTCHA_SECRET = "6LfPUQwrAAAAANC_ISz51qH9-QLD6HnJFhjucAAp"; // ← replace with your actual key

// Helper to verify reCAPTCHA token
async function verifyRecaptcha(token) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`
    );
    return response.data.success;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// POST /rsvp
app.post("/rsvp", async (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.recaptchaToken) {
    return res.status(400).send("Missing required fields or captcha.");
  }

  // ✅ Verify reCAPTCHA
  const isHuman = await verifyRecaptcha(data.recaptchaToken);
  if (!isHuman) {
    return res.status(403).send("reCAPTCHA verification failed.");
  }

  // Clean data
  const cleanData = Object.fromEntries(
    Object.entries(data).filter(([_, v]) => v !== undefined && v !== null && v !== "")
  );

  try {
    const docRef = await db.collection("rsvps").add({
      ...cleanData,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    return res.status(200).send({ message: "RSVP saved!", id: docRef.id });
  } catch (error) {
    console.error("Error saving RSVP:", error);
    return res.status(500).send("Something went wrong.");
  }
});

// Export as /api/*
exports.api = functions.https.onRequest(app);
