const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

exports.getAllTestItems = async (req, res) => {
  const { data, error } = await supabase
    .from('test_items')
    .select('*');

  if (error) return res.status(500).json({ error });
  res.json(data);
};

exports.createTestItem = async (req, res) => {
  const { name } = req.body;

  const { data, error } = await supabase
    .from('test_items')
    .insert([{ name, created_at: new Date().toISOString() }]);

  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
};


