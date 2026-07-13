import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Paths
const policiesFile = path.join(__dirname, 'src', 'data', 'policies.json');
const publicDir = path.join(__dirname, 'public');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'policy-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Routes

// Get Policies
app.get('/api/policies', (req, res) => {
  try {
    const data = fs.readFileSync(policiesFile, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read policies' });
  }
});

// Update Policies
app.post('/api/policies', (req, res) => {
  try {
    const newPolicies = req.body;
    fs.writeFileSync(policiesFile, JSON.stringify(newPolicies, null, 2), 'utf8');
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to write policies' });
  }
});

// Upload PDF
app.post('/api/upload', upload.single('pdf'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    // Return the public URL path
    res.json({ pdfUrl: `/${req.file.filename}` });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
