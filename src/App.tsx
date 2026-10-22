import { useState, useEffect, useRef, useCallback } from 'react';

// ============================================
// TIPOS
// ============================================
type TabType = 'texto' | 'imagen' | 'audio' | 'video' | 'interactivo' | 'referencias';

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('texto');

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'texto', label: 'Texto', icon: 'fa-book-open' },
    { id: 'imagen', label: 'Imagen', icon: 'fa-image' },
    { id: 'audio', label: 'Audio', icon: 'fa-volume-up' },
    { id: 'video', label: 'Video', icon: 'fa-play-circle' },
    { id: 'interactivo', label: 'Juego', icon: 'fa-gamepad' },
    { id: 'referencias', label: 'Referencias', icon: 'fa-quote-right' },
  ];

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold">💧 El Ciclo del Agua</h1>
          <p className="text-blue-100 text-sm md:text-base mt-1">
            Ciencias Naturales — 7.º Grado | Comayagüela, Honduras
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base font-semibold whitespace-nowrap border-b-4 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              <i className={`fas ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        {activeTab === 'texto' && <TextoLectura />}
        {activeTab === 'imagen' && <ImagenDiagrama />}
        {activeTab === 'audio' && <AudioLectura />}
        {activeTab === 'video' && <VideoAnimacion />}
        {activeTab === 'interactivo' && <JuegoClasificacion />}
        {activeTab === 'referencias' && <Referencias />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center p-4 text-sm">
        <p>Material educativo — Funciona sin internet 📴 | Accesible para impresión 🖨️</p>
      </footer>
    </div>
  );
}

// ============================================
// PESTAÑA TEXTO: Lectura con preguntas intercaladas
// ============================================
function TextoLectura() {
  return (
    <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 print:shadow-none print:p-4">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-6">
        🌊 ¿Qué le pasa al agua en nuestro planeta?
      </h2>

      {/* Introducción */}
      <div className="text-lg leading-relaxed text-gray-800 space-y-4">
        <p>
          El agua de la Tierra <strong>nunca se acaba</strong>, solo cambia de lugar y de forma.
          A ese viaje continuo le llamamos <strong>ciclo del agua</strong> (United States Geological Survey [USGS], 2024).
        </p>

        {/* Pregunta 1 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4">
          <p className="font-bold text-yellow-800 text-lg">🤔 Piensa: ¿Qué pasa cuando dejas un vaso con agua al sol?</p>
        </div>

        {/* Etapa 1: Evaporación */}
        <section className="bg-blue-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-bold text-blue-700 mb-2">☀️ 1. Evaporación: el agua se vuelve invisible</h3>
          <p>
            Cuando el <strong>sol calienta</strong> el agua de ríos, lagos y mares, el agua se convierte en un gas
            invisible llamado <strong>vapor de agua</strong> y sube al cielo. Es igual que cuando hierve agua
            en la olla: sale humo hacia arriba.
          </p>
          <p className="mt-2 italic text-blue-900">
            📍 <strong>Ejemplo:</strong> En Comayagüela, cuando hace mucho calor, el río Choluteca
            baja su nivel porque parte del agua se evapora con el sol fuerte (USGS, 2024).
          </p>
        </section>

        {/* Pregunta 2 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4">
          <p className="font-bold text-yellow-800 text-lg">🤔 Piensa: ¿Por qué se empaña el espejo del baño cuando te bañas con agua caliente?</p>
        </div>

        {/* Etapa 2: Condensación */}
        <section className="bg-purple-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-bold text-purple-700 mb-2">☁️ 2. Condensación: se forman las nubes</h3>
          <p>
            Cuando el vapor de agua sube y llega a donde hace <strong>frío</strong>, se convierte otra vez
            en <strong>gotitas de agua</strong>. Esas gotitas se juntan y forman las <strong>nubes</strong>.
            Es lo mismo que pasa en el espejo empañado (Khan Academy, 2024).
          </p>
          <p className="mt-2 italic text-purple-900">
            📍 <strong>Ejemplo:</strong> En octubre, las nubes grandes y oscuras que vemos sobre
            Tegucigalpa son millones de gotitas de agua condensada.
          </p>
        </section>

        {/* Pregunta 3 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4">
          <p className="font-bold text-yellow-800 text-lg">🤔 Piensa: ¿Qué pasa cuando las nubes se ponen muy negras?</p>
        </div>

        {/* Etapa 3: Precipitación */}
        <section className="bg-green-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-bold text-green-700 mb-2">🌧️ 3. Precipitación: el agua regresa a la Tierra</h3>
          <p>
            Cuando las gotitas dentro de la nube se hacen <strong>muy grandes y pesadas</strong>,
            caen como <strong>lluvia</strong>. También puede caer como nieve o granizo, pero en
            Honduras casi siempre es lluvia.
          </p>
          <p className="mt-2 italic text-green-900">
            📍 <strong>Ejemplo:</strong> En octubre llueve mucho en Honduras. El río Choluteca
            crece y a veces se desborda porque recibe mucha agua de lluvia (Servicio Meteorológico
            Nacional de Honduras, 2023).
          </p>
        </section>

        {/* Etapa 4: Escorrentía */}
        <section className="bg-orange-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-bold text-orange-700 mb-2">🏞️ 4. Escorrentía: el agua corre hacia los ríos</h3>
          <p>
            El agua de lluvia <strong>corre por el suelo</strong> hacia los ríos, lagos y mares.
            Parte del agua se <strong>filtra</strong> bajo la tierra y alimenta los pozos.
            Así el agua vuelve a empezar su viaje (USGS, 2024).
          </p>
          <p className="mt-2 italic text-orange-900">
            📍 <strong>Ejemplo:</strong> Cuando llueve fuerte en Comayagüela, ves el agua correr
            por las calles hacia las quebradas que llegan al río Choluteca.
          </p>
        </section>

        {/* Resumen */}
        <div className="bg-blue-100 border-2 border-blue-300 p-4 rounded-lg mt-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">📝 Resumen rápido:</h3>
          <ol className="list-decimal list-inside space-y-1 text-lg">
            <li><strong>Sol calienta</strong> → el agua sube (evaporación)</li>
            <li><strong>Frío arriba</strong> → se forman nubes (condensación)</li>
            <li><strong>Nubes pesadas</strong> → cae lluvia (precipitación)</li>
            <li><strong>Agua corre</strong> → vuelve a ríos y mares (escorrentía)</li>
          </ol>
        </div>

        {/* Pregunta final */}
        <div className="bg-green-100 border-2 border-green-400 p-4 rounded-lg mt-6">
          <p className="font-bold text-green-800 text-lg">✏️ Actividad: Escribe con tus palabras qué le pasa al agua en cada etapa y da un ejemplo de tu comunidad.</p>
        </div>
      </div>

      {/* Botón imprimir */}
      <div className="mt-6 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-lg"
        >
          <i className="fas fa-print mr-2"></i>Imprimir esta lectura
        </button>
      </div>
    </article>
  );
}

// ============================================
// PESTAÑA IMAGEN: Diagrama SVG del ciclo del agua
// ============================================
function ImagenDiagrama() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-4">
        🗺️ Diagrama del Ciclo del Agua — Río Choluteca
      </h2>
      <p className="text-center text-gray-600 mb-4 text-lg">
        Observa cómo el agua viaja en nuestro entorno
      </p>

      {/* Diagrama SVG */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 500"
          className="w-full max-w-3xl mx-auto"
          role="img"
          aria-label="Diagrama del ciclo del agua mostrando evaporación, condensación, precipitación y escorrentía con ejemplos del río Choluteca"
        >
          {/* Cielo */}
          <rect x="0" y="0" width="800" height="250" fill="#87CEEB" />
          {/* Sol */}
          <circle cx="700" cy="80" r="50" fill="#FFD700" />
          <text x="700" y="85" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">☀️ SOL</text>
          {/* Rayos del sol */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1={700 + 55 * Math.cos((angle * Math.PI) / 180)}
              y1={80 + 55 * Math.sin((angle * Math.PI) / 180)}
              x2={700 + 70 * Math.cos((angle * Math.PI) / 180)}
              y2={80 + 70 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FFD700"
              strokeWidth="3"
            />
          ))}

          {/* Nubes */}
          <ellipse cx="300" cy="80" rx="80" ry="35" fill="#E8E8E8" stroke="#999" strokeWidth="1" />
          <ellipse cx="260" cy="90" rx="50" ry="25" fill="#F0F0F0" />
          <ellipse cx="340" cy="90" rx="50" ry="25" fill="#F0F0F0" />
          <text x="300" y="85" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">NUBES</text>
          <text x="300" y="100" textAnchor="middle" fontSize="10" fill="#555">(condensación)</text>

          {/* Nube de lluvia */}
          <ellipse cx="500" cy="100" rx="70" ry="30" fill="#778899" />
          <ellipse cx="470" cy="108" rx="40" ry="20" fill="#696969" />
          <ellipse cx="530" cy="108" rx="40" ry="20" fill="#696969" />
          {/* Gotas de lluvia */}
          {[480, 495, 510, 525, 490, 505].map((x, i) => (
            <line key={i} x1={x} y1={130 + (i % 3) * 10} x2={x - 3} y2={145 + (i % 3) * 10} stroke="#4169E1" strokeWidth="2" />
          ))}
          <text x="500" y="95" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">LLUVIA</text>
          <text x="500" y="108" textAnchor="middle" fontSize="9" fill="#ddd">(precipitación)</text>

          {/* Montañas */}
          <polygon points="0,300 100,180 200,300" fill="#228B22" />
          <polygon points="150,300 280,160 400,300" fill="#2E8B57" />
          <polygon points="550,300 650,200 750,300" fill="#228B22" />

          {/* Suelo */}
          <rect x="0" y="300" width="800" height="200" fill="#8B4513" />
          <rect x="0" y="300" width="800" height="30" fill="#228B22" />

          {/* Río Choluteca */}
          <path d="M 100,330 Q 200,340 300,335 Q 400,330 500,340 Q 600,350 700,335 L 700,380 Q 600,395 500,385 Q 400,375 300,380 Q 200,385 100,375 Z" fill="#4169E1" opacity="0.8" />
          <text x="400" y="362" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">Río Choluteca</text>

          {/* Flecha evaporación */}
          <path d="M 350,330 Q 380,250 420,180" fill="none" stroke="#FF6347" strokeWidth="3" markerEnd="url(#arrowRed)" />
          <text x="400" y="240" fontSize="12" fill="#FF6347" fontWeight="bold" transform="rotate(-30, 400, 240)">EVAPORACIÓN ↑</text>

          {/* Flecha condensación */}
          <path d="M 420,160 Q 380,120 340,100" fill="none" stroke="#9370DB" strokeWidth="3" markerEnd="url(#arrowPurple)" />
          <text x="370" y="140" fontSize="11" fill="#9370DB" fontWeight="bold">Condensación</text>

          {/* Flecha precipitación */}
          <path d="M 500,155 L 500,300" fill="none" stroke="#4169E1" strokeWidth="3" markerEnd="url(#arrowBlue)" />
          <text x="520" y="230" fontSize="11" fill="#4169E1" fontWeight="bold">Precipitación ↓</text>

          {/* Flecha escorrentía */}
          <path d="M 600,320 Q 550,330 500,340" fill="none" stroke="#FF8C00" strokeWidth="3" markerEnd="url(#arrowOrange)" />
          <text x="620" y="315" fontSize="11" fill="#FF8C00" fontWeight="bold">Escorrentía →</text>

          {/* Flecha infiltración */}
          <path d="M 250,340 L 250,420" fill="none" stroke="#8B4513" strokeWidth="3" markerEnd="url(#arrowBrown)" />
          <text x="260" y="400" fontSize="11" fill="#8B4513" fontWeight="bold">Infiltración ↓</text>

          {/* Agua subterránea */}
          <rect x="180" y="430" width="140" height="40" rx="10" fill="#1E90FF" opacity="0.5" />
          <text x="250" y="455" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Agua subterránea</text>

          {/* Etiquetas de flechas */}
          <defs>
            <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#FF6347" />
            </marker>
            <marker id="arrowPurple" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#9370DB" />
            </marker>
            <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#4169E1" />
            </marker>
            <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#FF8C00" />
            </marker>
            <marker id="arrowBrown" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#8B4513" />
            </marker>
          </defs>

          {/* Leyenda */}
          <rect x="10" y="420" width="150" height="70" fill="white" stroke="#ccc" rx="5" />
          <text x="20" y="438" fontSize="10" fontWeight="bold" fill="#333">Leyenda:</text>
          <circle cx="25" cy="450" r="5" fill="#FF6347" /><text x="35" y="454" fontSize="9" fill="#333">Evaporación</text>
          <circle cx="25" cy="465" r="5" fill="#9370DB" /><text x="35" y="469" fontSize="9" fill="#333">Condensación</text>
          <circle cx="25" cy="480" r="5" fill="#4169E1" /><text x="35" y="484" fontSize="9" fill="#333">Precipitación</text>
          <circle cx="95" cy="450" r="5" fill="#FF8C00" /><text x="105" y="454" fontSize="9" fill="#333">Escorrentía</text>
          <circle cx="95" cy="465" r="5" fill="#8B4513" /><text x="105" y="469" fontSize="9" fill="#333">Infiltración</text>
        </svg>
      </div>

      {/* Descripción accesible */}
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg text-gray-800 mb-2">📖 Descripción del diagrama:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>El <strong>sol</strong> calienta el agua del río Choluteca y esta se evapora (sube como vapor).</li>
          <li>El vapor llega arriba donde hace <strong>frío</strong> y forma <strong>nubes</strong> (condensación).</li>
          <li>Las nubes se llenan de agua y <strong>llueve</strong> sobre las montañas y la ciudad (precipitación).</li>
          <li>El agua de lluvia <strong>corre</strong> por el suelo hasta el río (escorrentía) o se <strong>filtra</strong> bajo tierra (infiltración).</li>
        </ul>
      </div>

      <div className="mt-4 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-lg"
        >
          <i className="fas fa-print mr-2"></i>Imprimir diagrama
        </button>
      </div>
    </div>
  );
}

// ============================================
// PESTAÑA AUDIO: Lectura con Web Speech API
// ============================================
function AudioLectura() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const secciones = [
    {
      titulo: "Introducción",
      texto: "El agua de la Tierra nunca se acaba, solo cambia de lugar y de forma. A ese viaje continuo le llamamos ciclo del agua."
    },
    {
      titulo: "Evaporación",
      texto: "Primera etapa: Evaporación. Cuando el sol calienta el agua de ríos, lagos y mares, el agua se convierte en un gas invisible llamado vapor de agua y sube al cielo. En Comayagüela, cuando hace mucho calor, el río Choluteca baja su nivel porque parte del agua se evapora con el sol fuerte."
    },
    {
      titulo: "Condensación",
      texto: "Segunda etapa: Condensación. Cuando el vapor de agua sube y llega a donde hace frío, se convierte otra vez en gotitas de agua. Esas gotitas se juntan y forman las nubes. En octubre, las nubes grandes y oscuras que vemos sobre Tegucigalpa son millones de gotitas de agua condensada."
    },
    {
      titulo: "Precipitación",
      texto: "Tercera etapa: Precipitación. Cuando las gotitas dentro de la nube se hacen muy grandes y pesadas, caen como lluvia. En octubre llueve mucho en Honduras. El río Choluteca crece y a veces se desborda porque recibe mucha agua de lluvia."
    },
    {
      titulo: "Escorrentía",
      texto: "Cuarta etapa: Escorrentía. El agua de lluvia corre por el suelo hacia los ríos, lagos y mares. Parte del agua se filtra bajo la tierra y alimenta los pozos. Cuando llueve fuerte en Comayagüela, ves el agua correr por las calles hacia las quebradas que llegan al río Choluteca."
    },
    {
      titulo: "Resumen",
      texto: "Resumen: El sol calienta el agua y esta sube, eso es evaporación. Arriba hace frío y se forman nubes, eso es condensación. Las nubes se ponen pesadas y cae lluvia, eso es precipitación. El agua corre hacia los ríos, eso es escorrentía. Y así el ciclo vuelve a empezar."
    }
  ];

  const hablar = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta lectura en voz alta. Usa Chrome o Edge.');
      return;
    }

    window.speechSynthesis.cancel();

    const textoCompleto = secciones[currentSection].texto;
    const utterance = new SpeechSynthesisUtterance(textoCompleto);
    utterance.lang = 'es-HN';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utteranceRef.current = utterance;

    utterance.onend = () => {
      setIsPlaying(false);
      if (currentSection < secciones.length - 1) {
        setCurrentSection(prev => prev + 1);
      }
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  }, [currentSection, secciones]);

  const pausar = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const detener = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const seleccionarSeccion = (index: number) => {
    detener();
    setCurrentSection(index);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-4">
        🔊 Escucha la lectura
      </h2>
      <p className="text-center text-gray-600 mb-6 text-lg">
        Presiona el botón para escuchar la lectura en voz alta
      </p>

      {/* Controles principales */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={hablar}
          disabled={isPlaying && !isPaused}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-bold text-xl flex items-center gap-2"
        >
          <i className="fas fa-play"></i> Escuchar
        </button>
        <button
          onClick={pausar}
          disabled={!isPlaying}
          className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white px-6 py-4 rounded-xl font-bold text-xl flex items-center gap-2"
        >
          <i className={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`}></i> {isPaused ? 'Continuar' : 'Pausar'}
        </button>
        <button
          onClick={detener}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-bold text-xl flex items-center gap-2"
        >
          <i className="fas fa-stop"></i> Detener
        </button>
      </div>

      {/* Selector de secciones */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-gray-700">Selecciona una sección:</h3>
        {secciones.map((seccion, index) => (
          <button
            key={index}
            onClick={() => seleccionarSeccion(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-colors text-lg ${
              currentSection === index
                ? 'border-blue-500 bg-blue-50 font-bold'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            <span className="text-blue-700 mr-2">{index + 1}.</span>
            {seccion.titulo}
            {currentSection === index && isPlaying && (
              <span className="ml-2 text-green-600">
                <i className="fas fa-volume-up animate-pulse"></i> Reproduciendo...
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Texto actual */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
        <h4 className="font-bold text-gray-700 mb-2">📄 Texto de la sección actual:</h4>
        <p className="text-lg leading-relaxed text-gray-800">{secciones[currentSection].texto}</p>
      </div>

      {/* Nota */}
      <div className="mt-4 bg-yellow-50 border border-yellow-300 p-3 rounded-lg">
        <p className="text-sm text-yellow-800">
          <i className="fas fa-info-circle mr-1"></i>
          <strong>Nota:</strong> La lectura en voz alta usa la voz de tu dispositivo. Funciona mejor en Chrome o Edge. Si no funciona, pide a tu docente que active los altavoces.
        </p>
      </div>
    </div>
  );
}

// ============================================
// PESTAÑA VIDEO: Animación CSS del ciclo del agua
// ============================================
function VideoAnimacion() {
  const [animating, setAnimating] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-4">
        🎬 Animación del Ciclo del Agua
      </h2>
      <p className="text-center text-gray-600 mb-4 text-lg">
        Observa cómo se mueve el agua en cada etapa
      </p>

      {/* Controles */}
      <div className="text-center mb-4">
        <button
          onClick={() => setAnimating(!animating)}
          className={`px-6 py-3 rounded-xl font-bold text-lg ${
            animating ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          <i className={`fas ${animating ? 'fa-pause' : 'fa-play'} mr-2`}></i>
          {animating ? 'Pausar animación' : 'Iniciar animación'}
        </button>
      </div>

      {/* Escena animada */}
      <div className="relative w-full max-w-2xl mx-auto h-96 rounded-xl overflow-hidden border-4 border-blue-300">
        {/* Cielo */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-400" />

        {/* Sol */}
        <div className={`absolute top-4 right-8 w-16 h-16 bg-yellow-400 rounded-full shadow-lg ${animating ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 flex items-center justify-center text-2xl">☀️</div>
        </div>

        {/* Nubes */}
        <div className={`absolute top-8 left-16 ${animating ? 'animate-bounce' : ''}`} style={{ animationDuration: '3s' }}>
          <div className="relative">
            <div className="w-24 h-12 bg-gray-200 rounded-full opacity-90" />
            <div className="absolute -top-3 left-4 w-16 h-10 bg-gray-100 rounded-full" />
            <div className="absolute -top-1 left-12 w-14 h-8 bg-gray-100 rounded-full" />
          </div>
          <p className="text-xs text-center font-bold text-gray-700 mt-1">☁️ Condensación</p>
        </div>

        {/* Nube de lluvia */}
        <div className={`absolute top-12 left-1/2 -translate-x-1/2 ${animating ? 'animate-pulse' : ''}`} style={{ animationDuration: '2s' }}>
          <div className="relative">
            <div className="w-28 h-14 bg-gray-500 rounded-full" />
            <div className="absolute -top-4 left-5 w-18 h-12 bg-gray-400 rounded-full" />
            <div className="absolute -top-2 left-14 w-16 h-10 bg-gray-400 rounded-full" />
          </div>
          <p className="text-xs text-center font-bold text-white mt-1">🌧️ Precipitación</p>
        </div>

        {/* Gotas de lluvia animadas */}
        {animating && (
          <div className="absolute top-28 left-1/2 -translate-x-1/2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-4 bg-blue-500 rounded-full animate-fall"
                style={{
                  left: `${i * 15 - 30}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        )}

        {/* Montañas */}
        <div className="absolute bottom-24 left-0 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[100px] border-l-transparent border-r-transparent border-b-green-700" />
        <div className="absolute bottom-24 left-20 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[80px] border-l-transparent border-r-transparent border-b-green-600" />
        <div className="absolute bottom-24 right-0 w-0 h-0 border-l-[70px] border-r-[70px] border-b-[90px] border-l-transparent border-r-transparent border-b-green-700" />

        {/* Suelo */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-800 to-green-600" />

        {/* Río */}
        <div className={`absolute bottom-4 left-1/4 right-1/4 h-10 bg-blue-500 rounded-full opacity-80 ${animating ? 'animate-pulse' : ''}`} style={{ animationDuration: '2s' }}>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
            🏞️ Río Choluteca
          </div>
        </div>

        {/* Flecha de evaporación */}
        {animating && (
          <div className="absolute bottom-16 left-1/3 animate-rise">
            <div className="flex flex-col items-center">
              <span className="text-lg">💨</span>
              <span className="text-xs font-bold text-red-700 bg-white px-1 rounded">Evaporación</span>
            </div>
          </div>
        )}

        {/* Flecha de escorrentía */}
        <div className="absolute bottom-12 right-1/4">
          <div className="flex items-center">
            <span className="text-xs font-bold text-orange-700 bg-white px-1 rounded">Escorrentía →</span>
            <span className="text-lg">💧</span>
          </div>
        </div>

        {/* Etiquetas de etapas */}
        <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 p-2 rounded text-xs">
          <p className="font-bold">Ciclo del agua:</p>
          <p>1. ☀️ Evaporación</p>
          <p>2. ☁️ Condensación</p>
          <p>3. 🌧️ Precipitación</p>
          <p>4. 🏞️ Escorrentía</p>
        </div>
      </div>

      {/* Descripción paso a paso */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-700">☀️ Evaporación</h4>
          <p className="text-sm">El sol calienta el agua del río y esta sube como vapor invisible.</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
          <h4 className="font-bold text-purple-700">☁️ Condensación</h4>
          <p className="text-sm">El vapor se enfría arriba y forma gotitas que se juntan en nubes.</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-700">🌧️ Precipitación</h4>
          <p className="text-sm">Las gotas se hacen grandes y caen como lluvia sobre la tierra.</p>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
          <h4 className="font-bold text-orange-700">🏞️ Escorrentía</h4>
          <p className="text-sm">El agua corre por el suelo y regresa al río Choluteca.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// PESTAÑA INTERACTIVO: Juego de Clasificación por Categorías
// ============================================
function JuegoClasificacion() {
  type Categoria = 'evaporacion' | 'condensacion' | 'precipitacion' | 'escorrentia';

  interface Item {
    id: string;
    texto: string;
    categoria: Categoria;
  }

  const categorias: { id: Categoria; nombre: string; color: string; emoji: string }[] = [
    { id: 'evaporacion', nombre: 'Evaporación', color: 'bg-red-100 border-red-400', emoji: '☀️' },
    { id: 'condensacion', nombre: 'Condensación', color: 'bg-purple-100 border-purple-400', emoji: '☁️' },
    { id: 'precipitacion', nombre: 'Precipitación', color: 'bg-blue-100 border-blue-400', emoji: '🌧️' },
    { id: 'escorrentia', nombre: 'Escorrentía', color: 'bg-orange-100 border-orange-400', emoji: '🏞️' },
  ];

  const items: Item[] = [
    { id: '1', texto: 'El sol calienta el río Choluteca y el agua sube como vapor', categoria: 'evaporacion' },
    { id: '2', texto: 'Se forman nubes oscuras en octubre sobre Tegucigalpa', categoria: 'condensacion' },
    { id: '3', texto: 'Cae lluvia fuerte y el río crece', categoria: 'precipitacion' },
    { id: '4', texto: 'El agua corre por las calles de Comayagüela hacia el río', categoria: 'escorrentia' },
    { id: '5', texto: 'La ropa mojada se seca al sol', categoria: 'evaporacion' },
    { id: '6', texto: 'El espejo del baño se empaña', categoria: 'condensacion' },
    { id: '7', texto: 'Las gotas caen del cielo a la tierra', categoria: 'precipitacion' },
    { id: '8', texto: 'El agua de lluvia se filtra bajo la tierra', categoria: 'escorrentia' },
  ];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, Categoria | null>>({});
  const [feedback, setFeedback] = useState<{ itemId: string; correct: boolean } | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const shuffledItems = items.filter(item => !placements[item.id]);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    setFeedback(null);
  };

  const handleCategoryClick = (catId: Categoria) => {
    if (!selectedItem) return;

    const item = items.find(i => i.id === selectedItem);
    if (!item) return;

    const isCorrect = item.categoria === catId;
    setFeedback({ itemId: selectedItem, correct: isCorrect });

    if (isCorrect) {
      setPlacements(prev => ({ ...prev, [selectedItem]: catId }));
      setScore(prev => prev + 1);
      setSelectedItem(null);

      // Verificar si completó todo
      const totalPlaced = Object.keys({ ...placements, [selectedItem]: catId }).length;
      if (totalPlaced >= items.length) {
        setCompleted(true);
      }
    } else {
      // Feedback de error - no mover el item
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  const reiniciar = () => {
    setSelectedItem(null);
    setPlacements({});
    setFeedback(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-2">
        🎮 Juego: ¡Clasifica las etapas!
      </h2>
      <p className="text-center text-gray-600 mb-4 text-lg">
        Lee cada situación y toca la etapa del ciclo del agua que le corresponde
      </p>

      {/* Puntuación */}
      <div className="text-center mb-4">
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-lg">
          ⭐ Puntaje: {score} / {items.length}
        </span>
      </div>

      {/* Mensaje de completado */}
      {completed && (
        <div className="bg-green-100 border-2 border-green-500 p-4 rounded-lg text-center mb-4">
          <p className="text-2xl font-bold text-green-700">🎉 ¡Excelente! ¡Completaste el juego!</p>
          <p className="text-lg text-green-600 mt-2">Clasificaste todas las situaciones correctamente.</p>
          <button
            onClick={reiniciar}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-lg"
          >
            <i className="fas fa-redo mr-2"></i>Jugar de nuevo
          </button>
        </div>
      )}

      {/* Instrucción */}
      {!completed && (
        <>
          {/* Items para clasificar */}
          <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-700 mb-3">
              {selectedItem
                ? '👆 Ahora toca la categoría correcta:'
                : '📋 Toca una situación para clasificarla:'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {shuffledItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`p-4 rounded-lg border-2 text-left text-lg transition-all ${
                    selectedItem === item.id
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-300 scale-105'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-gray-800">{item.texto}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {feedback && (
            <div className={`p-3 rounded-lg text-center font-bold text-lg mb-4 ${
              feedback.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {feedback.correct ? '✅ ¡Correcto! ¡Muy bien!' : '❌ Esa no es. Intenta con otra categoría.'}
            </div>
          )}

          {/* Categorías (cajas) */}
          <div>
            <h3 className="font-bold text-lg text-gray-700 mb-3">📦 Toca la categoría correcta:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  disabled={!selectedItem}
                  className={`p-4 rounded-xl border-3 text-center transition-all ${cat.color} ${
                    selectedItem
                      ? 'hover:scale-105 hover:shadow-lg cursor-pointer border-2'
                      : 'opacity-50 cursor-not-allowed border-2'
                  }`}
                >
                  <span className="text-3xl block mb-1">{cat.emoji}</span>
                  <span className="font-bold text-sm">{cat.nombre}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Items ya clasificados */}
      {Object.keys(placements).length > 0 && !completed && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-gray-700 mb-2">✅ Ya clasificaste:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.entries(placements).map(([itemId, catId]) => {
              const item = items.find(i => i.id === itemId);
              const cat = categorias.find(c => c.id === catId);
              if (!item || !cat) return null;
              return (
                <div key={itemId} className={`p-2 rounded border ${cat.color} text-sm`}>
                  <span className="font-bold">{cat.emoji} {cat.nombre}:</span> {item.texto}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Botón reiniciar */}
      {!completed && Object.keys(placements).length > 0 && (
        <div className="text-center mt-4">
          <button
            onClick={reiniciar}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            <i className="fas fa-redo mr-2"></i>Reiniciar juego
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================
// PESTAÑA REFERENCIAS
// ============================================
function Referencias() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
        📚 Referencias (APA 7)
      </h2>

      <div className="space-y-6 text-lg leading-relaxed">
        <div className="border-l-4 border-blue-400 pl-4">
          <p className="text-gray-800">
            Khan Academy. (2024). El ciclo del agua. <em>Khan Academy en Español</em>.
            <a
              href="https://es.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-water-cycle"
              className="text-blue-600 underline break-all ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://es.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-water-cycle
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Artículo educativo basado en OpenStax College, <em>Concepts of Biology</em>, CC BY 4.0.
          </p>
        </div>

        <div className="border-l-4 border-blue-400 pl-4">
          <p className="text-gray-800">
            Servicio Meteorológico Nacional de Honduras. (2023). <em>Monitoreo del período lluvioso: Octubre 2023</em>.
            Comisión Permanente de Contingencias (COPECO).
            <a
              href="https://climatica.app/%F0%9F%87%AD%F0%9F%87%B3-honduras-monitoreo-del-periodo-lluvioso-octubre-2023/"
              className="text-blue-600 underline break-all ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://climatica.app/honduras-monitoreo-del-periodo-lluvioso-octubre-2023
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Informe sobre lluvias de octubre en Honduras y comportamiento del río Choluteca.
          </p>
        </div>

        <div className="border-l-4 border-blue-400 pl-4">
          <p className="text-gray-800">
            United States Geological Survey. (2024). <em>El ciclo del agua</em>. Water Science School.
            <a
              href="https://www.usgs.gov/water-science-school/science/el-ciclo-del-agua-water-cycle-spanish"
              className="text-blue-600 underline break-all ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.usgs.gov/water-science-school/science/el-ciclo-del-agua-water-cycle-spanish
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Fuente oficial del gobierno de EE.UU. sobre las etapas del ciclo hidrológico.
          </p>
        </div>

        <div className="border-l-4 border-blue-400 pl-4">
          <p className="text-gray-800">
            National Aeronautics and Space Administration. (2024). <em>What is the water cycle?</em> NASA Science.
            <a
              href="https://science.nasa.gov/kids/earth/what-is-the-water-cycle/"
              className="text-blue-600 underline break-all ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://science.nasa.gov/kids/earth/what-is-the-water-cycle/
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Recurso educativo de la NASA sobre los estados del agua y el ciclo hidrológico.
          </p>
        </div>

        <div className="border-l-4 border-blue-400 pl-4">
          <p className="text-gray-800">
            Japan International Cooperation Agency. (2006). <em>Informe de apoyo C: Análisis hidrológico de la cuenca del río Choluteca en Tegucigalpa</em>.
            JICA Open Repository.
            <a
              href="https://openjicareport.jica.go.jp/pdf/11688488_06.pdf"
              className="text-blue-600 underline break-all ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://openjicareport.jica.go.jp/pdf/11688488_06.pdf
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Estudio hidrológico de la cuenca del río Choluteca con datos de precipitación y caudal.
          </p>
        </div>
      </div>

      {/* Nota sobre accesibilidad */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-gray-700 mb-2">📋 Nota sobre este material:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Este material funciona <strong>sin conexión a internet</strong>.</li>
          <li>Puede <strong>imprimirse</strong> usando el botón de cada sección.</li>
          <li>El audio usa la voz sintetizada del dispositivo (necesita navegador Chrome o Edge).</li>
          <li>Diseñado con texto grande y alto contraste para estudiantes con <strong>baja visión</strong>.</li>
          <li>Las fuentes citadas son verificables y de instituciones académicas u oficiales.</li>
        </ul>
      </div>
    </div>
  );
}
