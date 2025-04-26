import { supabase } from '@/lib/supabaseClient';

export const trackClick = async (ctaClicked: string) => {
  try {
    const { error } = await supabase
      .from('click_tracking')
      .insert([{ cta_clicked: ctaClicked }]);

    if (error) {
      console.error('Error tracking click:', error);
    }
  } catch (error) {
    console.error('Error sending click to Supabase:', error);
  }
};
