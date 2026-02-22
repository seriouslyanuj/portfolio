import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export const sendContactMessage = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await apiClient.post<ContactResponse>('/api/contact', data)
  return response.data
}
