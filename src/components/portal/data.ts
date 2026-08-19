// Contenido editable del portal. Añade aquí PDFs, enlaces o videos reales
// completando el campo `href` (por ahora vacío = "próximamente").

export type RecursoCategoria =
  | "Material didáctico"
  | "Infografías"
  | "Clases"
  | "Herramientas digitales"
  | "Actividades";

export type Recurso = {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: RecursoCategoria;
  tipo: "PDF" | "Enlace" | "Video" | "Documento";
  href?: string;
};

export const categorias: RecursoCategoria[] = [
  "Material didáctico",
  "Infografías",
  "Clases",
  "Herramientas digitales",
  "Actividades",
];

export const recursos: Recurso[] = [
  {
    id: "guia-estudio",
    titulo: "Guía de estudio base",
    descripcion:
      "Plantilla de guía con objetivos, contenidos y criterios de evaluación lista para adaptar a cada asignatura.",
    categoria: "Material didáctico",
    tipo: "PDF",
  },
  {
    id: "cuaderno-practicas",
    titulo: "Cuaderno de prácticas",
    descripcion:
      "Ejercicios progresivos para reforzar el aprendizaje práctico dentro y fuera del aula.",
    categoria: "Material didáctico",
    tipo: "Documento",
  },
  {
    id: "infografia-proceso",
    titulo: "Infografía: proceso de aprendizaje",
    descripcion:
      "Resumen visual de las etapas de un proceso formativo, pensado para proyectar o imprimir.",
    categoria: "Infografías",
    tipo: "PDF",
  },
  {
    id: "infografia-organizacion",
    titulo: "Infografía: organización académica",
    descripcion:
      "Esquema visual sobre registro, control y seguimiento de estudios de forma clara y ordenada.",
    categoria: "Infografías",
    tipo: "PDF",
  },
  {
    id: "clase-intro",
    titulo: "Clase introductoria",
    descripcion:
      "Presentación de apertura de módulo con estructura, expectativas y dinámica de trabajo.",
    categoria: "Clases",
    tipo: "Video",
  },
  {
    id: "clase-taller",
    titulo: "Taller práctico grabado",
    descripcion:
      "Sesión aplicada paso a paso para acompañar el estudio autónomo del estudiante.",
    categoria: "Clases",
    tipo: "Video",
  },
  {
    id: "kit-digital",
    titulo: "Kit de herramientas digitales",
    descripcion:
      "Selección de aplicaciones para crear materiales, evaluar y organizar el aula digital.",
    categoria: "Herramientas digitales",
    tipo: "Enlace",
  },
  {
    id: "plantillas-aula",
    titulo: "Plantillas para el aula virtual",
    descripcion:
      "Formatos reutilizables para presentaciones, rúbricas y seguimiento del avance académico.",
    categoria: "Herramientas digitales",
    tipo: "Documento",
  },
  {
    id: "actividad-colaborativa",
    titulo: "Actividad colaborativa",
    descripcion:
      "Dinámica grupal con roles definidos para fomentar el trabajo en equipo y la argumentación.",
    categoria: "Actividades",
    tipo: "Documento",
  },
  {
    id: "actividad-evaluacion",
    titulo: "Actividad de autoevaluación",
    descripcion:
      "Instrumento breve para que el estudiante identifique logros y puntos de mejora.",
    categoria: "Actividades",
    tipo: "PDF",
  },
];

export type Modulo = {
  id: string;
  titulo: string;
  descripcion: string;
  contenidos: string[];
};

export const modulos: Modulo[] = [
  {
    id: "gerencia",
    titulo: "Estrategias y prácticas gerenciales",
    descripcion:
      "Fundamentos de la gestión aplicada a organizaciones e instituciones educativas.",
    contenidos: [
      "Planificación estratégica y objetivos",
      "Toma de decisiones y liderazgo",
      "Indicadores de gestión y seguimiento",
      "Casos prácticos de análisis organizacional",
    ],
  },
  {
    id: "rrhh",
    titulo: "Administración de Recursos Humanos",
    descripcion:
      "Procesos clave para la gestión de personas dentro de una organización.",
    contenidos: [
      "Reclutamiento, selección e inducción",
      "Descripción y análisis de cargos",
      "Evaluación del desempeño",
      "Clima organizacional y motivación",
    ],
  },
  {
    id: "informes",
    titulo: "Redacción de informes técnicos",
    descripcion:
      "Estructura, claridad y precisión en la comunicación escrita profesional.",
    contenidos: [
      "Estructura del informe técnico",
      "Redacción clara y objetiva",
      "Presentación de datos y evidencias",
      "Revisión, estilo y normas de presentación",
    ],
  },
  {
    id: "tecnologia",
    titulo: "Tecnología educativa",
    descripcion:
      "Integración de la tecnología en el diseño y la mediación del aprendizaje.",
    contenidos: [
      "Diseño de contenidos digitales",
      "Entornos virtuales de aprendizaje",
      "Evaluación mediada por tecnología",
      "Buenas prácticas y accesibilidad",
    ],
  },
  {
    id: "herramientas",
    titulo: "Herramientas digitales",
    descripcion:
      "Uso práctico de aplicaciones para producir, organizar y compartir materiales.",
    contenidos: [
      "Creación de presentaciones e infografías",
      "Organización documental y colaboración",
      "Automatización de tareas académicas",
      "Publicación y distribución de recursos",
    ],
  },
];
