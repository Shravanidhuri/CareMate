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
      en: "Drink plenty of fluids, rest well, and monitor temperature. Visit a doctor if fever lasts more than 3 days or is high.",
      hi: "पानी ज़्यादा पिएं, आराम करें, तापमान जाँचते रहें। 3 दिन से ज़्यादा बुखार रहे तो डॉक्टर से मिलें।",
      mr: "जास्त पाणी प्या, आराम करा, तापमान तपासा. 3 दिवसांपेक्षा जास्त ताप असल्यास डॉक्टरकडे जा.",
      te: "ద్రవాలు త్రాగండి, విశ్రాంతి తీసుకోండి. జ్వరం మూడు రోజుల కంటే ఎక్కువగా ఉంటే వైద్యుని సంప్రదించండి.",
      ta: "நன்கு ஓய்வு எடுத்து, போதுமான நீர் குடிக்கவும். 3 நாட்களுக்கு மேல் காய்ச்சல் நீடித்தால் மருத்துவரை சந்திக்கவும்.",
      bn: "প্রচুর পানি পান করুন, বিশ্রাম নিন। ৩ দিনের বেশি জ্বর থাকলে ডাক্তারের কাছে যান।",
      kn: "ನೀರು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ. 3 ದಿನಕ್ಕಿಂತ ಹೆಚ್ಚು ಜ್ವರ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
      gu: "ઘણું પાણી પીવો, આરામ કરો. 3 દિવસથી વધારે તાવ રહેશે અથવા વધુ ઊંચો હોય તો ડોક્ટર પાસે જાઓ."
    }
  },

  stomach: {
    keywords: {
      en:['stomach','stomach pain','vomit','nausea','bellyache'],
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
      en: "Avoid heavy food, drink fluids, and rest. See a doctor if pain is severe or persistent.",
      hi: "भारी खाना न खाएं, पानी पिएं, आराम करें। अगर दर्द ज्यादा या लगातार है तो डॉक्टर से मिलें।",
      mr: "जड अन्न टाळा, पाणी प्या, विश्रांती घ्या. जास्त वेदना असल्यास डॉक्टरकडे जा.",
      te: "భారీ ఆహారం తినకండి, ద్రవాలు త్రాగండి, విశ్రాంతి తీసుకోండి. తీవ్రమైన నొప్పి అయితే వైద్యునిని సంప్రదించండి.",
      ta: "எடுக்கும் உணவு தவிர்க்கவும், நீர் குடிக்கவும், ஓய்வு எடுக்கவும். வலி தீவிரமாக இருந்தால் மருத்துவரை அணுகவும்.",
      bn: "ভারি খাবার এড়ান, পানি পান করুন, বিশ্রাম নিন। তীব্র বা দীর্ঘস্থায়ী ব্যথা থাকলে ডাক্তার দেখুন।",
      kn: "ಭಾರಿ ಆಹಾರದಿಂದ ತಪ್ಪಿಸಿ, ನೀರು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ. ತೀವ್ರ ನೋವು ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
      gu: "ભારે ખોરાક ટાળો, પાણી પીઓ, આરામ કરો. દુખાવો ખૂબ તીવ્ર હોય તો ડોક્ટર પાસે જાઓ."
    }
  },

  headache: {
    keywords: {
      en:['headache','head pain','migraine'],
      hi:['sir dard','sar dard'],
      mr:['डोकेदुखी','डोके दुखतंय'],
      te:['talanupp','talanoop'],
      ta:['thalai vali'],
      bn:['mathar byatha'],
      kn:['talenoovu'],
      gu:['matha dard']
    },
    info: {
      en: "Headache can occur due to stress, dehydration, or lack of sleep.",
      hi: "सिरदर्द तनाव, नींद की कमी या पानी की कमी के कारण हो सकता है।",
      mr: "डोकेदुखी ताण, झोपेचा अभाव किंवा पाण्याच्या कमतरतेमुळे होऊ शकते.",
      te: "తలనొప్పి ఒత్తిడి, నిద్రలేమి లేదా డీహైడ్రేషన్ వల్ల కలిగవచ్చు.",
      ta: "தலைவலி மன அழுத்தம், தாகம் அல்லது தூக்கமின்மை காரணமாக இருக்கலாம்.",
      bn: "মাথাব্যথা চাপ, ঘুমের অভাব বা পানিশূন্যতার কারণে হতে পারে।",
      kn: "ತಲೆನೋವು ಒತ್ತಡ, ನಿದ್ರಾಹೀನತೆ ಅಥವಾ ನೀರಿನ ಕೊರತೆಯಿಂದ ಸಂಭವಿಸಬಹುದು.",
      gu: "માથાનો દુખાવો તાણ, ઊંઘની અછત અથવા પાણીની અછતને કારણે થઈ શકે છે."
    },
    advice: {
      en: "Drink water, take rest, and avoid bright light. If pain is severe or frequent, consult a doctor.",
      hi: "पानी पिएं, आराम करें और तेज रोशनी से बचें। अगर दर्द ज़्यादा या बार-बार होता है, तो डॉक्टर से मिलें।",
      mr: "पाणी प्या, विश्रांती घ्या, आणि तेज प्रकाश टाळा. वारंवार डोकेदुखी असल्यास डॉक्टरकडे जा.",
      te: "నీరు త్రాగండి, విశ్రాంతి తీసుకోండి. తీవ్రమైన లేదా తరచుగా తలనొప్పి ఉంటే వైద్యుని సంప్రదించండి.",
      ta: "நீர் குடிக்கவும், ஓய்வு எடுக்கவும், பிரகாசமான ஒளியிலிருந்து விலகவும்.",
      bn: "পানি পান করুন, বিশ্রাম নিন, উজ্জ্বল আলো এড়িয়ে চলুন। প্রয়োজনে ডাক্তারের পরামর্শ নিন।",
      kn: "ನೀರು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ. ತೀವ್ರ ತಲೆನೋವು ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      gu: "પાણી પીવો, આરામ કરો, તેજ પ્રકાશથી બચો. માથાનો દુખાવો વારંવાર થાય તો ડોક્ટર પાસે જાઓ."
    }
  },

  legpain: {
    keywords: {
      en:['leg pain','knee pain','ankle pain','leg ache'],
      hi:['pair dard','ghutna dard','tang dard'],
      mr:['paay dukh','ghudghud dukh'],
      te:['kallu noppi'],
      ta:['kaal vali'],
      bn:['paye byatha'],
      kn:['kaalu noovu'],
      gu:['pag dard']
    },
    info: {
      en: "Leg pain can result from muscle strain, dehydration, or joint problems.",
      hi: "पैर दर्द मांसपेशियों में खिंचाव, पानी की कमी या जोड़ो की समस्या के कारण हो सकता है।",
      mr: "पाय दुखणे स्नायू ताण किंवा पाण्याची कमतरता यामुळे होऊ शकते.",
      te: "కాళ్ల నొప్పి కండరాల ఒత్తిడి లేదా నీటి లోపం కారణంగా కలుగుతుంది.",
      ta: "கால்வலி தசை நெருக்கம் அல்லது நீர்ச்சத்து குறைவால் ஏற்படலாம்.",
      bn: "পায়ে ব্যথা পেশী টান বা পানিশূন্যতার কারণে হতে পারে।",
      kn: "ಕಾಲು ನೋವು ಸ್ನಾಯು ಒತ್ತಡ ಅಥವಾ ನೀರಿನ ಕೊರತೆಯಿಂದ ಉಂಟಾಗಬಹುದು.",
      gu: "પગનો દુખાવો પેશીની ખેંચાણ કે પાણીની અછતને કારણે થઈ શકે છે."
    },
    advice: {
      en: "Rest, stretch lightly, and drink fluids. See a doctor if swelling or severe pain persists.",
      hi: "आराम करें, हल्का स्ट्रेच करें, पानी पिएं। अगर सूजन या दर्द ज्यादा हो, तो डॉक्टर से मिलें।",
      mr: "आराम करा, हलका स्ट्रेच करा, पाणी प्या. सूज असल्यास डॉक्टरकडे जा.",
      te: "విశ్రాంతి తీసుకోండి, కాళ్లను స్ట్రెచ్ చేయండి, ద్రవాలు త్రాగండి.",
      ta: "ஓய்வு எடுத்து, சிறிது நீட்டி, நீர் குடிக்கவும். வலி நீடித்தால் மருத்துவரை அணுகவும்.",
      bn: "বিশ্রাম নিন, হালকা স্ট্রেচ করুন, পানি পান করুন। ব্যথা না কমলে ডাক্তার দেখান।",
      kn: "ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ, ಕಾಲುಗಳನ್ನು ಸ್ಟ್ರೆಚ್ ಮಾಡಿ, ನೀರು ಕುಡಿಯಿರಿ.",
      gu: "આરામ કરો, થોડી કસરત કરો, પાણી પીઓ. દુખાવો ન વધે તો ડોક્ટર પાસે જાઓ."
    }
  },

  backpain: {
    keywords: {
      en:['back pain','lower back','spine pain'],
      hi:['kamar dard','peeeth dard'],
      mr:['पाठदुखी','कंबर दुखते'],
      te:['venuka noppi'],
      ta:['pin vali'],
      bn:['peeth byatha'],
      kn:['benki noovu'],
      gu:['kamar dard']
    },
    info: {
      en: "Back pain is common due to poor posture, strain, or long sitting hours.",
      hi: "कमर दर्द गलत मुद्रा, थकावट या लंबे समय तक बैठने से हो सकता है।",
      mr: "पाठदुखी चुकीच्या बसण्यामुळे किंवा दीर्घकाळ बसण्यामुळे होते.",
      te: "తప్పు భంగిమ లేదా ఎక్కువసేపు కూర్చోవడం వల్ల వెన్నునొప్పి వస్తుంది.",
      ta: "தவறான உட்கார்வு அல்லது நீண்ட நேரம் உட்கார்ந்திருப்பது காரணமாக ஏற்படலாம்.",
      bn: "পিঠব্যথা ভুল ভঙ্গি বা দীর্ঘক্ষণ বসে থাকার কারণে হতে পারে।",
      kn: "ತಪ್ಪು ಕುಳಿತ ಬಗೆಯು ಅಥವಾ ಹೆಚ್ಚು ಸಮಯ ಕುಳಿತಿದ್ದರಿಂದ ಬೆನ್ನಿನ ನೋವು ಉಂಟಾಗಬಹುದು.",
      gu: "ખોટી સ્થિતિમાં બેસવાથી અથવા લાંબા સમય સુધી બેસવાથી પીઠમાં દુખાવો થઈ શકે છે."
    },
    advice: {
      en: "Maintain good posture, stretch, and apply heat. If pain persists, see a doctor.",
      hi: "सही मुद्रा रखें, स्ट्रेच करें, और गर्म सेक करें। अगर दर्द बना रहे, तो डॉक्टर से मिलें।",
      mr: "योग्य बसण्याची स्थिती ठेवा, स्ट्रेच करा, गरम पाण्याने सेक करा.",
      te: "సరైన కూర్చోవడం అలవాటు చేసుకోండి, వేడి పట్టండి.",
      ta: "சரியான உட்காரும் நிலையில் இருங்கள், வெப்பத்துடன் ஒத்திகை செய்யவும்.",
      bn: "সঠিক ভঙ্গি বজায় রাখুন, গরম সেঁক দিন। ব্যথা না কমলে ডাক্তার দেখান।",
      kn: "ಸರಿಯಾದ ಕುಳಿತ ಬಗೆಯನ್ನು ಪಾಲಿಸಿ, ಬಿಸಿ ನೀರಿನಿಂದ ಹಚ್ಚಿಕೊಳ್ಳಿ.",
      gu: "સીધી રીતે બેસો, ગરમ પાણીથી સેક કરો. દુખાવો ન ઘટે તો ડોક્ટર જુઓ."
    }
  },

  perioddelay: {
    keywords: {
      en:['period delay','late periods','missed period','menstrual delay'],
      hi:['mahavari der','period late','period nahi aaya'],
      mr:['मासिक पाळी उशीर','पाळी उशीर'],
      te:['saree vilambam'],
      ta:['matha neettam'],
      bn:['period deri'],
      kn:['masika delay'],
      gu:['period modu']
    },
    info: {
      en: "Period delay can occur due to stress, hormonal imbalance, or lifestyle changes.",
      hi: "पीरियड्स में देरी तनाव, हार्मोन असंतुलन या जीवनशैली में बदलाव के कारण हो सकती है।",
      mr: "पाळी उशीर ताण, हार्मोनल बदल किंवा जीवनशैलीमुळे होऊ शकतो.",
      te: "మాసిక చక్రం ఆలస్యం ఒత్తిడి లేదా హార్మోన్ అసమతుల్యత వల్ల కలిగవచ్చు.",
      ta: "மாதவிடாய் தாமதம் மன அழுத்தம் அல்லது ஹார்மோன் சமநிலையின்மை காரணமாக இருக்கலாம்.",
      bn: "পিরিয়ড দেরি হতে পারে মানসিক চাপ বা হরমোনের ভারসাম্যহীনতার কারণে।",
      kn: "ಮಾಸಿಕ ಚಕ್ರದಲ್ಲಿ ತಡ ಒತ್ತಡ ಅಥವಾ ಹಾರ್ಮೋನಲ್ ಅಸಮತೋಲನದಿಂದಾಗಬಹುದು.",
      gu: "પીરિયડ મોડું થવું તાણ અથવા હોર્મોનલ અસંતુલનથી થઈ શકે છે."
    },
    advice: {
      en: "Relax, manage stress, eat healthy. If delay exceeds 10 days, consult a gynecologist.",
      hi: "आराम करें, तनाव कम करें, अच्छा आहार लें। अगर 10 दिनों से ज़्यादा देरी हो तो डॉक्टर से मिलें।",
      mr: "तणाव कमी करा, आरोग्यदायी आहार घ्या. 10 दिवसांपेक्षा जास्त उशीर झाल्यास डॉक्टरकडे जा.",
      te: "స్ట్రెస్ తగ్గించండి, ఆరోగ్యకరమైన ఆహారం తీసుకోండి. 10 రోజుల కంటే ఎక్కువ అయితే డాక్టర్‌ను సంప్రదించండి.",
      ta: "மன அழுத்தம் குறைத்து, ஆரோக்கியமான உணவு எடுத்துக்கொள்ளுங்கள். 10 நாட்களுக்கு மேல் தாமதமாக இருந்தால் மருத்துவரை அணுகவும்.",
      bn: "স্ট্রেস কমান, পুষ্টিকর খাবার খান। ১০ দিনের বেশি দেরি হলে গাইনোকোলজিস্টের পরামর্শ নিন।",
      kn: "ಸ್ಟ್ರೆಸ್ ಕಡಿಮೆಮಾಡಿ, ಆರೋಗ್ಯಕರ ಆಹಾರ ಸೇವಿಸಿ. 10 ದಿನಕ್ಕಿಂತ ಹೆಚ್ಚು ತಡವಾದರೆ ವೈದ್ಯರನ್ನು ಭೇಟಿಮಾಡಿ.",
      gu: "તાણ ઘટાડો, સ્વસ્થ ખોરાક લો. 10 દિવસથી વધુ મોડું થાય તો ડોક્ટર બતાવો."
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
      const info = diseases[disease].info[lang] || diseases[disease].info['en'];
      const advice = diseases[disease].advice[lang] || diseases[disease].advice['en'];
      addMessage(`🔹 Info: ${info}\n🔹 Advice: ${advice}`, 'bot');
    } else {
      addMessage("Sorry, I couldn't detect the symptom. Please describe more clearly.", 'bot');
    }
  }, 600);
}

// ================================
// 5. Initialize Chatbot
// ================================
addMessage("👋 Hi! Describe your symptoms in your preferred language.", 'bot');

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
