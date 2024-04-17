import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://bryxoehgecsyylqpecsk.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeXhvZWhnZWNzeXlscXBlY3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxODg1NzEsImV4cCI6MjAyODc2NDU3MX0.gjjvZthvx39MeisfqbJRbQcqvR_QufBwzSGiEMWAFlc`
export const supabase = createClient(supabaseUrl, supabaseKey)
