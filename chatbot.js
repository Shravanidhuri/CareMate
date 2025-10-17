// ================================
// 1. Disease Database
// ================================
const diseases = {
  fever: {
    keywords: {
      en:['fever','temperature'],
      hi:['bukhar','taap'],
      mr:['tap','taap'],
      te:['jwar'],
      ta:['kāyccal'],
      bn:['jwar'],
      kn:['jwara'],
      gu:['tav','bukhar']
    },
    info: {
      en: "Fever is a temporary increase in your body temperature, often due to infection.",
      hi: "बुखार आपके शरीर के तापमान में अस्थायी वृद्धि है, अक्सर संक्रमण के कारण।",
      mr: "ताप हा संक्रमणामुळे शरीराचा तात्पुरता ताप वाढ आहे.",
      te: "జ్వరము అనేది శరీర ఉష్ణోగ్రత తాత్కాలిక పెరుగుదల, ఎక్కువగా ఇన్ఫెక్షన్ కారణంగా.",
      ta: "காய்ச்சல் என்பது உடலின் வெப்பநிலையின் தற்காலிக உயர்வாகும், பெரும்பாலும் தொற்று காரணமாக.",
      bn: "জ্বর হল শরীরের তাপমাত্রার সাময়িক বৃদ্ধি, সাধারণত সংক্রমণের কারণে।",
      kn: "ಜ್ವರವು ಸಾಮಾನ್ಯವಾಗಿ ಸೋಂಕಿನಿಂದ ಸಂಭವಿಸುವ ಶರೀರದ ತಾತ್ಕಾಲಿಕ ತಾಪಮಾನ ಏರಿಕೆಯಾಗುವುದು.",
      gu: "તાવ શરીરના તાપમાનમાં અસ્થાયી વધારો છે, સામાન્ય રીતે સંક્રમણના કારણે."
    },
    advice: {
      en: "Drink plenty of fluids, rest well, monitor temperature. See a doctor if fever persists for more than 3 days or is very high.",
      hi: "काफी पानी पिएं, आराम करें। अगर बुखार 3 दिनों से अधिक या बहुत अधिक है, डॉक्टर से मिलें।",
      mr: "पाणी प्या, आराम करा. 3 दिवसांपेक्षा जास्त ताप असल्यास किंवा जास्त असेल तर डॉक्टरकडे जा.",
      te: "తరువాతి రోజులలో ఎక్కువ జ్వరం లేదా తీవ్రంగా ఉంటే వైద్యుని సంప్రదించండి. మంచిగా విశ్రాంతి తీసుకోండి, ద్రవాలు త్రాగండి.",
      ta: "நன்கு ஓய்வு எடுத்து, போதுமான நீர் குடிக்கவும். 3 நாட்களுக்கு மேல் காய்ச்சல் நீடித்தால் மருத்துவரை சந்திக்கவும்.",
      bn: "প্রচুর পানি পান করুন, বিশ্রাম নিন। ৩ দিনের বেশি জ্বর থাকলে ডাক্তারের কাছে যান।",
      kn: "ನೀರು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ. 3 ದಿನಕ್ಕಿಂತ ಹೆಚ್ಚು ಜ್ವರ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
      gu: "ઘણું પાણી પીવો, આરામ કરો. 3 દિવસથી વધારે તાવ રહેશે અથવા વધુ ઊંચો હોય તો ડોક્ટર પાસે જાઓ."
    }
  },

  stomach: {
    keywords: {
      en:['stomach','stomach pain','vomit','nausea'],
      hi:['pet dard','pet dukha','ulti','matli'],
      mr:['pota dukh','pota dukhatay','ulti'],
      te:['kudupu vedana'],
      ta:['vayitru vali'],
      bn:['pet byatha','pete betha','ulti'],
      kn:['hottu dard'],
      gu:['pet dard','ulti']
    },
    info: {
      en: "Stomach ache can be caused by indigestion, infections, or food-related issues.",
      hi: "पेट दर्द अपच, संक्रमण या भोजन संबंधी कारणों से हो सकता है।",
      mr: "पोटदुखी अपचन, संसर्ग किंवा अन्नामुळे होऊ शकतो.",
      te: "కడుపు నొప్పి జీర్ణ సమస్యలు లేదా ఇన్ఫెక్షన్ వల్ల కలిగవచ్చు.",
      ta: "வயிற்றுவலி செரிமான பிரச்சினைகள் அல்லது தொற்று காரணமாக இருக்கலாம்.",
      bn: "পেটব্যথা হজম সমস্যা বা সংক্রমণের কারণে হতে পারে।",
      kn: "ಹೊಟ್ಟೆ ನೋವು ಜೀರ್ಣ ಸಮಸ್ಯೆ ಅಥವಾ ಸೋಂಕಿನಿಂದ ಸಂಭವಿಸಬಹುದು.",
      gu: "પેટમાં દુખાવો હજમની સમસ્યા અથવા સંક્રમણથી થઈ શકે છે."
    },
    advice: {
      en: "Avoid heavy food, drink fluids, rest. See a doctor if pain is severe or persistent.",
      hi: "भारी खाना न खाएं, पानी पिएं, आराम करें। अगर दर्द ज्यादा या लगातार है तो डॉक्टर से मिलें।",
      mr: "जड अन्न टाळा, पाणी प्या, विश्रांती घ्या. जास्त वेदना असल्यास डॉक्टरकडे जा.",
      te: "భారీ ఆహారం తినకండి, ద్రవాలు త్రాగండి, విశ్రాంతి తీసుకోండి. తీవ్రమైన నొప్పి అయితే వైద్యునిని సంప్రదించండి.",
      ta: "எடுக்கும் உணவு தவிர்க்கவும், நீர் குடிக்கவும், ஓய்வு எடுக்கவும். வலி தீவிரமாக இருந்தால் மருத்துவரை அணுகவும்.",
      bn: "ভারি খাবার এড়ান, পানি পান করুন, বিশ্রাম নিন। তীব্র বা দীর্ঘস্থায়ী ব্যথা থাকলে ডাক্তার দেখুন।",
      kn: "ಭಾರಿ ಆಹಾರದಿಂದ ತಪ್ಪಿಸಿ, ನೀರು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ. ತೀವ್ರ ನೋವು ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
      gu: "ભારે ખોરાક ટાળો, પાણી પીઓ, આરામ કરો. દુખાવો ખૂબ તીવ્ર હોય તો ડોક્ટર પાસે જાઓ."
    }
  }
};

