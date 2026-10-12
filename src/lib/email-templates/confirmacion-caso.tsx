import React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  radicado?: string
  cuerpo?: string
}

const ConfirmacionCaso = ({ radicado, cuerpo }: Props) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Recibimos tu caso{radicado ? ` — ${radicado}` : ''}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Recibimos tu caso</Heading>
        <Text style={texto}>{cuerpo ?? ''}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ConfirmacionCaso,
  subject: (d: Record<string, any>) =>
    d.radicado ? `Recibimos tu caso — ${d.radicado}` : 'Recibimos tu caso',
  displayName: 'Confirmación de caso al usuario',
  previewData: { radicado: 'AJC-2026-12345', cuerpo: 'Hola Ana,\n\nRecibimos tu caso.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px', maxWidth: '600px' }
const h1 = { color: '#0F5C4A', fontSize: '20px' }
const texto = { color: '#12212B', fontSize: '15px', whiteSpace: 'pre-wrap' as const, lineHeight: '1.6' }
