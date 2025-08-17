import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ContactFormData {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  created_at?: string
}

export async function submitContactForm(data: Omit<ContactFormData, 'id' | 'created_at'>) {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()

    if (error) {
      throw error
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
} 