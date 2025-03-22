# ApiTestEcho
Pruebas Api
# Cypress API Testing

## 📌 Descripción
Este proyecto contiene pruebas automatizadas de API utilizando **Cypress**. Se realizaron validaciones para los endpoints de la plataforma **Automation Exercise** y **Echo Server**, verificando códigos de estado, tiempos de respuesta, body y headers.

## 🚀 Pruebas realizadas
### 1️⃣ **Prueba en `/qa/test1`**
**Objetivo:** Validar el correcto funcionamiento del endpoint cuando responde exitosamente.
**Validaciones:**
- ✅ Código de estado `200`
- ✅ Tiempo de respuesta menor a `3000ms`
- ✅ Estructura esperada del body
- ✅ Headers esperados (`content-type: application/json`)

### 2️⃣ **Prueba en `/qa/test2`**
**Objetivo:** Validar la respuesta del sistema cuando ocurre un error.
**Validaciones:**
- ✅ Código de estado `500`
- ✅ Mensaje de error esperado
- ✅ Headers esperados (`content-type: application/json`)

## ⚙️ Instalación y ejecución
### **1. Clonar el repositorio**
```sh
 git clone https://github.com/MiguelDa17/ApiTestEcho.git
 cd cypress-api-test
```

### **2. Instalar dependencias**
```sh
npm install
```

### **3. Ejecutar pruebas en modo headless**
```sh
npx cypress run
```

### **4. Ejecutar pruebas en modo interactivo**
```sh
npx cypress open
```

## 📊 Reportes
Después de ejecutar las pruebas, se genera un reporte en HTML en:
```
cypress/reports/html/index.html
```
Para abrirlo:
```sh
open cypress/reports/html/index.html
```

## 📂 Repositorio
Puedes encontrar el código en el siguiente repositorio de GitHub:
🔗 [ApiTestEcho](https://github.com/MiguelDa17/ApiTestEcho.git)

