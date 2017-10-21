// Configuracion indicada en el curso.
'use strict';

// These are important and needed before anything else
require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const nguniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Definir el router a utilizar
function angularRouter(req, res) {
  res.render('index', {req, res});
}

// Crear la aplicacion
const app = express();

// Registrar el engine que vamos a utilizar para el renderizado
app.engine('html', nguniversal.ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));
app.set('view engine', 'html'); // Input es html y output es html
app.set('views', 'dist/browser'); // Render the views to the dist folder, remplazando lo que

// Ruta / la trata nuestro angularRouter
app.get('/', angularRouter);

// Serve static files
app.use(express.static(`${__dirname}/dist/browser`));

// Cualquier otra ruta que no sea / la redirigimos al angularRouter para que haga la resolucion correcta.
app.get('*', angularRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});