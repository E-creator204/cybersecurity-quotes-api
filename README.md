# 🔐 Cybersecurity Quotes API

API de frases motivacionales sobre ciberseguridad, privacidad y protección de datos personales para tu perfil de GitHub.

## 🚀 Instalación y Despliegue

### Requisitos previos
- Cuenta en [GitHub](https://github.com)
- Cuenta en [Vercel](https://vercel.com) (gratis)
- Git instalado en tu computadora

### Paso 1: Crear el repositorio en GitHub

1. Ve a GitHub y crea un nuevo repositorio
2. Nómbralo: `cybersecurity-quotes-api`
3. Márcalo como **público** o **privado** (tu elección)
4. **NO** inicialices con README

### Paso 2: Clonar y configurar localmente

```bash
# Clonar el repositorio vacío
git clone https://github.com/TU-USUARIO/cybersecurity-quotes-api.git
cd cybersecurity-quotes-api

# Crear la estructura de carpetas
mkdir api

# Crear los archivos (copia el contenido de los artifacts)
# api/index.js
# vercel.json
# package.json
# README.md
```

### Paso 3: Subir el código a GitHub

```bash
git add .
git commit -m "Initial commit: Cybersecurity Quotes API"
git push origin main
```

### Paso 4: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Importa tu repositorio `cybersecurity-quotes-api`
4. Vercel detectará automáticamente la configuración
5. Haz clic en **"Deploy"**
6. Espera 1-2 minutos hasta que termine el despliegue
7. ¡Listo! Vercel te dará una URL como: `https://tu-proyecto.vercel.app`

## 📖 Cómo usar en tu README de GitHub

Una vez desplegado, usa tu API en tu perfil con esta sintaxis:

```markdown
![Cybersecurity Quote](https://TU-PROYECTO.vercel.app/api)
```

### Temas disponibles

```markdown
<!-- Tema oscuro (default) -->
![Quote](https://TU-PROYECTO.vercel.app/api?theme=dark)

<!-- Tema Matrix -->
![Quote](https://TU-PROYECTO.vercel.app/api?theme=matrix)

<!-- Tema Cybersec -->
![Quote](https://TU-PROYECTO.vercel.app/api?theme=cybersec)

<!-- Tema Tokyo Night -->
![Quote](https://TU-PROYECTO.vercel.app/api?theme=tokyonight)

<!-- Tema Radical -->
![Quote](https://TU-PROYECTO.vercel.app/api?theme=radical)

<!-- Tema Merko -->
![Quote](https://TU-PROYECTO.vercel.app/api?theme=merko)
```

### Tipos de diseño

```markdown
<!-- Horizontal (default) -->
![Quote](https://TU-PROYECTO.vercel.app/api?type=horizontal)

<!-- Vertical -->
![Quote](https://TU-PROYECTO.vercel.app/api?type=vertical)
```

### Combinaciones

```markdown
![Quote](https://TU-PROYECTO.vercel.app/api?theme=matrix&type=horizontal)
```

## ➕ Agregar tus propias frases

Edita el archivo `api/index.js` y agrega más frases al array `quotes`:

```javascript
const quotes = [
  {
    text: "Tu frase aquí",
    author: "Autor"
  },
  // ... más frases
];
```

Después de editar, haz commit y push:

```bash
git add api/index.js
git commit -m "Agregadas nuevas frases"
git push origin main
```

Vercel automáticamente redesplegar tu API con los cambios.

## 🎨 Temas personalizados

Puedes crear tus propios temas editando el objeto `themes` en `api/index.js`:

```javascript
const themes = {
  miTema: {
    bg: '#CODIGO_COLOR_FONDO',
    border: '#CODIGO_COLOR_BORDE',
    text: '#CODIGO_COLOR_TEXTO',
    accent: '#CODIGO_COLOR_ACENTO'
  }
};
```

## 📝 Frases incluidas

El API incluye 15 frases sobre:
- Ciberseguridad
- Privacidad y datos personales
- Educación en seguridad
- Concienciación digital
- Protección de información

**Frase destacada:**
> "La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo." — Paulo Freire

## 🔧 Solución de problemas

**La imagen no carga:**
- Verifica que la URL de Vercel sea correcta
- Asegúrate de que el despliegue fue exitoso en el dashboard de Vercel

**Quiero cambiar las frases:**
- Edita `api/index.js` y haz push a GitHub
- Vercel automáticamente actualizará

**Error 500:**
- Revisa los logs en el dashboard de Vercel
- Verifica que la sintaxis del código sea correcta

## 📄 Licencia

MIT License - Úsalo libremente en tus proyectos.

---

**Creado con 💚 para la comunidad de ciberseguridad**