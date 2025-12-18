'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TestPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/reports');
      const json = await res.json();

      setItems(json.data || []);
    }

    load();
 
  }, []);

  return (
    <div>
      <h1>Reports</h1>

      {items.map((report) => (
        <div key={report.id}>
        <h3>Report #{report.id}</h3>  

        <p>Type: {report.report_type?.name}</p>

        <p>Verified By: {report.verified_by?.username || 'N/A'}</p>

        <h4>Status History:</h4>
        <ul>
          {report.status_history?.map((status) => (
            <li key={status.id}>
              {status.status} → {status.new_status}
            </li>  
          ))}
        </ul>

        </div>
      ))}
    </div>
  );
}
