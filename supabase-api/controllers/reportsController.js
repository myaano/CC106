const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

exports.getAllReports = async (req, res) => {
  try {
    const { data, error } = await supabase.from('reports').select('*');
    if (error) return res.status(500).json({ error });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createReport = async (req, res) => {
  try {
    const { type_id, status, municipality, barangay, description } = req.body;
    const { data, error } = await supabase
      .from('reports')
      .insert([{ type_id, status, municipality, barangay, description }]);
    if (error) return res.status(500).json({ error });
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.updateReportStatus = async (req, res) => {
//   try {
//     const reportId = req.params.id;
//     const { new_status, changed_by } = req.body;

//     const { error: updateError } = await supabase
//       .from('reports')
//       .update({ status: new_status })
//       .eq('id', reportId);
//     if (updateError) return res.status(500).json({ error: updateError });

//     const { error: logError } = await supabase
//       .from('Status')
//       .insert([{
//         report_id: reportId,
//         changed_by,
//         old_status: '...', // fetch actual old status if needed
//         new_status,
//         change_at: new Date().toISOString()
//       }]);
//     if (logError) return res.status(500).json({ error: logError });

//     res.json({ message: 'Status updated and logged.' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
