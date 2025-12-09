const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// GET all admins
exports.getAllAdmins = async (req, res) => {
  const { data, error } = await supabase.from('admin').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// CREATE new admin
exports.createAdmin = async (req, res) => {
  const { username, password_hash } = req.body;
  const { data, error } = await supabase.from('admin').insert([{ username, password_hash }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};
