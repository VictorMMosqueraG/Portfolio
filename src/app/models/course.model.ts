export type CertificateBadge = 'Certificado' | 'Completado' | 'En Curso';

export interface Course {
  id: number;
  badge: CertificateBadge;
  issuer: string;
  name: string;
  date: string;
  verifyUrl?: string;
}
