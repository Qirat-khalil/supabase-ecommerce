import  {createClient} from 'https://esm.sh/@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supaUrl = "https://qtbprkzbmdzptwxyzdhf.supabase.co";
const supaKey = "sb_publishable_wLTzB_Rh7UqolC5pHX-Ijw_J-yN1tWH";

const supabase = createClient(supaUrl,supaKey)

export default supabase;