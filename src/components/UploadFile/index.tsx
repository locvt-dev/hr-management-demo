import { uploadFile } from '@/services/upload';
import { useState } from 'react';

const DocxUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [res, setRes] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const uploadDocx = async () => {
    if (!file) return;

    setLoading(true);
    setErr('');

    try {
      const data = await uploadFile(file);

      setRes(data);
    } catch (e: any) {
      setErr(e.message || 'Upload error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button onClick={uploadDocx} disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload / Update DOCX'}
      </button>

      {err && <div style={{ color: 'crimson' }}>{err}</div>}

      {res && (
        <div>
          <div>
            <b>url:</b> {res}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocxUploader;
