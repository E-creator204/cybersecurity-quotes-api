// api/index.js - Función serverless para Vercel

const quotes = [
  {
    text: "La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo.",
    author: "Paulo Freire"
  },
  {
    text: "La ciberseguridad no es un producto, sino un proceso continuo de aprendizaje y adaptación.",
    author: "Anónimo"
  },
  {
    text: "Tus datos personales son tu identidad digital. Protégelos como protegerías tu hogar.",
    author: "Anónimo"
  },
  {
    text: "La mejor defensa es una buena educación en ciberseguridad.",
    author: "Anónimo"
  },
  {
    text: "No se trata de si serás atacado, sino de cuándo. Prepárate hoy.",
    author: "Anónimo"
  },
  {
    text: "La privacidad es un derecho fundamental, no un privilegio.",
    author: "Anónimo"
  },
  {
    text: "La seguridad perfecta no existe, pero la vigilancia constante sí.",
    author: "Anónimo"
  },
  {
    text: "Un sistema es tan seguro como su eslabón más débil.",
    author: "Proverbio de Seguridad"
  },
  {
    text: "La ingeniería social es el arte de hackear humanos, no sistemas.",
    author: "Kevin Mitnick"
  },
  {
    text: "La concienciación en ciberseguridad debe ser parte de la educación básica del siglo XXI.",
    author: "Anónimo"
  },
  {
    text: "Cada clic, cada descarga, cada contraseña es una decisión de seguridad.",
    author: "Anónimo"
  },
  {
    text: "La seguridad no es cara, lo caro es no tenerla.",
    author: "Anónimo"
  },
  {
    text: "En ciberseguridad, la prevención siempre es más económica que la remediación.",
    author: "Anónimo"
  },
  {
    text: "Tu huella digital es permanente. Piensa antes de compartir.",
    author: "Anónimo"
  },
  {
    text: "La tecnología avanza rápido, pero la concienciación debe avanzar más rápido.",
    author: "Anónimo"
  }
];

export default function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  // Obtener parámetros de la URL
  const { theme = 'dark', type = 'horizontal' } = req.query;

  // Seleccionar una cita aleatoria
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Temas de colores
  const themes = {
    dark: {
      bg: '#0d1117',
      border: '#30363d',
      text: '#c9d1d9',
      accent: '#58a6ff'
    },
    merko: {
      bg: '#0a4208',
      border: '#1a7a16',
      text: '#abd200',
      accent: '#00d9ff'
    },
    radical: {
      bg: '#141321',
      border: '#e4609b',
      text: '#fe428e',
      accent: '#f8d847'
    },
    tokyonight: {
      bg: '#1a1b26',
      border: '#414868',
      text: '#a9b1d6',
      accent: '#7aa2f7'
    },
    cybersec: {
      bg: '#0a0e27',
      border: '#00ff41',
      text: '#00ff41',
      accent: '#ff0080'
    },
    matrix: {
      bg: '#000000',
      border: '#00ff00',
      text: '#00ff00',
      accent: '#00ff00'
    }
  };

  const currentTheme = themes[theme] || themes.dark;

  // Función para dividir texto en líneas
  function wrapText(text, maxCharsPerLine) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  const maxChars = type === 'horizontal' ? 60 : 40;
  const textLines = wrapText(randomQuote.text, maxChars);
  
  // Calcular dimensiones
  const lineHeight = 22;
  const padding = 20;
  const quoteHeight = textLines.length * lineHeight;
  const authorHeight = 20;
  const totalHeight = quoteHeight + authorHeight + (padding * 3);
  const width = type === 'horizontal' ? 600 : 400;

  // Generar SVG
  const svg = `
    <svg width="${width}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .quote-container { font-family: 'Segoe UI', Ubuntu, sans-serif; }
          .quote-text { fill: ${currentTheme.text}; font-size: 16px; font-weight: 400; }
          .quote-author { fill: ${currentTheme.accent}; font-size: 14px; font-weight: 600; }
          .quote-icon { fill: ${currentTheme.accent}; opacity: 0.3; }
        </style>
      </defs>
      
      <!-- Fondo -->
      <rect width="${width}" height="${totalHeight}" fill="${currentTheme.bg}" rx="10"/>
      <rect width="${width}" height="${totalHeight}" fill="none" stroke="${currentTheme.border}" stroke-width="2" rx="10"/>
      
      <!-- Icono de comillas -->
      <text x="20" y="35" class="quote-icon" font-size="30" font-family="serif">"</text>
      
      <g class="quote-container">
        <!-- Texto de la cita -->
        ${textLines.map((line, index) => 
          `<text x="50" y="${45 + (index * lineHeight)}" class="quote-text">${line}</text>`
        ).join('')}
        
        <!-- Autor -->
        <text x="50" y="${45 + quoteHeight + 25}" class="quote-author">— ${randomQuote.author}</text>
      </g>
      
      <!-- Icono de candado (seguridad) -->
      <g transform="translate(${width - 40}, ${totalHeight - 35})">
        <path d="M12 1C8.676 1 6 3.676 6 7v3H4v10h16V10h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v3H8V7c0-2.276 1.724-4 4-4z" 
              fill="${currentTheme.accent}" opacity="0.5"/>
      </g>
    </svg>
  `;

  res.status(200).send(svg);
}