# Proyecto Web: La Tartería de Rafi

## Realización de Página Web empleando el uso del Framework "Bootstrap 4", JavaScript y Jquery a petición del cliente.

## Pasos Previos:
 * Sketch: Parte del trabajo inicial, realizado a papel y lapiz en el que se realiza un boceto inicial de lo que desea o esperar el cliente obtener de la página web, se trata de una primera aproximación no funcional y un poco alejada de lo que finalmente se ha adoptado.
 * Wireframe: Siguiente fase al _Sketch_, se trata de una distribución de los elementos que componen la página web sin entrar en elementos funcionales y sin entrar en temas de diseño, solamente de distribución. El realizado en esta práctica se ha hecho mediante el programa Axure y se ha subido a la nube de la misma mediante el siguiente enlace: [Wireframe](https://ipi0u0.axshare.com/)
 * MockUp: Último paso previo a la realización del prototipo, se ha realizado mediante el programa Axure, y esta fase ya recoge la estética que va a adoptar nuestra página web y alguna funcionalidad introducida, como el menú desplegable en tamaños móviles o el slider funcional. Enlace: [MockUp](https://591zu4.axshare.com)

## Descripción del Contenido Prototipo:

La web realizada presenta una serie de páginas que responde a las necesidades del cliente, abarcando las necesidades que el cliente ha presentado durante el desarrollo de este proyecto; estas necesidades se han transformado en un total de 4 páginas (Inicio, Portfolio, Servicios y Contacto), permitiendo su traducción (español por defecto) al inglés (ésto no es posible realizarlo a nivel local, si mediante por ejemplo "Live Server"). La estética creada va en sintonía con los colores del logo del cliente.

Esta serie de páginas establecen una buena base para, en un futuro, dotar a la página web de un dinamismo que se completará en los próximos meses ya que a día de hoy, la web no cumple con algunos de los requisitos funcionales que ésta necesita. Las distintas páginas son:

### 1 - Inicio:
Es la página de entrada a la web y se compone de :
  * Cabecera: Con el logotipo de _La Tartería de Rafi_ en la parte izquierda ocupando una proporción adecuada, ésta proporción se reduce en un porcentaje determinado conforme el usuario realiza un "_Scroll_" mayor de 200 píxeles en pantallas superiores a 780 píxeles y se mantiene la proporción en pantallas inferiores a 780 píxeles.
  En la zona central-derecha tenemos la barra de navegación que nos permitirá manejarnos a través de las diferentes páginas de la web, ésta zona se contrae al igual que el logotipo, adoptando una alineación más centrada.
  También se incluyen dos banderas en la zona derecha superior que darán acceso a los distintos idiomas disponibles en nuestra página web. La barra de navegación se contrae en tamaños pequeños, disponiendose de un botón desplegable que proporciona acceso a las distintas páginas.
  * Cuerpo de la página: 
     * El primer elemento del cuerpo se trata de un _Slider_ compuesto por diferentes imágenes de los trabajos del cliente, y que los usuarios podrán disfrutar. El _Slider_ permite navegar cómodamente entre las distintas imágenes y posee una vista en miniatura de las imágenes disponibles en el elemento, pudiendo acceder a ellas directamente. Este elemento mantiene su posición en los diferentes tamaños de dispositivo, adaptando su tamaño a los mismos.
    
     * El siguiente elemento se trata de una zona dedicadas a _Noticias_ en la que el cliente puede publicarlas. Para ello se disponen 3 noticias colocadas en serie incluyendo una foto ilustrando la noticia, un título de la noticia y una breve descripción de la misma.
    
       La noticia incluye un enlace interno _"Leer más..."_ que abre una ventana, ésta ventana incluye una descripción más amplia de la noticia y fotos de las obras del cliente relacionadas con dicha noticia; las imágenes permiten obtener un _zoom_ para una mayor visibilidad de los detalles de las fotos.
    
       Ésta zona varía en tamaños de pantalla _SM_ y _XS_ adoptando cada noticia el espacio correspondiente a una fila completa, así pues, las noticias se sitúan una debajo de otra y no de forma contigua.
   
       Por último, se sitúa una paginación a través de la cual el usuario se puede mover a través de las noticias. Por cada paginación se incluyen 3 noticias (el flujo de noticias que tiene el cliente es bajo), de ésta forma no se sobrecarga la página haciendola más cómoda.
   
  * Pie de página: Al igual que la cabecera, se encuentra el logotipo de la empresa del cliente en la parte izquierda del elemento, aunque este logotipo es más reducido. En la parte central tenemos la dirección de la tienda del cliente y en la parte derecha tenemos distintos logotipos pertenecientes a las diferentes redes sociales (Instagram, Twitter, Facebook y el e-mail del cliente) con sus correspondientes enlaces.
  
    El diseño se mantiene constante para los diferentes tamaños de pantalla, reduciendo el tamaño de los logotipos y de las letras conforme se disminuye el tamaño.
   
### 2 - Portfolio:
Es la subpágina que recoge los distintos trabajos realizados por el cliente, permitiendo una buena visualización de todos y permitiendo (en un futuro) interactuar a través de comentarios; se compone de:
 * Cabecera: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la descripción de la página de _Inicio_.
 
 * Cuerpo de la página:
   * Esta zona de compone de un título que nos inidca la zona de la web en la que estamos _Portfolio_ en este caso, posteriormente tenemos filas de fotografías de las obras del cliente. Las filas se compondrán de 4 fotografías en tamaños grandes, 3 en tamaños de pantalla medianos y 2 en tamaños de pantalla pequeños.
   
     El número de filas inciales será de 3, pudiendo el usuario aumentarlas de 3 en 3 conforme hace _click_ sobre la flecha situada en la zona inferior.
  
   * A parte, las fotografías permiten al _clickar_ sobre ellas, abrir una zona emergente en la que el usuario pobra ver una galería de imágenes de la obra del cliente, pudiendo si desea ampliarlas a pantalla completa para mayor detalle. También podrá (en un futuro) dejar comentarios en las diferentes galerías.
 
 * Pie de página: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la zona habilitada para la descripción de la página de _Inicio_.
 
 ### 3 - Servicios:
 * Cabecera: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la descripción de la página de _Inicio_.
 
 * Cuerpo de la página:
   * Al igual que la página anterior, en la zona superior tenemos un elemento de texto que ayuda a situarse en la subpágina dentro de la web, a continuación tenemos una serie de botones que contienen un breve texto descriptivo de los distintos servicios que ofrece el cliente y proporcionan un desplazamiento, en función del botón que se accione, hasta el servicio _clickado_. Éste grupo de botones se adapta a cada tipo de tamaño de pantalla.
   * Se disponen de los distintos servicios en fila, compuestas por una foto descriptiva, un título del servicio, un subtítulo y una serie de comentarios al respecto de los distintos servicios. En pantallas de dimensiones pequeñas, las fotos pasan en su mayoría a ocupar la totalidad del ancho, al igual que el texto que las acompaña
 
  * Pie de página: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la zona habilitada para la descripción de la página de _Inicio_.

 ### 4 - Contacto:
  * Cabecera: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la descripción de la página de _Inicio_.
  * Cuerpo de la página: 
    * Conformado por una zona superior en la que se describe con un texto la subpágina en la que se encuentra el usuarios, a continuación situado debajo de éste, encontramos en la zona izquierda una foto del establecimiento del cliente, con el teléfono y el correo electrónico a pie de foto; en la zona de la derecha nos encontramos un breve formulario de contacto, compuesto por un título, un subtítulo y 4 campos de formulario (nombre, e-mail, asunto y una zona para desarrollar el asunto) acompañados de un botón para realizar el envío (actualmente deshabilitado). En pantallas de tamaño pequeño, las fotos pasan a ocupar la totalidad del ancho de la pantalla y los elementos de formularios también
    * Una fila inferior a la anterior en la que encontramos un texto, con un _Iframe_ de _Google Maps_ donde el usuario puede ver la dirección del establecimiento y a su lado, los horarios que presenta el establecimiento. Al igual que la fila anterior, en pantallas _SM y XS_ la disponsición del _iframe_ ocupa la totalidad del ancho y el horario se sitúa a continuación.  
  * Cabecera: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la descripción de la página de _Inicio_.  * Pie de página: elemento común en las distintas páginas de la página web, la descripción de la misma se puede ver en la zona habilitada para la descripción de la página de _Inicio_.  
  
## Tecnología Empleada:

### Framework "Bootstrap 4"
Se ha empleado a lo largo del desarrollo de la página web, muchos componentes de Bootstrap 4, así como sus utilidades y su comodidad en el empleo de las rejillas basadas en filas y columnas. Se presenta a continuación un listado de los componentes empleados de este _framework_:
 * Badge: Empleada para representar un contador de mensajes nuevos en las ventanas emergentes de la página **Portfolio**.
 * Buttons: Empleado en la página de **Contacto** para realizar el envío del formulario.
 * Button group: Empleado en la página **Servicios** para dar acceso mediante una transición a los distintos tipos de servicios de los que dispone el cliente.
 * Card: Implementado en **Inicio** en la zona de noticias y en **Portfolio** para distribuir las distintas líneas de imágenes disponsibles.
 * Collapse: Empleado en el menú desplegable de la cabecera para desplegar las distintas opciones del menú una vez éste se ha contraido en tamaños pequeños. También se emplea para desplegar la siguiente batería de imágenes de la página **Portfolio**.
 * Jumbotron: Elemento empleado para recoger la lista de noticias en la página **Inicio**.
 * Modal: Implementado en las páginas **Inicio** en las opciones de _Leer más_ y en **Portfolio** en cada imágen.
 * Navbar: Implementado en la cabecera en la barra de navegación.
 * Pagination: Empleado en la página **Inicio** para dar acceso a distintas baterías de noticias.
 * Popover: Empleado en el botón de _Enviar_ en la página **Contacto** para hacer saber que se ha enviado correctamente.
 * Toast: Implementado en los comentarios de la página **Portfolio**.

### JavaScript y JQuery
A lo largo de la página web, se encuentra una serie de elementos realizados con la tecnología JQuery, algunos implementados de forma nativa y otros a través de librería facilitadas por otros programadores. A continuación se enumeran los elementos que se han empleado:
 * Pantalla de carga: Se ha realizado una _Pantalla de carga_ que dura un breve periodo de tiempo, de forma que el usuario no perciba de una forma "vulgar" el proceso de carga de la página. Para ello se emplea un método nativo de JQuery y se enlaza con un _id_ que posee una imagen _gif_ de carga.
 * Reducción del tamaño de la cabecera: Se ha empleado código JQuery para llevar a cabo la reducción del tamaño de los elementos de cabecera, accediendo a su css y modificandolo en caso de cumplirse una serie de requisitos.
 * JQuery en componentes de Bootstrap 4: Se ha recogido el código necesario para iniciar el funcionamiento de una serie de componentes de Bootstrap 4, en concreto: _tooltip_ y _popover_.
 * Botón desplegable: En la subpágina _Portfolio_ se inforpora un evento mediante una función de "click" para desplegar las nuevas imágenes de forma elegante.
 * Zoom en las fotos de las noticias de la página **Inicio**: Se ha implementado la posibilidad de hacer zoom de las fotos del modal de las noticias, esto es posible gracias a una librería realizada por otro usuario usando JQuery.
 [JQuery Zoom](http://www.jacklmoore.com/zoom/)
 * Galerías de imágenes: También realizado gracias a una librería externa realizada por un usuario, permitiendo haber realizado un slider en la página **Inicio** personalizable y dentro de las distintas galerías de la página **Portfolio** dando al usuario la opción de ampliar las imágenes a tamaño completo de pantalla.
 [Fotorama](https://fotorama.io/)
 * Traducción de la página web: Realizado mediante una libreria externa que permite alternar los distintos lenguajes, para ello se emplean archivos de tipo _JSON_ en los cuales se recogen los textos disponibles en la página web y una función JQuery se encarga de gestionar el idioma seleccionado.
 [JQuery Localize](https://github.com/coderifous/jquery-localize)
 * Desplazamiendo en la página **Servicios**: Éstas funcionalidad se encuentra realizada mediante la librería AnimateScroll, y permite una transición suave hacia el servicio sobre el que el usuario hace _click_.
 [AnimateScroll](https://plugins.compzets.com/animatescroll/)
 
 
## Objectivos Pendientes:
1. Crear una zona privada a la que pueda acceder el cliente para realizar las operaciones que considere oportunas, ésta zona será accesible a través de un _Login_.
2. Crear una parte, dentro de ésta zona, en la que el cliente pueda gestionar las noticias de la página **Inicio**, pudiendo tanto crear nuevas noticias, como eliminarlas o modificarlas a su gusto.
3. También implementar una zona en la que el cliente pueda realizar la inclusión de imágenes en la página **Portfolio** así como en las distintas galerías que se encuentran implementadas; también se debe permitir el borrado y la modificación.
4. Disponer de los medios necesarios para gestionar los comentarios realizados en las distintas galerías, tanto por parte del usuario como para realizar el borrado.
5. Unido al requisito anterior, los usuarios deben poder dejar sus comentarios a través del elemento destinado para dicho acto. Éstos usuarios deberán realizar un registro uniendo su identidad con la que posea en sus redes sociales (principalmente Facebook).
6. Incrementar la cantidad de imágenes disponibles en **Porfolio** así como en sus galerías.
7. Dotar de funcionalidad a la página de **Contacto** permitiendo a los usuarios realizar las peticiones que consideren necesarias, obligando a éstos a cumplir una serie de restricciones en el rellenado de los campos disponibles y permitiendo al cliente, recibir a tiempo real éstas consultas.
8. Realizar las mejoras estéticas que el cliente considere oportunas.
