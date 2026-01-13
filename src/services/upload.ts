const CLOUD_NAME = process.env.VITE_API_CLOUDINARY_KEY || '';
const UPLOAD_PRESET = process.env.VITE_UPLOAD_PRESET || '';

export const uploadFile = async (file: File): Promise<string> => {
  const publicId = `docs/${file?.name}`;
  const form = new FormData();

  form.append('file', file);
  form.append('upload_preset', UPLOAD_PRESET);
  form.append('public_id', publicId);

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`;

  const r = await fetch(endpoint, { method: 'POST', body: form });
  const data = await r.json();

  if (!r.ok) throw new Error(data?.error?.message || 'Upload failed');
  return data.url || '';
};
