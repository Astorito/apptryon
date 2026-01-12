-- Eliminar política existente
DROP POLICY IF EXISTS "Public video access" ON storage.objects;
DROP POLICY IF EXISTS "Allow public video access" ON storage.objects;

-- Crear política correcta con rol PUBLIC
CREATE POLICY "Allow public video access" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'video');