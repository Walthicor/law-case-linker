import React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  asunto?: string
  cuerpo?: string
}

const AvisoInterno = ({ asunto, cuerpo }: Props) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>{asunto ?? 'Nuevo formulario recibido'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{asunto ?? 'Nuevo formulario recibido'}</Heading>
        <Text style={pre}>{cuerpo ?? ''}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AvisoInterno,
  subject: (d: Record<string, any>) => d.asunto || 'Nuevo formulario recibido',
  displayName: 'Aviso interno de formularios',
  to: 'mardigitalcali@gmail.com',
  previewData: { asunto: '[TIER A · 85] Laboral · Cali · AJC-2026-12345', cuerpo: 'CASO NUEVO…' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px', maxWidth: '640px' }
const h1 = { color: '#12212B', fontSize: '18px' }
const pre = {
  color: '#12212B',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  whiteSpace: 'pre-wrap' as const,
  lineHeight: '1.5',
}
