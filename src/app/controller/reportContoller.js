import { createReportService, getReportsService } from "../services/reportServices";

export async function createReportController(data) {
    
    const {municipality, barangay, problem} = data;

    if (!municipality || !barangay || !problem) {
      toast.error("Please fill in all fields");
      return;
    }

    const reportData = {
        municipality,
        barangay,
        problem,
        status: 'sent',
    };

    const report = await createReportService(reportData);

    return report;
}

export async function getReportsController() {
    const reports = await getReportsService();
    return reports;
}