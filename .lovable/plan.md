
## Fix: Drag de imágenes en /demo

### Causa raíz del problema

Hay dos problemas que impiden el drag:

1. **`overflow-hidden` en el contenedor**: El `div` padre con `overflow-hidden` hace que el ghost image del drag aparezca cortado o no se genere correctamente en algunos navegadores.

2. **Falta de `onDragStart` con `dataTransfer`**: El widget de TryOn espera recibir la URL de la imagen via el evento `dragstart`. Sin setear `dataTransfer.setData("text/uri-list", url)` y `dataTransfer.setData("text/plain", url)`, el widget no sabe qué imagen está siendo arrastrada.

3. **`pointer-events` conflicto**: El `group-hover:scale-105` con `transition-transform` puede capturar eventos del mouse antes de que el drag comience.

### Cambios a realizar en `src/pages/Demo.tsx`

**1. Agregar `onDragStart` a cada imagen** para pasar la URL al widget:
```tsx
onDragStart={(e) => {
  e.dataTransfer.setData("text/uri-list", product.image);
  e.dataTransfer.setData("text/plain", product.image);
  e.dataTransfer.effectAllowed = "copy";
}}
```

**2. Remover `overflow-hidden` del contenedor de imagen**, o mantenerlo pero mover el `overflow-hidden` sólo al contenedor exterior del card, no al wrapper de la imagen — para que el ghost del drag se genere correctamente.

**3. Eliminar el `group-hover:scale-105`** de la imagen ya que interfiere con el inicio del drag al generar un transform activo.

**4. Agregar `onDragOver` y `onDrop` hints** al widget container si es necesario (aunque esto lo maneja el widget de TryOn).

### Resultado esperado

- El usuario puede hacer click y drag desde cualquier imagen del catálogo
- El ghost image del drag se ve completo (no cortado)
- El widget de TryOn recibe la URL de la imagen correctamente via `dataTransfer`
- El hover visual se mantiene pero sin interferir con el drag

### Archivo a modificar

- `src/pages/Demo.tsx` — sólo el bloque del `<img>` y su contenedor `div.aspect-[4/5]`
