// 🟠 ORANGE CRYSTAL 2026 - Configuration
// Firebase: comk-4302e | Cloudinary: dt0tkbtzw
// ✨ NEW: Presence + LastSeen + Copy Chat + Image Upload

const firebaseConfig = {
    apiKey: "AIzaSyBB4aIL-7cXL_FbsHT2Jj-T70EmF9Chc0A",
    authDomain: "comk-4302e.firebaseapp.com",
    databaseURL: "https://comk-4302e-default-rtdb.firebaseio.com",
    projectId: "comk-4302e",
    storageBucket: "comk-4302e.firebasestorage.app",
    messagingSenderId: "817565218754",
    appId: "1:817565218754:web:874fad2b98ee5789b5c85b",
    measurementId: "G-DR25TWGM6M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "dt0tkbtzw";
const UPLOAD_PRESET = "xk20_k";

// 🟠 Orange Crystal Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #ea580c, #f97316, #fb923c)",
    "linear-gradient(135deg, #c2410c, #ea580c, #f97316)",
    "linear-gradient(135deg, #9a3412, #c2410c, #ea580c)",
    "linear-gradient(135deg, #f97316, #fb923c, #fdba74)",
    "linear-gradient(135deg, #431407, #9a3412, #ea580c)"
];

// 🟠 App Info
const APP_NAME = "ORANGE CRYSTAL";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#f97316";
const SECONDARY_COLOR = "#fb923c";

console.log('🟠 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #f97316; font-size: 16px; font-weight: bold;');
