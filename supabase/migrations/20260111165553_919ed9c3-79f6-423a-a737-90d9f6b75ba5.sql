-- Eliminar política actual incorrecta
DROP POLICY IF EXISTS "Allow public read access on video bucket" ON storage.objects;

-- Crear nueva política con roles correctos de Supabase
CREATE POLICY "Public video access"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'video');