// ================================
// 2. Chatbox Helper
// ================================
const chatbox = document.getElementById('chatbox');

function addMessage(text, sender){
  const msg = document.createElement('div');
  msg.className = sender==='bot' ? 'bg-blue-100 text-blue-900 self-start p-2 rounded-lg' : 'bg-blue-500 text-white self-end p-2 rounded-lg';
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// ================================
// 3. Disease Detection
// ================================
function detectDisease(text, lang){
  text = text.toLowerCase();
  for(let disease in diseases){
    const keywords = [...(diseases[disease].keywords.en||[]), ...(diseases[disease].keywords[lang]||[])];
    if(keywords.some(word=>text.includes(word))) return disease;
  }
  return null;
}

// ================================
// 4. Send Message
// ================================
function sendMsg(){
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  const lang = document.getElementById('language').value;
  if(!text) return;

  addMessage(text, 'user');
  input.value='';

  setTimeout(()=>{
    const disease = detectDisease(text, lang);
    if(disease){
      const info = diseases[disease].info[lang];
      const advice = diseases[disease].advice[lang];
      addMessage(`🔹 Info: ${info}\n🔹 Advice: ${advice}`, 'bot');
    } else {
      addMessage("Sorry, I couldn't detect the symptom. Please describe more clearly.", 'bot');
    }
  }, 500);
}

// ================================
// 5. Initialize Chatbot
// ================================
addMessage("Hi! Describe your symptoms in your language.", 'bot');

// ================================
// 6. Contact Form Handler (Optional)
// ================================
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    if(email && message){
      alert('Thank you! Your message has been sent.');
      this.reset();
    }
  });
}
