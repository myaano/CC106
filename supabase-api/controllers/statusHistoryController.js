const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// GET all status history
exports.getAllStatusHistory = async (req, res) => {
  const { data, error } = await supabase.from('status_history').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// CREATE new status history record
exports.createStatusHistory = async (req, res) => {
  const { report_id, change_by, old_status, new_status, changed_at } = req.body;
  const { data, error } = await supabase.from('status_history').insert([
    { report_id, change_by, old_status, new_status, changed_at }
  ]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};
