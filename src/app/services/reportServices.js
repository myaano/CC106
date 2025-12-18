import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function createReportService(formData) {
    const { data, error } = await supabaseAdmin
        .from('reports')
        .insert([formData]);

    if (error) {
        throw error;
    }

    return data;
}

export async function getReportsService() {
    const { data, error } = await supabaseAdmin
        .from('reports')
        .select('id, municipality, barangay, problem');
        
    if (error) {
        throw error;
    }       
    return data;
}