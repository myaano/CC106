const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// GET all report types
exports.getAllReportTypes = async (req, res) => {
  const { data, error } = await supabase.from('report_type').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// CREATE new report type
exports.createReportType = async (req, res) => {
  const { name } = req.body;
  const { data, error } = await supabase.from('report_type').insert([{ name }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};
