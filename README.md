
## Problema 1:
Describe (lo más detalladamente posible) cómo crearías un stack Postgres/Java8/Angular.
Se espera una descripción de protocolos y componentes.
Se debe enviar esta información via e-mail, en un documento word.


 En cada uno de los proyectos.. Se ve claramente como estan separados los servicios, dto, model, repositorio y los servicios rest

En Angular tambien se ve claramente en el proyecto que se traaja por modulos y lazyload

## Problema 2:
Desarrollo de un servicio REST, que pueda ser consumido por un WebApp.
Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC
de 2 parámetros enviados al servicio: hora y timezone
(por ejemplo: dato1=18:31:45, dato2=-3), deberán devolver la hora calculada, en un archivo json
con el siguiente formato:
{
"response": {
"time": "18:43:00",
"timezone": "utc"
}
}


Se tiene el servico en el rest para obtener el resultado..

Me queda la duda de sacar el UTC.. Pero esta hecho los metodos para que de manera puntual con java 8 sustituya esos parametros y sacar el uct de manera correcta


## Problema 3
Se requiere el desarrollo de una WebApp desarrollada usando Angular 6 o similar
Si prefiere este lenguaje, o en su defecto, Angular JS. Si no conoce alguno de estos lenguajes,
pregunte si se puede utilizar otro.


Se leen las api a traves de los servicios implementados en angular, se protecge las ruta con guard,  se hace login y se lista lo que se pide en el test
```

