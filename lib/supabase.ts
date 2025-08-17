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
  console.log('🔧 submitContactForm called with data:', data)
  console.log('🌐 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('🔑 Supabase Key length:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0)
  
  try {
    console.log('📤 Attempting to insert data into contact_submissions table...')
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()

    console.log('📥 Supabase response:', { result, error })

    if (error) {
      console.error('❌ Supabase error:', error)
      throw error
    }

    console.log('✅ Data inserted successfully:', result)
    return { success: true, data: result }
  } catch (error) {
    console.error('💥 Error submitting contact form:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
} 