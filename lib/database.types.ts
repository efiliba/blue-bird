export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Tweets: {
        Row: {
          created_at: string
          id: string
          tweet: string
        }
        Insert: {
          created_at?: string
          id?: string
          tweet: string
        }
        Update: {
          created_at?: string
          id?: string
          tweet?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
