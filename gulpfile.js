//exports.tarea=tarea;
const {src,dest,watch,parallel}=require("gulp");


//CSS
const sass=require("gulp-sass")(require("sass"));
const plumber=require('gulp-plumber');


//IMÁGENES

const cache=require('gulp-cache');
const imagemin=require('gulp-imagemin');
const webp=require('gulp-webp');
const avif=require('gulp-avif');

function imagenes(done){
    const opciones={optimizationLevel: 3};

    src('src/img/**/*.{png,jpg}') //pipe tarea en especifico
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'))
    done();
}

function versionWebp(done){

    const opciones={quality: 50};

    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))
    done();

}

function versionavif(done){

    const opciones={quality:50};

    src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones)) //es la que menos pesa
    .pipe(dest('build/img'))
    done();

}

function css(done){

src("src/scss/**/*.scss")
.pipe(plumber())
.pipe(sass())
.pipe(dest("build/css"))
done();

}

function dev(done){

    watch("src/scss/**/*.scss", css)

    done();
}



function javascript (done){ //creamos las funciones 
    src('src/js/**/*.js') //src sirve para buscar los archivos dentro de la carpeta
    .pipe(dest('build/js'));

    done();
}



function dev(done){    //monitorear todas las tareas con las modificaciones
    watch("src/scss/**/*.scss",css)
    watch('src/js/**/*.js', javascript)

    done();
}

exports.css=css;
exports.js = javascript;
exports.imagenes=imagenes;
exports.versionWebp=versionWebp;
exports.versionavif=versionavif;
exports.dev=parallel(imagenes,versionWebp,versionavif,javascript,dev);

