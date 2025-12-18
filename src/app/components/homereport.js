import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";

export default function HomeReport() {
  const [reports, setReports] = useState([]);


  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch('/api/reports');
        const data = await response.json();
        console.log('Fetched reports:', data);
        setReports(data.reports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    }
    fetchReports();
  }, []);


  return (
    <div className="p-4 rounded-lg border border-gray-200 shadow-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Municipality</TableHead>
            <TableHead>Baranggay</TableHead>
            <TableHead>Problem</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports && reports.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-medium">{r.id}</TableCell>
              <TableCell>{r.municipality}</TableCell>
              <TableCell>{r.barangay}</TableCell>
              <TableCell className="text-right">
                {r.problem}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}
