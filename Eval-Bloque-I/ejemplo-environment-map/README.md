# Ejemplo Environment Map.
## 1. Cube Texture Loader.
Necesitamos un "loader" de texturas especiales llamadas "Cube Textures". El loader se llama "CubeTextureLoader", y la vinculamos a nuestro "manager" también para que se carguen en paralelo y sepamos cuando estén listas todas las texturas.

## 2. Cargar Cube Textures.
Cargamos las "Cube Textures" y las guardamos en una constante creada por nosotros.

## 3. Environment Map.
Asignamos este "mapa" (también conocido como "environment map") al fondo de la escena para reemplazar el color sólido.

## 4. Conectar Environment Map con nuestro material.
Asignar nuestro "environment map" a un atributo en el material para que las partes metálicas lo reflejen.

# Recursos.
[Cube Textures para crear Environment Maps.](https://www.humus.name/index.php?page=Textures)