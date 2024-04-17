// hooks/useRealTime.js
import { useEffect } from 'react'
import { supabase } from '../services/supabase'

export const useRealTime = (channel, event, schema, table, handler) => {
  useEffect(() => {
    const subscription = supabase
      .channel(channel)
      .on('postgres_changes', { event: '*', schema, table }, handler)
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [channel, event, schema, table, handler])
}
