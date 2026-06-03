'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Check, Mail, Phone } from 'lucide-react'

interface NotifyMeFormProps {
  productName: string
  variantSize: string
}

export function NotifyMeForm({ productName, variantSize }: NotifyMeFormProps) {
  const [contactType, setContactType] = useState<'email' | 'whatsapp'>('email')
  const [contactValue, setContactValue] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!contactValue.trim()) {
      setError(contactType === 'email' ? 'Masukkan alamat email' : 'Masukkan nomor WhatsApp')
      return
    }

    if (contactType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)) {
      setError('Format email tidak valid')
      return
    }

    if (contactType === 'whatsapp' && !/^(\+62|62|08)\d{8,12}$/.test(contactValue.replace(/\s|-/g, ''))) {
      setError('Format nomor WhatsApp tidak valid')
      return
    }

    if (!consent) {
      setError('Kamu harus menyetujui untuk menerima notifikasi')
      return
    }

    // Mock submit
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-neutral-200 p-5 bg-neutral-50">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-black">
            <Check className="h-3 w-3 text-white" />
          </div>
          <div>
            <p className="font-body text-sm font-medium text-neutral-900">
              Kamu sudah terdaftar!
            </p>
            <p className="font-body text-xs text-neutral-500 mt-1">
              Kami akan menghubungi kamu via {contactType === 'email' ? 'email' : 'WhatsApp'} saat{' '}
              <strong>{productName}</strong> ukuran <strong>{variantSize}</strong> tersedia kembali.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-neutral-200 p-5 space-y-4">
      <p className="font-body text-sm text-neutral-700">
        Beri tahu saya saat <strong>{productName}</strong> ({variantSize}) tersedia:
      </p>

      {/* Contact type toggle */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => { setContactType('email'); setContactValue(''); setError('') }}
          className={`flex items-center gap-1.5 px-3 py-2 font-body text-xs transition-all ${
            contactType === 'email'
              ? 'bg-black text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          <Mail className="h-3 w-3" />
          Email
        </button>
        <button
          type="button"
          onClick={() => { setContactType('whatsapp'); setContactValue(''); setError('') }}
          className={`flex items-center gap-1.5 px-3 py-2 font-body text-xs transition-all ${
            contactType === 'whatsapp'
              ? 'bg-black text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          <Phone className="h-3 w-3" />
          WhatsApp
        </button>
      </div>

      {/* Input field */}
      <input
        type={contactType === 'email' ? 'email' : 'tel'}
        id="notify-me-input"
        value={contactValue}
        onChange={e => { setContactValue(e.target.value); setError('') }}
        placeholder={contactType === 'email' ? 'nama@email.com' : '08xxxxxxxxxx'}
        className="w-full border border-neutral-300 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-black transition-colors"
      />

      {error && (
        <p className="font-body text-xs text-red-600">{error}</p>
      )}

      {/* Consent */}
      <label className="flex items-start gap-2.5 cursor-pointer">
        <Checkbox
          id="notify-me-consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked as boolean)}
          className="mt-0.5 rounded-none border-neutral-400 data-[state=checked]:bg-black data-[state=checked]:border-black"
        />
        <span className="font-body text-xs text-neutral-500 leading-relaxed">
          Saya setuju menerima notifikasi restock untuk produk ini. Data saya tidak akan dibagikan ke pihak ketiga.
        </span>
      </label>

      {/* Submit */}
      <Button
        type="submit"
        id="notify-me-submit"
        className="w-full rounded-none bg-black text-white hover:bg-neutral-800 font-body text-xs uppercase tracking-[0.15em] h-11"
      >
        Daftarkan Saya
      </Button>
    </form>
  )
}
