# SHERRY-FIT

Sherry fit es un proyecto desarrollado por David Padial Pinteño, para su trabajo final del Grado Superior de Desarrollo de Aplicaciones Web.

### Finalidad

Tiene como finalidad hacer una web de un gimnasio con información que mostrar además, para reservar las clases que tiene el gimnasio en cada horario de la semana.

Está desplegado en una web para desarrollo(sherry-fit.vercel.app) por lo que estará dormido la mayor parte del tiempo.

### Instalación

La instalación es bastanse sencilla. Debes de entrar en la carpeta sherry-back y ejecutar el comando "npm install". Una vez hecho, crea un fichero con el nombre ".env" y en el escribir lo siguiente:

NODE_ENV = development
PORT = 5000
DB_URI = 'mongodb+srv://admin:admin@sherry.qk60x.mongodb.net/Gimnasio?retryWrites=true&w=majority'

Una vez tengamos el fichero, ejecutamos "npm run dev"

También tenemos que entrar en la carpeta sherry-front y ejecutar el comando "npm install" y "npm run dev"
