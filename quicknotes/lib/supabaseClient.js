import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and Anon Key
const supabaseUrl = 'https://xncsqbtejxosndzlfnwo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuY3NxYnRlanhvc25kemxmbndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNTczODYsImV4cCI6MjAzOTczMzM4Nn0.min2-b0WUWayCEe4SOv5tHW31eLWQNlTztq8lZy9fLE';

export const supabase = createClient(supabaseUrl, supabaseKey);
