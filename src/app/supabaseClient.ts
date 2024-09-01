import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveEnquiry = async (formData: any) => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.surname,
          country: formData.country,
          phone_number: formData.phone,
          email: formData.email,
          message: formData.message,
        }
      ]);

    if (error) {
      throw error;
    }

    console.log('Enquiry saved:', data);
    return { success: true };
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return { success: false, message: 'Error saving enquiry' };
  }
};
